import React, { useState } from 'react';
import { FiAlertTriangle } from "react-icons/fi";
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../common/Input';
import useUser from '../../hooks/useUser';

const EnterCommunity = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { enterCommunity, loading } = useUser();

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const onSubmit = (data) => {
        console.log('Código ingresado:', data);
        enterCommunity(data)
        closeModal();
    };
    return (
        <>
            <div className="flex min-h-[calc(100vh-96px)] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-md text-center">
                    <FiAlertTriangle className="mx-auto h-14 w-14 stroke-[px]" />
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        You are not associated with any community
                    </h1>
                    <p className="mt-4 text-muted-foreground">
                        We're sorry, but it appears that you are not associated with a community. Please contact an administrator to gain access.
                    </p>
                    <div className="mt-6">
                        <button
                            onClick={openModal}
                            className="inline-flex items-center bg-[#84BD00] text-white px-4 py-4 rounded-full text-sm font-medium shadow-sm transition-colors focus:outline-none"
                        >
                            Join a community
                        </button>
                    </div>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                                    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                                        <div className="mt-2">
                                            <Input
                                                type={'text'}
                                                color={'text-gray-900'}
                                                label={'Code Access'}
                                                name={'codeAccess'}
                                                placeholder={'Enter the community code'}
                                                register={register}
                                                rules={{
                                                    required: 'Code Access is required'
                                                }}
                                                error={errors.codeAccess}
                                            />
                                        </div>

                                        <div className="mt-4">
                                            <button
                                                type="submit"
                                                className="inline-flex rounded-full justify-center bg-[#84BD00] hover:bg-[#92c752] focus:outline-none px-6 py-3 text-sm font-medium text-white"
                                            >
                                                Enviar
                                            </button>
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default EnterCommunity