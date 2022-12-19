import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../Contex/AuthProvider';
import "./SocialLogin.css"

const SocialLogin = () => {
    const { googleSiginIn } = useContext(AuthContex)
    const [error, setError] = useState("")

    const location = useLocation();
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/";

    const googleSiginHandle = () => {
        googleSiginIn()
            .then(result => {
                toast("Login successful")
                navigate(from, { replace: true })
                setError("")
            })
            .catch(err => setError(err.message))
    }

    return (
        <div>
            {error && <p className='error-text'>{error}</p>}
            <div>
                <button onClick={googleSiginHandle} className='button social-btn' ><FaGoogle /></button>
            </div>
        </div>
    );
};

export default SocialLogin;