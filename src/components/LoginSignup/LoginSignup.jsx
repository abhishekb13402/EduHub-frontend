import React, { useState } from 'react';
import './loginsignup.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import AuthService from './AuthService'; // Import AuthService for token management

const LoginSignup = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (value) => {
        setEmail(value);
    }

    const handlePasswordChange = (value) => {
        setPassword(value);
    }

    const handleLogin = () => {
        const data = {
            email: email,
            password: password
        };
        const url = 'https://localhost:7244/api/RegisterUser/login';
        axios.post(url, data).then((result) => {
            const { token } = result.data;
            AuthService.login(token); // Store token in local storage
            if (data.email == "Admin@gmail.com") {
                navigate('/admin');
            } else {
                navigate('/coursesDisplay');
            }
        }).catch((error) => {
            alert(error);
        })
    }

    const handleLogout = () => {
        AuthService.logout(); // Remove token from local storage
        navigate('/login'); // Redirect to login page
    }

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
                    <div className="submit" onClick={handleLogin}>Login</div>
                </div>
                {/* <div className="logout-container">
                    <div className="logout" onClick={handleLogout}>Logout</div>
                </div> */}
            </div>
        </>
    )
}

export default LoginSignup;
