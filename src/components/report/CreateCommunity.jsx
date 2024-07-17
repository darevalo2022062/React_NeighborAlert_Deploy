import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useCommunity from '../../hooks/useCommunity';
import Input from '../common/Input';
import Loading from '../common/Loading';

const CreateCommunity = () => {
    const [previewImage, setPreviewImage] = useState(null);
    const { register: formRegister, handleSubmit, formState: { errors }, watch, reset } = useForm();
    const { createCommunity, isLoading } = useCommunity();

    const onSubmit = async (data) => {
        console.log('Data:', data);
        console.log('loading:', isLoading);
        try {
            data.img = data.img[0]; // Get the first file from the array
            await createCommunity(data); // Assuming createCommunity is a function that handles form submission
        } catch (error) {
            console.error('Error creating community:', error);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreviewImage(URL.createObjectURL(file));
        } else {
            setPreviewImage(null);
        }
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 py-10">
            <form onSubmit={handleSubmit(onSubmit)} className="mt-2 bg-white p-10 rounded shadow-md w-full max-w-lg">
                <div className="mt-4">
                    <Input
                        type={'text'}
                        color={'text-gray-900'}
                        label={'Name of Community'}
                        name={'name'}
                        placeholder={'Enter the community name'}
                        register={formRegister}
                        rules={{
                            required: 'Name is required'
                        }}
                        error={errors.name}
                    />
                </div>
                <div className="mt-4">
                    <Input
                        type={'text'}
                        color={'text-gray-900'}
                        label={'Location'}
                        name={'location'}
                        placeholder={'Enter the community location'}
                        register={formRegister}
                        rules={{
                            required: 'Location is required'
                        }}
                        error={errors.location}
                    />
                </div>
                <div className="mt-4">
                    <Input
                        type={'text'}
                        color={'text-gray-900'}
                        label={'Description'}
                        name={'description'}
                        placeholder={'Enter the community description'}
                        register={formRegister}
                        rules={{
                            required: 'Description is required'
                        }}
                        error={errors.description}
                    />
                </div>
                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Image
                    </label>
                    <div className="flex items-center mt-1">
                        <label className="inline-flex items-center justify-center px-4 py-2 bg-[#84BD00] text-white text-sm font-medium rounded-full cursor-pointer hover:bg-[#92c752]">
                            <span>Upload Image</span>
                            <input
                                id="img"
                                type="file"
                                className="hidden"
                                {...formRegister("img", {
                                    required: "Photo is required",
                                    onChange: handleImageChange
                                })}
                            />
                        </label>
                    </div>
                    {errors.img && (
                        <p className="mt-2 text-sm text-red-600">{errors.img.message}</p>
                    )}
                </div>
                {previewImage && (
                    <>
                        <p className="text-sm text-gray-600 text-center">Image Preview:</p>
                        <div className="mt-4 text-center border-2 border-green-200 border-dotted">
                            <div className="inline-block p-2 mt-2 rounded">
                                <img src={previewImage} alt="Preview" className="w-40 h-auto rounded" />
                            </div>
                        </div>
                    </>
                )}
                <div className="mt-6">
                    <button
                        type="submit"
                        className="inline-flex rounded-full justify-center bg-[#84BD00] hover:bg-[#92c752] focus:outline-none px-6 py-3 text-sm font-medium text-white"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateCommunity;
