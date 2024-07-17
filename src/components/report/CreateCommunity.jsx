import React, { useState } from 'react';
import { FiAlertTriangle } from "react-icons/fi";
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import useCommunity from '../../hooks/useCommunity';
import Input from '../common/Input';
import useUser from '../../hooks/useUser';

const CreateCommunity = () => {

    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createCommunity } = useCommunity();


    return (
        <>

        </>
    )

}

export default CreateCommunity;