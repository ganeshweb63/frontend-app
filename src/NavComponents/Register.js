import React,{useRef,useState,useEffect} from 'react';
import './register.css';

const USER_NAME=/^[A-Z]{1,20}[A-z]{2,20}[0-9]*/;
const PASS_WORD=/^[A-Z]{1,10}[A-z]{5,18}[0-9]+[!@#$%]+$/;
const EMAIL_ID=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

function Register(){

    const userRef=useRef();
    const errRef=useRef();

    const [username,setUsername]=useState("");
    const [validUsername,setValidUsername]=useState(false);
    const [usernameFocus,setUsernameFocus]=useState(false);

    const [email,setEmail]=useState("");
    const [validEmail,setValidEmail]=useState(false);
    const [emailFocus,setEmailFocus]=useState(false);

    const [password,setPassword]=useState("");
    const [validPassword,setValidPassword]=useState(false);
    const [passwordFocus,setPasswordFocus]=useState(false);

    const [confirmPassword,setConfirmPassword]=useState("");
    const [validConfirmPassword,setValidConfirmPassword]=useState(false);
    const [confirmPasswordFocus,setConfirmPasswordFocus]=useState(false);

    const [errMsg,setErrMsg]=useState("");
    const [success,setSuccess]=useState(false);

    useEffect(()=>{
        userRef.current.focus();
    },[]);


    useEffect(()=>{
        setValidUsername(USER_NAME.test(username));
       // console.log(username);
    },[username]);

    useEffect(()=>{
        setValidEmail(EMAIL_ID.test(email));
    },[email]);

    useEffect(()=>{
        setValidPassword(PASS_WORD.test(password));
        setValidConfirmPassword(password === confirmPassword);
    },[password,confirmPassword]);


    useEffect(()=>{
        setErrMsg('');
    },[username,email,password,confirmPassword]);

    const handleSubmit = (event)=>{
        event.preventDefault();

       //  if button enabled with JS hack
        var v1 =USER_NAME.test(username);
        var v2 =PASS_WORD.test(password);
        var v3 =EMAIL_ID.test(email);

        if(!v1 || !v2 || !v3){
            setErrMsg("Invalid Entry");
            return;
        }

        try{
        
         console.log("username",username);
            console.log("email",email);
            console.log("password",password);
            setSuccess(true);
            //clear state and controlled inputs
            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        }
        catch(err){
            if(err){
                setErrMsg("Registration Failed.");
            }
            errRef.current.focus();
        }

    }




    return(
        <div className='register-body'>
        {success ? (
        <section className='section'> <h1>Success</h1>
         <a href="#">Login</a>
        </section>
       ):(

        <section className='section'>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
            <form className='register-form' onSubmit={handleSubmit}>
                <label htmlFor='username'>Username :
                <i className={validUsername ? "valid fa-solid fa-circle-check" : "hide"}></i>
                <i className={validUsername || !username ? "hide" : "invalid fa-solid fa-circle-xmark"}></i>
                </label>

                <input type="text" ref={userRef} value={username} id="username" onFocus={()=>setUsernameFocus(true)} onBlur={()=>setUsernameFocus(false)} autoComplete='off'  required onChange={(e)=>{setUsername(e.target.value)}} /> <br/>
                <p className={usernameFocus && username && !validUsername ? "instructions" : "offscreen"}>
                    Must begin with atleast one Uppercase and minimun 3 characters
                </p>

                <label htmlFor='emailId'>Emai ID :
                <i className={validEmail ? "valid fa-solid fa-circle-check" : "hide"}></i>
                <i className={validEmail || !email ? "hide" : "invalid fa-solid fa-circle-xmark"}></i>
                </label>

                <input type="email" value={email} onFocus={()=>setEmailFocus(true)} onBlur={()=>setEmailFocus(false)} id="emailId" autoComplete='off'  required onChange={(e)=>{setEmail(e.target.value)}}   /> <br/>
                <p className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                    Must start with characters or numbers,<br/>
                    middle of the email put @ after some characters<br/>
                    end with .com only
                </p>

                <label htmlFor='password'>Password :
                <i className={validPassword ? "valid fa-solid fa-circle-check" : "hide"}></i>
                <i className={validPassword || !password ? "hide" : "invalid fa-solid fa-circle-xmark"}></i>
                </label>

                <input type="password" value={password} onFocus={()=>setPasswordFocus(true)} onBlur={()=>setPasswordFocus(false)} id="password" autoComplete='off'  required onChange={(e)=>{setPassword(e.target.value)}}  /> <br/>
                <p className={passwordFocus && password && !validPassword ? "instructions" : "offscreen"}>
                    Must start with atleast one Uppercase,<br/>
                    atleast 8 characters,<br/>
                    atleast one number,<br/>
                    atleast one allowed special characters: "!@#$%" 

                </p>

                <label htmlFor='confirmPassword'>Confirm Password :
                <i className={validConfirmPassword && confirmPassword ? "valid fa-solid fa-circle-check" : "hide"}></i>
                <i className={validConfirmPassword || !confirmPassword ? "hide" : "invalid fa-solid fa-circle-xmark"}></i>
                 </label>

                <input type="password" onFocus={()=>setConfirmPasswordFocus(true)} onBlur={()=>setConfirmPasswordFocus(false)} value={confirmPassword} id="confirmPassword" autoComplete='off'  required onChange={(e)=>{setConfirmPassword(e.target.value)}}  /> <br/>
                <p className={confirmPasswordFocus && confirmPassword && !validConfirmPassword ? "instructions" : "offscreen"}>
                    Must match the first password input field.
                </p>

                <button disabled={!validUsername || !validEmail || !validPassword || !validConfirmPassword ? true : false}>Register</button>
               
                {/* <i className='fa-solid fa-circle-check'></i>
                <i className="fa-solid fa-circle-xmark"></i> */}

            </form>
            <label>If you have an already account </label><a href='/login'>Login</a>
        </section>
        )}
        </div>
    )

}

export default Register;