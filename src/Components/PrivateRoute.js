import React,{useContext} from 'react';
import { Navigate , Outlet } from 'react-router-dom';
import {Route} from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

// function PrivateRoute({element:Element,...rest}) {
//     const {user} = useContext(AuthContext) 
//     return (
//         <Route {...rest} render={props=>{
//             return user?<Element {...props}/> : <Navigate to="login"/>
//         }} />
//     )
// }



const PrivateRoute = ({ children }) => {
    const {user} = useContext(AuthContext)
    
    return user ? children : <Navigate to="/login" />;
  }

// const PrivateRoute = () => {

//     // determine if authorized, from context or however you're doing it
//     const {user} = useContext(AuthContext) 

//     // If authorized, return an outlet that will render child elements
//     // If not, return element that will navigate to login page

//     return user ? <Outlet/> :<Navigate to="/login" />
// }


export default PrivateRoute;
