import logo from './logo.svg';
// import './App.css';
import Signup from './Components/Signup'
import Login from './Components/Login'
import Feed from './Components/Feed';
import Profile from './Components/Profile';
import {BrowserRouter ,Route,Routes} from 'react-router-dom'

import {AuthProvider} from './Context/AuthContext';
import PrivateRoute from './Components/PrivateRoute';
import ResetPassword from './Components/ResetPassword';


function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
      <AuthProvider>

        <Routes>
          {/* <PrivateRoute path="/" element={<Feed/>}/> */}
          {/* <Route exact path="/" element={<Feed/>}/> */}

          {/* <Route exact path='/' element={<PrivateRoute/>}>
            <Route exact path='/' element={<Feed/>}/>
          </Route> */}

          <Route exact path="/" 
                       element={
                         <PrivateRoute>
                           <Feed/>
                         </PrivateRoute>
                       }/>

          <Route exact path="/profile/:id" 
                       element={
                         <PrivateRoute>
                           <Profile/>
                         </PrivateRoute>
                       }/>             
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/resetpassword" element={<ResetPassword/>}/>
        </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
