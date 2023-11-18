import { Link, useNavigate } from "react-router-dom";
import LoginImage from '../../assets/others/authentication1.png'
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useUserPublic from "../../hooks/useUserPublic";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";


const SignUp = () => {
    const navigate = useNavigate();
    const axiosPublic = useUserPublic();
    const { createUser, updateUserProfileName } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const userInfo = {
                    name: data.name,
                    email: data.email
                }
                updateUserProfileName(data.name, data.photoUrl)
                axiosPublic.post('/users', userInfo)
                    .then(() => {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        console.log('user is created')
                        reset();
                        navigate('/')
                    })
                    .catch((error) => {
                        console.log(error)
                    });

            })
    };
    return (
        <>
        <div className="hero min-h-screen login">
            <div className="hero-content flex-col lg:px-10 shadow-2xl lg:flex-row gap-12">
                <div className="text-center lg:text-left">
                    <img className='w-[500px] bg-opacity-80' src={LoginImage} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full lg:max-w-sm">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h2 className='text-2xl font-semibold text-center'>Sign Up</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="your name" className="input input-bordered" {...register("name", { required: true })} />
                            {errors.name && <span className="text-red-500">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" placeholder="your name" className="input input-bordered" {...register("photoUrl", { required: true })} />
                            {errors.name && <span className="text-red-500">Photo url is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-500">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" {...register("password",
                                {
                                    minLength: 6, maxLength: 20,
                                    required: true,
                                    pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}/i
                                }
                            )} />

                            {errors?.password?.type === 'minLength' && <span className="text-red-500">Password is required atleast 6 characters long.</span>}
                            {errors?.password?.type === 'maxLength' && <span className="text-red-500">Password is required max 20 characters long.</span>}
                            {errors?.password?.type === 'pattern' && <span className="text-red-500">Password is required one uppercase and Lowercase, one special character</span>}

                        </div>

                        <div className="form-control mt-6">
                            <input className="btn bg-[#D1A054] text-white" type="submit" value="Sign Up" />
                            <p>Already Have an account? <Link className='text-blue-400 mt-2 font-semibold' to='/login'>Login now</Link></p>
                        </div>
                        
                    </form>
                </div>
            </div>

        </div>
        <div className="mx-auto">
            <SocialLogin></SocialLogin>
        </div>
        </>
    );
};

export default SignUp;