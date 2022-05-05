import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import insta from "../Assets/Instagram.JPG";
import { makeStyles } from "@mui/styles";
import { Alert, TextField } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Link , useNavigate } from "react-router-dom";
import instaphone from "../Assets/insta.png";

import { useContext,useState } from "react";

import img1 from "../Assets/img1.jpg";
import img2 from "../Assets/img2.jpg";
import img3 from "../Assets/img3.jpg";
import img4 from "../Assets/img4.jpg";
import img5 from "../Assets/img5.jpg";

import logo1 from '../Assets/head1.jpg';
import logo2 from '../Assets/head2.jpg';
import logo3 from '../Assets/head3.jpg';
import logo4 from '../Assets/head4.jpg';
import logo5 from '../Assets/head5.jpg';

import { AuthContext } from "../Context/AuthContext"; 

import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import "./Login.css";
export default function Login() {


    // const store = useContext(AuthContext);
    // console.log(store);

    const useStyles = makeStyles({
        text1: {
            color: "grey",
            textAlign: "center",
        },
        card2: {
            height: "8vw",
            margin: "1vw",
        },
    });

    const classes = useStyles();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);
    const history = useNavigate();
    const {login} = useContext(AuthContext);
       const handleClick = async() => {
        try{
            setError('');
            setLoading(true)
            let res = await login(email,password);
            setLoading(false);
            history('/')
        }catch(err){
            setError(err);
            setTimeout(()=>{
                setError('')
            },2000);
            setLoading(false);
        }
    }

    const ht = window.innerWidth;
    console.log(ht);
    return (
        <div>
            {
                ht<440 ?
                <div className="LoginWrapper">
                
    
                    <div className="LoginCard">
                        <Card variant="outlined">
                            <div className="insta-logo">
                                <img src={logo1} alt="insta" />
                            </div>
        
                            <CardContent>
        
                                {error!=='' && <Alert severity="error">{error}</Alert>}
        
                                <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" size="small" value={password} onChange={(e)=>setPassword(e.target.value)} />
                                <Typography className={classes.text2} color="primary" variant="subtitle1">
                                    <Link to="/resetpassword" style={{ textDecoration: "none" }}>
                                        Forget Password?
                                    </Link>
                                </Typography>
        
                            </CardContent>
        
                            <CardActions>
                                <Button color="primary" fullWidth={true} variant="contained" onClick={handleClick} disabled={loading}>
                                    Sign in
                                </Button>
                            </CardActions>
                        </Card>
        
                        <Card variant="outlined" className={classes.card2}>
                            <Typography className={classes.text1} variant="subtitle1">
                                Don't have an account ?{" "}
                                <Link to="/signup" style={{ textDecoration: "none" }}>
                                    Sign up
                                </Link>
                            </Typography>
                        </Card>
                    </div>
            </div>
            :
            <div className="LoginWrapper">
            <div
                className="imgcar"
                style={{
                    backgroundImage: "url(" + instaphone + ")",
                    backgroundSize: "cover",
                }}
            >
                <div className="car">
                    <CarouselProvider
                        naturalSlideWidth={238}
                        naturalSlideHeight={423}
                        totalSlides={5}
                        visibleSlides={1}
                        step={3}
                        isPlaying={true}
                        infinite={true}
                        dragEnabled={false}
                        touchEnabled={false}

                    >
                        <Slider>
                            <Slide index={0}><img src={img1} alt="img"/></Slide>
                            <Slide index={1}><img src={img2} alt="img"/></Slide>
                            <Slide index={2}><img src={img3} alt="img"/></Slide>
                            <Slide index={3}><img src={img4} alt="img"/></Slide>
                            <Slide index={4}><img src={img5} alt="img"/></Slide>
                            
                        </Slider>
                    </CarouselProvider>
                </div>
            </div>

            <div className="LoginCard">
                <Card variant="outlined">
                    <div className="insta-logo">
                        <img src={logo1} alt="insta" />
                    </div>

                    <CardContent>

                        {error!=='' && <Alert severity="error">{error}</Alert>}

                        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" size="small" value={password} onChange={(e)=>setPassword(e.target.value)} />
                        <Typography className={classes.text2} color="primary" variant="subtitle1">
                            <Link to="/resetpassword" style={{ textDecoration: "none" }}>
                                Forget Password?
                            </Link>
                        </Typography>

                    </CardContent>

                    <CardActions>
                        <Button color="primary" fullWidth={true} variant="contained" onClick={handleClick} disabled={loading}>
                            Sign in
                        </Button>
                    </CardActions>
                </Card>

                <Card variant="outlined" className={classes.card2}>
                    <Typography className={classes.text1} variant="subtitle1">
                        Don't have an account ?{" "}
                        <Link to="/signup" style={{ textDecoration: "none" }}>
                            Sign up
                        </Link>
                    </Typography>
                </Card>
            </div>
        </div>
            }




        {/* <div className="LoginWrapper">
            <div
                className="imgcar"
                style={{
                    backgroundImage: "url(" + instaphone + ")",
                    backgroundSize: "cover",
                }}
            >
                <div className="car">
                    <CarouselProvider
                        naturalSlideWidth={238}
                        naturalSlideHeight={423}
                        totalSlides={5}
                        visibleSlides={1}
                        step={3}
                        isPlaying={true}
                        infinite={true}
                        dragEnabled={false}
                        touchEnabled={false}

                    >
                        <Slider>
                            <Slide index={0}><img src={img1} alt="img"/></Slide>
                            <Slide index={1}><img src={img2} alt="img"/></Slide>
                            <Slide index={2}><img src={img3} alt="img"/></Slide>
                            <Slide index={3}><img src={img4} alt="img"/></Slide>
                            <Slide index={4}><img src={img5} alt="img"/></Slide>
                            
                        </Slider>
                    </CarouselProvider>
                </div>
            </div>

            <div className="LoginCard">
                <Card variant="outlined">
                    <div className="insta-logo">
                        <img src={logo3} alt="insta" />
                    </div>

                    <CardContent>

                        {error!=='' && <Alert severity="error">{error}</Alert>}

                        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" size="small" value={password} onChange={(e)=>setPassword(e.target.value)} />
                        <Typography className={classes.text2} color="primary" variant="subtitle1">
                            <Link to="/resetpassword" style={{ textDecoration: "none" }}>
                                Forget Password?
                            </Link>
                        </Typography>

                    </CardContent>

                    <CardActions>
                        <Button color="primary" fullWidth={true} variant="contained" onClick={handleClick} disabled={loading}>
                            Sign in
                        </Button>
                    </CardActions>
                </Card>

                <Card variant="outlined" className={classes.card2}>
                    <Typography className={classes.text1} variant="subtitle1">
                        Don't have an account ?{" "}
                        <Link to="/signup" style={{ textDecoration: "none" }}>
                            Sign up
                        </Link>
                    </Typography>
                </Card>
            </div>
        </div> */}

        </div>
    );
}
