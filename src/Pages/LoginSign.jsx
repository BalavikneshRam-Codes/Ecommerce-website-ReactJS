import React from 'react'
import './CSS/LoginSignUp.css'
function LoginSign() {
  return (
    <div className='logionsignup'>
      <div className="lgoinsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className="lgoinsignup-login">Already have an account? <span>Login In</span></p>
        <div className="lgoinsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing, I agree to the forms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSign