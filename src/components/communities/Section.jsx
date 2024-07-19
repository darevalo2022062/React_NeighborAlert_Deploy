import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import useAuth from '../../hooks/useAuth'
import { useForm } from 'react-hook-form'
import Input from '../common/Input'

export const Section = ({ community }) => {
    const { user } = useAuth();
    const [previewImage, setPreviewImage] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [onEditSubmit, setOnEditSubmit] = useState(false);
    let { register: formRegister, handleSubmit, formState: { errors }, watch, reset } = useForm();
    const { name, location, description, img, createdAt } = community;

    console.log(formRegister.name.value);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreviewImage(URL.createObjectURL(file));
        } else {
            setPreviewImage(null);
        }
    };

    const onSubmit = async (data) => {
        console.log('Data:', data);

    }

    const handleEdit = () => {
        setIsEditModalOpen(true);

    }

    const handleDelete = () => {

    }

    const handleEditCancel = () => {
        formRegister.name.value = '';
        setPreviewImage(null);
        setIsEditModalOpen(false);
    }

    return (
        <>

            {
                //Aquí va la vista de ADMIN INSANO
                user.role === 'Sp_ADMIN' ?
                    <div className="min-h-[calc(100vh-96px)] pb-6 mx-auto">
                        <img src={img} alt="Featured image" className="w-full h-64 sm:h-96 object-cover" />
                        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="py-8">
                                <h1 className="text-5xl font-bold mb-2">{name}</h1>
                                <p className="text-gray-500 text-sm">Published on </p>
                            </div>
                            <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
                                {description}
                            </div>
                        </div>
                    </div>
                    : <></>
            }

            {
                //ADMIN
                user.role === 'ADMIN' ?
                    <div className="min-h-[calc(100vh-96px)] pb-6 mx-auto">
                        <img src={img} alt="Featured image" className="w-full h-64 sm:h-96 object-cover" />
                        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="py-8 flex justify-between items-center">
                                <div>
                                    <h1 className="text-5xl font-bold mb-2">{name}</h1>
                                    <p className="text-gray-500 text-sm">Published on </p>
                                </div>
                                <div className="flex space-x-4">
                                    <button
                                        onClick={handleEdit} // Placeholder for edit handler
                                        className="inline-flex items-center px-4 py-2 bg-[#e6fbb7] text-[#84BD00] text-sm font-medium rounded-lg hover:bg-[#d6fb83]"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={handleDelete} // Placeholder for delete handler
                                        className="inline-flex items-center px-4 py-2 bg-red-100 text-red-600 text-sm font-medium rounded-md hover:bg-red-200"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                            <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
                                {description}
                            </div>
                        </div>

                        {/* Edit Modal */}
                        {isEditModalOpen && ( // Placeholder for modal open state
                            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                                    <h2 className="text-2xl font-bold mb-4">Edit Community</h2>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mt-4">
                                            <Input
                                                type={'text'}
                                                color={'text-gray-900'}
                                                label={'Name'}
                                                name={'name'}
                                                placeholder={'Enter the new name'}
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
                                                placeholder={'Enter the new location'}
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
                                                placeholder={'Enter thethe new description'}
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
                                                <label className="inline-flex items-center justify-center px-4 py-2 bg-[#84BD00] text-white text-sm font-medium rounded-lg cursor-pointer hover:bg-[#92c752]">
                                                    <span>Upload the new Image</span>
                                                    <input
                                                        id="img"
                                                        type="file"
                                                        className="hidden"
                                                        {...formRegister("img", {
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

                                        <div className="flex justify-end space-x-4">
                                            <button
                                                type="button"
                                                onClick={handleEditCancel} // Placeholder for cancel handler
                                                className="inline-flex items-center px-4 py-2 bg-gray-300 text-black text-sm font-medium rounded-md hover:bg-gray-400"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                    :
                    //USER
                    <div className="min-h-[calc(100vh-96px)] pb-6 mx-auto">
                        <img src={img} alt="Featured image" className="w-full h-64 sm:h-96 object-cover" />
                        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="py-8">
                                <h1 className="text-5xl font-bold mb-2">{name}</h1>
                                <p className="text-gray-500 text-sm">Published on </p>
                            </div>
                            <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
                                {description}
                            </div>
                        </div>
                    </div>

            }
        </>
    )
}
