import React, {useEffect, useState} from 'react';
import firebase from '../firebase'

const SignUp = () => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')


    function onSubmit(e) {
    }

    return(
        <div className="card">
            <div className="card-content">
                <h4>Create Account</h4><br />
                <form id="login-form" onSubmit={onSubmit}>
                    <div className="input-field">
                        <input type="email" id="login-email" required  value={email} onChange={e=> setemail(e.currentTarget.value)}/>
                        <label htmlFor="login-email">Email address</label>
                    </div>
                    <div className="input-field">
                        <input type="password" id="login-password" required value={password} onChange={e=> setpassword(e.currentTarget.value)}/>
                        <label htmlFor="login-password">Your password</label>
                    </div>
                    <button className="btn yellow darken-2 z-depth-0">SignUp</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp