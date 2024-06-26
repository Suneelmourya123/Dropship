import React, { useState } from 'react';
import '../assets/Login.css';
import { Link } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const svgMarkup = `
        <svg fill="#00D6BB" width="80px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.939 46.94">
            <path d="M40.139,26.858c0.002-0.021,0.006-0.044,0.008-0.063c0.408-2.277-0.002-10.525-0.621-12.43
                c-0.662-2.046-1.533-4.339-3.422-5.796c-0.5-1.586-1.367-3.081-2.619-4.342c-4.186-4.213-10.997-4.235-15.211-0.051
                c-3.02,2.999-3.875,7.344-2.584,11.117L13.9,17.07l1.364,1.374l-0.027,0.025l-2.899,0.124l0.337,2.421l-0.362,0.359l-3.011,0.105
                l0.34,2.546l-0.299,0.298l-2.696-0.207l0.229,2.658l-0.502,0.498l-2.671,0.031l-0.471,3.091l-0.78,0.772l-2.076-0.822L0,33.602
                l0.747,0.752l0.564,0.567l15.263-15.159l0.761,0.767L2.072,35.69l2.282,2.297l15.263-15.158l0.891,0.896l1.789-1.775
                c3.012,1.052,6.385,0.711,9.165-0.991c0.274,0.693,0.558,1.392,0.843,2.09c0.213,0.518,0.407,0.992,0.574,1.411
                c0.145,0.362,0.282,0.814,0.43,1.295c0.125,0.407,0.256,0.831,0.4,1.246l-8.812,3.329l4.055,1.269l-3.061,9.778l14.416,4.512
                l3.062-9.778l3.571,1.116L40.139,26.858z M31.463,10.325c-0.479,0.477-1.084,0.739-1.706,0.813
                c0.007-0.707,0.138-1.282,0.437-1.659c0.656-0.823,1.353-1.25,2.115-1.34C32.343,8.928,32.068,9.727,31.463,10.325z
                M27.372,6.207c1.138-1.129,2.976-1.123,4.104,0.014c0.273,0.275,0.478,0.593,0.617,0.931c-0.988,0.141-1.883,0.7-2.683,1.704
                c-0.431,0.542-0.623,1.308-0.638,2.236c-0.52-0.118-1.015-0.373-1.418-0.779C26.229,9.175,26.234,7.337,27.372,6.207z
                M34.264,25.46c-0.156-0.51-0.304-0.988-0.457-1.374c-0.168-0.421-0.365-0.897-0.578-1.419c-0.273-0.67-0.59-1.442-0.916-2.267
                c0.389-0.292,0.765-0.608,1.119-0.961c2.491-2.475,3.506-5.863,3.065-9.094c1.012,1.248,1.601,2.854,2.078,4.327
                c0.485,1.5,0.852,7.869,0.694,10.86l-0.334-0.509l-4.293,1.62C34.504,26.247,34.378,25.838,34.264,25.46z M38.798,28.461
                c-0.071,0.179-0.153,0.344-0.271,0.466c-0.254,0.269-0.664,0.323-0.965,0.323c-0.674,0-1.467-0.284-1.89-0.676
                c-0.042-0.039-0.081-0.09-0.121-0.136l2.589-0.979L38.798,28.461z M42.055,33.601l-3.061,9.779l-10.6-3.315l3.061-9.78l-0.43-0.134
                l3.549-1.342c0.129,0.185,0.266,0.355,0.419,0.498c0.606,0.564,1.64,0.943,2.569,0.943c0.711,0,1.295-0.22,1.688-0.634
                c0.063-0.066,0.104-0.149,0.157-0.225l2.789,4.253L42.055,33.601z"></path>
        </svg>
    `;

    const onSubmitHandler = (evt) => {
        evt.preventDefault();
        const url = evt.currentTarget.action;

        const data = { username, password };
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };

        fetch(url, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json(); // Return the parsed JSON
            })
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }

    const onKeyupHandler = (evt) => {
        const { className, value } = evt.currentTarget;
        className === 'username' ? setUsername(value) : setPassword(value);
    }

    return (
        <div className='admin-wrapper'>
            <div className='Login-wrapper App App-header'>
                <div className='header'>
                    <div dangerouslySetInnerHTML={{ __html: svgMarkup }} />
                    <h3>Admin Login</h3>
                </div>
                <div className='content-wrapper'>
                    <form onSubmit={onSubmitHandler}  action='https://bacd-125-99-156-162.ngrok-free.app/login'>
                        <div className='field'>
                            <label>Username</label>
                            <input type='email' className='username' onKeyUp={onKeyupHandler} />
                        </div>
                        <div className='field'>
                            <label>Password</label>
                            <input type='password' className='password' onKeyUp={onKeyupHandler} />
                        </div>
                        <div className='btn-wrapper'>
                            <button type='submit' className='submit_button'>Submit</button>
                        </div>
                    </form>
                    <div className='social-login'>
                        <p><Link to="/register">Create account</Link></p>
                        <p>Or</p>
                        <div id="g_id_onload"
                            data-client_id="100089377752-o7d27pqfgrm1dg48q4jq5l877n3l8a24.apps.googleusercontent.com"
                            data-callback="handleCredentialResponse">
                            <div className="g_id_signin" data-type="standard"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
