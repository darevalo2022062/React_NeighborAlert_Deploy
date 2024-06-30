import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Input from '../components/common/Input';
import useAuth from '../hooks/useAuth';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login, loading } = useAuth();


  const onSubmit = async (data) => {
    await login(data);
  };

  return (
    <>
      <div className="bg-[#11111F] ">
        <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
          <div className="max-w-md w-full">


            <div className="p-8">
              <div className=" w-full h-full flex flex-col justify-center items-center">
                <h2 className="text-center text-[#84BD00] text-4xl font-extrabold">Login</h2>
                <p className='text-center text-white mt-2 font-normal'>Enter your email and password to login</p>
              </div>
              <form className="mt-8 space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-2">
                  <Input
                    type={'email'}
                    color={'text-white'}
                    label={"Email Address"}
                    name={'email'}
                    placeholder={'Enter your email address'}
                    register={register}
                    rules={{
                      required: 'Email is required', pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address'
                      }
                    }}
                    error={errors.email}

                  />
                </div>
                <div className="mb-2">
                  <Input
                    type={'password'}
                    label={"Password"}
                    color={'text-white'}
                    name={'pass'}
                    placeholder={'Enter your password'}
                    register={register}
                    rules={{
                      required: 'Password is required', minLength: {
                        value: 6,
                        message: 'Password must have at least 6 characters'
                      }
                    }}
                    error={errors.pass}
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">

                  <div className="text-sm">
                    <a href="" className="text-[#84BD00] hover:underline font-semibold">
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div className="!mt-8">
                  <button type="submit" className="w-full rounded-full font-bold py-4 px-4 text-xl tracking-wide text-white bg-[#84BD00] hover:bg-[#92c752] focus:outline-none">
                    {loading ? 'Logging in...' : 'Login'}
                  </button>
                </div>
                <p className="text-white  text-md !mt-8 text-center">Don't have an account? <Link to="/register" className="text-[#84BD00] hover:underline ml-1 whitespace-nowrap font-semibold">Register here</Link></p>
              </form>
            </div>
          </div>
        </div>
        <div className="waves">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Login;
