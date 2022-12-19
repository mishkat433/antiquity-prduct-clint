import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from "../../Assets/login.gif"
import { AuthContex } from '../../Contex/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUP = () => {
    const { createUser, profileUpdate, setLoading } = useContext(AuthContex)
    const [formData, setFormData] = useState(null)
    const [error, setError] = useState("")
    const [show, setShow] = useState(false)
    const [wait, setWait] = useState(false)

    const location = useLocation();
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/";

    const registerHandle = (e) => {

        if (formData?.email) {
            if (formData?.password) {
                setWait(true)
                createUser(formData.email, formData.password)
                    .then(data => {
                        profileUpdate(formData?.name, formData?.photo)
                            .then(result => { }).catch(err => setError(err.message))
                        saveLoginUser(formData?.name, formData.email)
                    })
                    .catch(err => setError(err.message))
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

    const saveLoginUser = (name, email) => {
        const user = { name, email, userType: "user" }
        fetch('https://antiquity-server.vercel.app/makeUser', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('user created successful')
                    setLoading(false)
                    navigate(from, { replace: true })
                    setWait(false)
                }
            })
    }

    return (
        <section className="full-form register container">
            <div className="login-image" >
                <img src={loginImg} alt="" />
            </div>
            <div className=' form '>
                <form onSubmit={registerHandle} className="" >
                    {error && <p className='error-text'>{error}</p>}
                    <div className="form-control mb">
                        <h1 className=''>Register</h1>
                        <input onChange={formHandle} type="text" name="name" placeholder="full name" className="input input-bordered" required />
                    </div>
                    <div className="form-control mb">

                        <input onChange={formHandle} type="text" name="photo" placeholder="photo url" className="input input-bordered" />
                    </div>
                    <div className="form-control mb">
                        <input onChange={formHandle} type="email" name="email" placeholder="your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control mb">

                        <input onChange={formHandle} name="password" type={show ? "text" : "password"} placeholder="New password" className="input input-bordered" required />
                    </div>

                    <div className='flex items-center gap-3 mb'>
                        <input type="checkbox" onClick={() => setShow(!show)} name="check" id="check" className='w-5 h-5' />
                        <label htmlFor="check">Show password</label>
                    </div>
                    <div className="form-control mb">
                        {!wait ? <button className="button login-btn">SignUp</button> : <button className="button login-btn">loading...</button>}
                    </div>

                </form>
                <SocialLogin />
                <p to="/" className='text-center text-lg mb-10'>already have an account?
                    <Link to="/login" className='font-bold text-orange-600'>login</Link></p>
            </div>

        </section >
    );
};

export default SignUP;