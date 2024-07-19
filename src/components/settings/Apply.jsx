import { useForm } from 'react-hook-form';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useRequest from '../../hooks/useRequest';

export const Apply = () => {
    const { register: formRegister, handleSubmit, formState: { errors }, watch, reset } = useForm();
    const [termsAccepted, setTermsAccepted] = useState(false);
    const { createRequest } = useRequest();
    const { user } = useAuth();

    const onSubmit = async (data) => {
        data.id = user.id;
        console.log(data);
        await createRequest(data);
        reset();
    }

    return (
        <div className="col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow mb-2">
            <div className="pt-4">
                <h1 className="py-2 text-2xl font-semibold">Application for administrator</h1>
                <p className="text-slate-600">Complete the following form to request to be an administrator. Make sure you agree to the terms before submitting your request.</p>
            </div>
            <hr className="mt-4 mb-8" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col space-y-4">
                    <label htmlFor="message" className="flex flex-col">
                        <span className="text-sm text-gray-500">Message</span>
                        <textarea
                            id="message"
                            {...formRegister('message', { required: 'Message is required' })}
                            className="w-full h-52 border-2 border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 rounded-md focus:outline-none focus:border-blue-600"
                            placeholder="Write your message here..."
                        />
                        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                    </label>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="terms"
                            {...formRegister('terms', { required: 'You must accept the terms' })}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                            I accept the <a href="#" className="text-blue-600 underline">terms and conditions</a>
                        </label>
                        {errors.terms && <p className="text-red-500 text-sm ml-2">{errors.terms.message}</p>}
                    </div>
                </div>
                <button
                    type="submit"
                    className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white"
                >
                    Send request
                </button>
                <br /><br />
            </form>
        </div>
    );
}
