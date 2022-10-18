import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className = "form-container">
        <h2 className = "form-title">Sign Up</h2>

        <form>

            <div className="form-control">
                <label htmlFor="email">Sign Up</label>
                <input type="email" name='email' placeholder='Enter your email' required />
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name='password' placeholder='Enter your password' required />
            </div>
            <div className="form-control">
                <label htmlFor="confirm">Confirm Password</label>
                <input type="password" name='confirm' placeholder='Confirm your password' required />
            </div>


            <input className='btn-submit' type="submit" value="signup"/>

        </form>

        <p>Already have an account? <Link to='/login'>Login</Link> </p>

    </div>
    );
};

export default SignUp;