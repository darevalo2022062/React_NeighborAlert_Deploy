import { useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../components/common/Input';
import user from "../assets/img/icon.jpg";
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Register = () => {
    const { register: formRegister, handleSubmit, formState: { errors }, watch, reset } = useForm();
    const [selectedPhoto, setSelectedPhoto] = useState(user);
    const { register: authRegister, loading } = useAuth();
    const pass = useRef({});
    pass.current = watch('pass', '');

    const onSubmit = async (data) => {
        await authRegister(data); // Send the data directly
    };



    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const imageData = reader.result;
                setSelectedPhoto(imageData);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <div className='bg-[#11111F]'>
                <div className="min-h-screen content-center max-w-4xl mx-auto p-6">
                    <div className="text-center mb-8">
                        <h2 className="text-center text-[#84BD00] text-4xl font-extrabold">Sign-In</h2>a
                        <p className='text-center text-white mt-2 font-semibold'>Enter your information</p>
                    </div>
                    <form encType="multipart/form-data" autoComplete="off" noValidate onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col items-center justify-center">
                            <label htmlFor="img" className="cursor-pointer">
                                <div className="w-32 h-32 rounded-full overflow-hidden">
                                    <img src={selectedPhoto} alt="Avatar" className="w-full h-full object-cover" />
                                </div>
                            </label>
                            <p className="text-sm font-semibold text-white mb-3">Select an image</p>
                            <input
                                id="img"
                                type="file"
                                className="hidden"
                                {...formRegister("img", {
                                    required: "Photo is required",
                                    onChange: handleFileChange
                                })}
                            />
                            {errors.img && <span className="text-red-500">{errors.img.message}</span>}
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="mb-2">
                                <Input
                                    type={'text'}
                                    label={"Name"}
                                    name={'name'}
                                    color={'text-white'}
                                    placeholder={'Enter your name'}
                                    register={formRegister}
                                    rules={{ required: 'Name is required' }}
                                    error={errors.name}
                                />
                            </div>
                            <div className="mb-2">
                                <Input
                                    type={'text'}
                                    label={"Last name"}
                                    name={'lastName'}
                                    color={'text-white'}
                                    placeholder={'Enter your last name'}
                                    register={formRegister}
                                    rules={{ required: 'Last name is required' }}
                                    error={errors.lastName}
                                />
                            </div>
                            <div className="mb-2">
                                <Input
                                    type={'tel'}
                                    label={"Phone"}
                                    name={'phone'}
                                    color={'text-white'}
                                    placeholder={'Enter your phone number'}
                                    register={formRegister}
                                    rules={{ required: 'Phone number is required' }}
                                    error={errors.phone}
                                />
                            </div>
                            <div className="mb-2">
                                <Input
                                    type={'email'}
                                    label={"Email Address"}
                                    name={'email'}
                                    color={'text-white'}
                                    placeholder={'Enter your email address'}
                                    register={formRegister}
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
                                    name={'pass'}
                                    color={'text-white'}
                                    placeholder={'Enter your password'}
                                    register={formRegister}
                                    rules={{
                                        required: 'Password is required', minLength: {
                                            value: 6,
                                            message: 'Password must have at least 6 characters'
                                        }
                                    }}
                                    error={errors.pass}
                                />
                            </div>
                            <div className='mb-2'>
                                <Input
                                    type={'password'}
                                    label={"Confirm Password"}
                                    name={'confirmPassword'}
                                    color={'text-white'}
                                    placeholder={'Enter confirm password'}
                                    register={formRegister}
                                    rules={{
                                        required: 'Confirm password is required',
                                        validate: value => value === pass.current || 'The passwords do not match'
                                    }}
                                    error={errors.confirmPassword}
                                />
                            </div>
                        </div>

                        <div className="!mt-12 flex justify-center">
                        <button type="submit" className="w-full md:w-96 rounded-full font-bold py-4 px-4 text-xl tracking-wide text-white bg-[#84BD00] hover:bg-[#92c752] focus:outline-none">
                        {loading ? 'Registering...' : 'Sign up'}
                            </button>
                        </div>
                        <div className="mt-6 text-center">
                            <p className="text-white  text-md !mt-8 text-center">Already have an account? <Link to="/login" className="text-[#84BD00] hover:underline ml-1 whitespace-nowrap font-semibold">Log in here</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;
