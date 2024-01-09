import React, { useEffect, useRef, useState } from 'react'
import './LoginSignup.css'


// const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;

const LoginSignup = () => {


    // const userRef = useRef();
    // const errRef = useRef();  


    const [action, setAction] = useState("Sign Up")



    // const [user, setUser] = useState('');
    // const [validName, setValidName] = useState(false);
    // const [userFocus, setUserFocus] = useState(false);

    // const [pwd, setPwd] = useState('');
    // const [validPwd, setValidPwd] = useState(false);
    // const [pwdFocus, setPwdFocus] = useState(false);

    // const [matchPwd, setMatchPwd] = useState('');
    // const [validMatch, setValidMatch] = useState(false);
    // const [MatchFocus, setMatchFocus] = useState(false);

    
    // const [errMsg, setErrMsg] = useState("");
    // const [success, setSuccess] = useState(false);


    // useEffect(() => {
    //     const result = PWD_REGEX.test(pwd);
    //     console.log(result);
    //     console.log(pwd);
    //     setValidPwd(result);
    //     const match = pwd === matchPwd;
    //     setValidMatch(match);
    // }, [pwd, matchPwd]

    // )



    return (
        <div className='container'>
            <div className="header">
                <div className="signup">{action}</div>
                <div className="underline"></div>
            </div>
            
            <div className="inputs">
                {action=== "Login"?
                    <div></div>:           
                        <div className="input">
                        <input type='text' placeholder='Your name' required autoComplete='off'/>
                    </div> 
                }


                <div className="input">
                    <input type='email' placeholder='Email' required/>
                </div>

                <div className="input">
                    <input type='password' id='password' placeholder='Password'/>
                </div>

                {action === 'Login'? <div></div>:
                    <div className="input">
                    <input type='password' placeholder='Confirm Password'/>
                    </div>
                }
                

            </div>
            {action==="Sign Up"?
                <div></div>:
                <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
            }
            <div className="submit-container">
                <div className={action==="Login" ? "submit gry":"submit"} onClick={() =>{setAction('Login')}}>Login</div>
                <div className={action==="Sign Up" ? "submit gray":"submit"} onClick={() =>{setAction("Sign Up")}}> Sign up</div>
            </div>

        </div>
    )
}

export default LoginSignup