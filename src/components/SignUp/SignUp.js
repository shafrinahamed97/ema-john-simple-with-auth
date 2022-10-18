import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const SignUp = () => {
    const [error, setError] = useState(null);
    const {createUser} = useContext(AuthContext);
const handleSubmit = (event) =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if(password.length < 8){
        setError('Password should be 8 characters or more');
        return;
    }

    if(password !== confirm){
        setError("Your password did not match");
        return;

    }

    createUser(email, password)
    .then(result => {
        const user = result.user;
        console.log(user);
        form.reset();
    })
    .catch(error => console.error(error));


    
    
}

    return (
        <div className = "form-container">
        <h2 className = "form-title">Sign Up</h2>

        <form  onSubmit={handleSubmit}>

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
        <p className='text-error'>{error}</p>

    </div>
    );
};

export default SignUp;