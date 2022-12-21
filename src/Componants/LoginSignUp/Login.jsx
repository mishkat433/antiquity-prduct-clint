import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../Contex/AuthProvider';
import image from "../../Assets/login.gif"
import "./LoginSignUp.css"
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast } from 'react-hot-toast';

const Login = () => {
    const { loginUserManualy, setLoading } = useContext(AuthContex)
    const [formData, setFormData] = useState(null)
    const [error, setError] = useState("")
    const [show, setShow] = useState(false)
    const [wait, setWait] = useState(false)

    const location = useLocation();
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/";

    const LoginHandle = (e) => {
        if (formData?.email) {
            if (formData?.password) {
                setWait(true)
                setLoading(true)
                loginUserManualy(formData.email, formData.password)
                    .then(result => {
                        toast.success("login successful")
                        setWait(false)
                        setLoading(false)
                        navigate(from, { replace: true })
                    })
                    .catch(err => {
                        setWait(false)
                        setError(err.message)
                    })
                setError("")
            }
            else {
                setError("password must be uppercase, lowercase and dist")
            }
        }
        else {
            setError("please enter valid email");
        }
        e.preventDefault()
    }

    const formHandle = (e) => {
        let isValid = true
        if (e.target.name === "email") {
            isValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e.target.value)
        }
        if (e.target.name === "password") {
            isValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(e.target.value)
        }

        if (isValid) {
            setFormData({ ...formData, [e.target.name]: e.target.value })
            setError("")
        }
        else {
            setError(`Your ${e.target.name} is not valid`)
            setFormData({ ...formData, [e.target.name]: "" })
        }
    }

    return (
        <section className="full-form container">
            <div className='form '>
                <form onSubmit={LoginHandle} className="">
                    <h1 className=''>Login</h1>
                    {error && <p className='error-text'>{error}</p>}
                    <div className="form-control mb">
                        <input onChange={formHandle} name="email" type="email" placeholder="your email" className="input input-bordered" />
                    </div>
                    <div className="form-control">

                        <input onChange={formHandle} type={show ? "text" : "password"} placeholder="your password" name='password' className="input input-bordered" />
                    </div>
                    <div className='show-password'>
                        <input type="checkbox" onClick={() => setShow(!show)} name="check" id="" className='w-5 h-5' />
                        <label htmlFor="check">Show password</label>
                    </div>
                    <div className="form-control mb">
                        {!wait ? <button className="button login-btn">SignUp</button> : <button className="button login-btn">loading...</button>}
                    </div>
                </form>
                <SocialLogin />
                <p to="/" className='text-center text-lg mb-10'>Don't have an account?
                    <Link to="/register" className='font-bold text-orange-600'>Register</Link></p>
            </div >

        </section >
    );
};

export default Login;