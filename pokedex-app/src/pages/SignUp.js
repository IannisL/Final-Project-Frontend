import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

const handleSubmit =  async (e) => {
    e.preventDefault()

    console.log(email, password)
    navigate("/Login")
}

return (
    <form className='Signup' onSubmit={handleSubmit}>
        <h3>Sign Up</h3>

        <label>Email:</label>
        <input
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email} />
        <></>
        <label>Password:</label>
        <input
            type='password'
            onChange={(e) => setpassword(e.target.value)}
            value={password} />
        <button>Sign up</button>
    </form>
)
}
export default SignUp;
