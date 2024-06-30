import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ComboBox } from '../common/ComboBox';
import Input from '../common/Input';
import { InputFile } from '../common/InputFile';
import TextArea from '../common/TextArea';

export const FormReport = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const options = [
        { value: '#general', label: 'General' },
        { value: '#event', label: 'Event' },
        { value: '#news', label: 'News' },
        { value: '#job', label: 'Job' },
        { value: '#housing', label: 'Housing' }

    ];



    const onSubmit = async (data) => {
        await login(data);
    };

    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-96px)] bg-white">
            <form className="max-w-5xl w-full p-8 " onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mb-4">
                        <Input
                            type={'text'}
                            color={'text-gray-900'}
                            label={"Title"}
                            name={'title'}
                            placeholder={'Enter your email address'}
                            register={register}
                            rules={{
                                required: 'Title is required'
                            }}
                            error={errors.title}

                        />
                    </div>
                    <div className="mb-4">
                        <ComboBox
                            label="Select a category"
                            name="option"
                            placeholder="Select an option"
                            options={options}
                            register={register}
                            rules={{ required: 'You must select an option' }}
                            error={errors.option}
                            color="text-gray-700"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <TextArea
                        label="Report Description"
                        name="comments"
                        placeholder="Write the report here ..."
                        rows={5}
                        cols={50}
                        register={register}
                        rules={{ required: 'Description is required' }}
                        error={errors.comments}
                        color="text-gray-700"
                    />
                </div>
                <div className="mb-4 flex items-center">
                    <input
                        id="anonymous"
                        type="checkbox"

                        className="mr-2 leading-tight"
                    />
                    <label className="text-gray-700 text-sm font-bold" htmlFor="anonymous">
                        Publish Anonymously
                    </label>
                </div>
                <InputFile />
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-[#84BD00] hover:bg-[#92c752] text-white font-bold py-4 px-6 rounded-full focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

