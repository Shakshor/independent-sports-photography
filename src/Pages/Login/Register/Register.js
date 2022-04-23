import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please register</h2>
            <form>
                <input type="text" name="name" id="" placeholder='Enter your name' />
                <input type="email" name="email" id="" placeholder='Enter your email' />
                <input type="password" name="password" id="" placeholder='Enter your password' />

                {/* ---- checkbox ------ */}
                <input type="checkbox" name="check" id="" />
                <label htmlFor="check">Accept SPHOTOGRAPHY terms and Conditions</label>

                <input className='btn btn-link text-decoration-none' type="submit" value="Register" />


            </form>

            {/* ---- toggle ----- */}
            <p>Already Have an account? <Link to='/login' className='text-primary text-decoration-none d-block pe-auto'><span>Login</span></Link></p>
        </div>
    );
};

export default Register;