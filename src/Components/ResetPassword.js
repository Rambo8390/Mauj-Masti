import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import insta from '../Assets/Instagram.JPG';
import { makeStyles } from '@mui/styles';
import { Alert,TextField } from '@mui/material';
import {Link,useNavigate} from 'react-router-dom';
import {useState,useContext} from 'react';
import { AuthContext } from '../Context/AuthContext';
import "./ResetPassword.css";
import logo1 from '../Assets/head1.jpg';
import logo2 from '../Assets/head2.jpg';
import logo3 from '../Assets/head3.jpg';
import logo4 from '../Assets/head4.jpg';
import logo5 from '../Assets/head5.jpg';
function ResetPassword() {

    const useStyles = makeStyles({
        text1:{
            color:"grey",
            textAlign:"center"
        },
        card2:{
            height:"9vw",
            margin:"1vw",
            
        }
    })

    const classes = useStyles();

    const [email,setEmail] = useState('');
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');
    const history = useNavigate();
    const {resetPassword} = useContext(AuthContext);

    const handleclick = async()=>{
        setLoading(true);
        setError('');
        await resetPassword(email)
        .then(()=>{
            setError("Reset link sent");
            setTimeout(()=>{
                setError('');
            },2000)

            setLoading(false);
            history('/login')
        })
        .catch((err)=>{
            setError("User doesn't exits");
            console.log(err)
            setTimeout(()=>{
                setError('');
            },2000)
            setLoading(false);
            setEmail('')
        })

    }

    return (
        <div>
            <div className='ResetWrapper'>
        <div className='ResetCard'>
          <Card variant='outlined'>
            <div className='insta-logo'>
                <img src={logo1} alt="insta"/>
            </div>
            <CardContent>
                <Typography className={classes.text1} variant="subtitle1">
                Sign up to see photos and videos from your friend
                </Typography>

                {error!=='' && <Alert severity="error">{error}</Alert>}
              
                <TextField id="outlined-basic" fullWidth margin="dense" label="Email" variant="outlined" size='small' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            </CardContent>
            <CardActions>
                <Button color="primary" fullWidth variant="contained" disabled={loading} onClick={handleclick}>
                    Send Reset Password Link
                </Button>
                
            </CardActions>

            <Card variant="outlined" className={classes.card2}>
                <Typography className={classes.text1} variant="subtitle1">
                   Back to Login ? <Link to="/login" style={{textDecoration:"none" }}>Login</Link>
                </Typography>
            </Card>
         </Card>
 
        </div>
    </div>
    </div>
    )
}

export default ResetPassword
