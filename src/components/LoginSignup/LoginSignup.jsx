import React, { useState } from 'react'
import './loginsignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

import axios from "axios";
import {  useNavigate } from 'react-router-dom'

const LoginSignup = () => {
    let navigate = useNavigate();

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const handleEmailChange = (value) => {
        setemail(value);
    }

    const handlePasswordChange = (value) => {
        setpassword(value);
    }

    const handleLogin = () => {
        const data = {
            email: email,
            password: password
        };
        const url = 'https://localhost:7244/api/RegisterUser/login';
        axios.post(url, data).then((result) => {
            if (data.email == "Admin@gmail.com") {
                navigate('/admin');
                // console.log("admin");
                // console.log(result.data);
            } else {
                navigate('/coursesDisplay');
                // console.log("user");
                // console.log(result.data);
            }
        }).catch((error) => {
            alert(error);
        })
    }

    // function handleLoginRedirect() {
    //     navigate('/', { replace: true });
    //   }
    

    return (
        <>
            <div className='LoginSignupContainer' id='login'>
                <div className="header">
                    <div className="text">Login</div>
                    <div className="underline"></div>
                </div>

                <div className="inputs">

                    <div className="input">
                        <img src={email_icon} alt='email_icon' />
                        <input type='email' placeholder='Email Id' onChange={(e) => handleEmailChange(e.target.value)} />
                    </div>
                    <div className="input">
                        <img src={password_icon} alt='password_icon' />
                        <input type='password' placeholder='Password' onChange={(e) => handlePasswordChange(e.target.value)} />
                    </div>
                </div>

                <div className="submit-container">
                    <div className="submit" onClick={() => handleLogin()}>Login</div>
                </div>
            </div>
        </>
    )
}

export default LoginSignup