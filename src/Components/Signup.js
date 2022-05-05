import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import insta from '../Assets/Instagram.JPG';
import logo1 from '../Assets/head1.jpg';
import logo2 from '../Assets/head2.jpg';
import logo3 from '../Assets/head3.jpg';
import logo4 from '../Assets/head4.jpg';
import logo5 from '../Assets/head5.jpg';
import { makeStyles } from '@mui/styles';
import { Alert,TextField } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {Link,useNavigate} from 'react-router-dom';
import {useState,useContext} from 'react';
import { database,storage } from '../firebase';
import { AuthContext } from '../Context/AuthContext';
import "./Signup.css";
export default function Signup() {

    const useStyles = makeStyles({
        text1:{
            color:"grey",
            textAlign:"center"
        },
        card2:{
            height:"10vw",
            margin:"1vw",
            width:"120%"
        },
        card3:
        {
            width:"120%",
            
        }
    })

    const classes = useStyles();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [file,setFile] = useState(null);
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false)
    const history = useNavigate();

    const {signup} = useContext(AuthContext);

    const handleClick = async() => {
        if(file==null){
            setError("Please upload profile image first");
            setTimeout(()=>{
                setError('')
            },2000)
            return;
        }
        
        try{
            setError('')
            setLoading(true)
            let userObj = await signup(email,password)
            let uid = userObj.user.uid
            const uploadTask = storage.ref(`/users/${uid}/ProfileImage`).put(file);
            uploadTask.on('state_changed',fn1,fn2,fn3);
            function fn1(snapshot){
                let progress = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
                console.log(`Upload is ${progress} done.`)
            }
            function fn2(error){
                setError(error);
                setTimeout(()=>{
                    setError('')
                },2000);
                setLoading(false)
                return;
            }
            function fn3(){
                uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
                    console.log(url);
                    database.users.doc(uid).set({
                        email:email,
                        userId:uid,
                        fullname:name,
                        profileUrl:url,
                        createdAt:database.getTimeStamp()
                    })
                })
                setLoading(false);
                history('/')
            }
        }catch(err){
            setError(err);
            setTimeout(()=>{
                setError('')
            },2000)
        }
    }
  return (
    <div className='SignupWrapper'>
        <div className='SignupCard'>
          <Card variant='outlined' className={classes.card3}>
            <div className='insta-logo'>
                <img src={logo1} alt="insta"/>
            </div>
            <CardContent>
                <Typography className={classes.text1} variant="subtitle1">
                Sign up to see photos and videos from your friend
                </Typography>
                {error!=='' && <Alert severity="error">{error}</Alert>}

                <TextField id="outlined-basic" fullWidth margin="dense" label="Email" variant="outlined" size='small' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                <TextField id="outlined-basic" fullWidth margin="dense" label="Password" variant="outlined" size='small' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                <TextField id="outlined-basic" fullWidth margin="dense" label="Full Name" variant="outlined" size='small' value={name} onChange={(e)=>{setName(e.target.value)}} />

                <Button  color="secondary" fullWidth variant='outlined' margin="dense" startIcon={<CloudUploadIcon/>} component="label">
                    Upload Profile Image
                    <input type="file" accept='image/*' hidden onChange={(e)=>{setFile(e.target.files[0])}}/>
                </Button>
            </CardContent>
            <CardActions>
                <Button color="primary" fullWidth variant="contained" disabled={loading} onClick={handleClick}>
                    Sign up
                </Button>
                
            </CardActions>

            <CardContent>
                <Typography className={classes.text1} variant="subtitle1">
                    By signing up, you agree to our Terms, Conditions and Cookies policy.
                </Typography>
                
            </CardContent>
         </Card>
 
         <Card variant="outlined" className={classes.card2}>
                <Typography className={classes.text1} variant="subtitle1">
                   Having an account ? <Link to="/login" style={{textDecoration:"none" }}>Login</Link>
                </Typography>
         </Card>

        </div>
    </div>
);
}  