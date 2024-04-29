import React from "react";
import img from "../Assests/img.jpg";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'; 
import FetchHospitals from "./FetchHospitals";
import { jwtDecode } from "jwt-decode";
import {Link} from 'react-router-dom' ;
import "./SignUp.css";

const SignUP = () =>{



    return(
        <div className="hospital-finder">
        <h1>Hospital Finder</h1>
          <div className="form">

                <div className="left-part">
                    <img src={img} alt=""/>
                </div>


                <div className="right-part">
                   <div className="inputs">
                    <input type="text" placeholder="Full Name"/>         
                    <input type="email" placeholder="Your Email"/>      
                    <input type="password" placeholder="Password"/>
                    </div>
                    <h4>Please first use sign up with Google</h4>      
                
                   <GoogleOAuthProvider clientId="247689776987-qtl7udm5ui95m342tbt7aq1kichrc8v2.apps.googleusercontent.com">
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            const decoded = jwtDecode(credentialResponse.credential);
                            console.log(decoded);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                </GoogleOAuthProvider>
               

                 {/* Place the FetchHospitals component here */}
                 <Link to="/map"><FetchHospitals/></Link>
                    
                </div>

          </div>
          </div>

    );

}

export default SignUP;