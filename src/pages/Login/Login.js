import React from 'react';
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [token] = useToken(gUser || user)

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    let loginError;
    if (error || gError) {
        loginError = <p className='text-red-500'>{error?.message || gError?.message}</p>
    }
    if (gUser || user) {
        navigate(from, { replace: true });
    }

    const onSubmit = data => {
        console.log(data.email, data.password)
        signInWithEmailAndPassword(data.email, data.password);
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-primary text-2xl font-bold">Log In</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-primary font-semibold">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-primary font-semibold">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>

                        </div>

                        <input className='btn mt-5 w-full bg-primary max-w-xs text-white' type="submit" value="Login" />
                    </form>
                    {
                        loginError
                    }
                    <p><small>New to ShareParts.com? <Link className='text-primary' to="/signup">Create New Account</Link></small></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-primary text-white"
                    >Continue with Google</button>
                </div>
            </div>
        </div >
    );
};

export default Login;