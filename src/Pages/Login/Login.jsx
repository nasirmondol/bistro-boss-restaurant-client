import { useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import './Login.css';
import Swal from 'sweetalert2'
import LoginImage from '../../assets/others/authentication1.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [disabled, setDisabled] = useState(true);
    const { singInUser } = useAuth();


    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        singInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    title: "Congratulation!",
                    text: "Login successful",
                    // icon: "success"
                    timer: 1500
                });

                event.target.reset();
                navigate(from, { replace: true });
            })
    }

    const handleCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }


  
    return (
        <>
            <div className="hero min-h-screen login">
                <div className="hero-content flex-col lg:px-10 shadow-2xl lg:flex-row-reverse gap-12">
                    <div className="text-center lg:text-left">
                        <img className='w-[500px]' src={LoginImage} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full lg:max-w-sm">
                        <form onSubmit={handleLogin} className="">
                            <h2 className='text-2xl font-semibold text-center'>Login</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleCaptcha} type="text" placeholder="Type the captcha above" name="captcha" className="input input-bordered" required />
                                {/* <button onClick={handleCaptcha} className="btn mt-2 btn-xs btn-outline">Validate</button> */}

                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disabled} className="btn bg-[#D1A054] text-white" type="submit" value="Login" />

                            </div>
                        </form>
                        <p className='text-center mt-0'>New Here? <Link className='text-blue-400 mt-2 font-semibold' to='/signup'>Register now</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Login;