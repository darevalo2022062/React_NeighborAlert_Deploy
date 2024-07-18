import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiPlus } from 'react-icons/fi';

const MAX_FILES = 5;

export const InputFile = ({ register, name, setValue }) => {
    const [files, setFiles] = useState([]);
    const [fileForm, setFileForm] = useState([]);

    const onDrop = useCallback((acceptedFiles) => {
        const newFileForm = [...fileForm, ...acceptedFiles];
        setFileForm(newFileForm);
        setValue(name, newFileForm);
        const newFiles = acceptedFiles.slice(0, MAX_FILES).map((file, index) => ({
            ...file,
            preview: URL.createObjectURL(file),
            id: `${file.name}-${Date.now()}-${index}`
        }));

        setFiles(prevFiles => {
            const allFiles = [...prevFiles, ...newFiles];
            return allFiles;
        });
    }, [fileForm, setValue, name]);

    useEffect(() => {
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    const { getRootProps, getInputProps, open } = useDropzone({
        onDrop,
        multiple: true,
        noClick: true,
        noKeyboard: true
    });

    const removeFile = (fileId) => setFiles(prevFiles => {
        const updatedFiles = prevFiles.filter(file => file.id !== fileId);
        const acceptedFiles = updatedFiles.map(file => {
            const { id, preview, ...rest } = file;
            return rest;
        });
        setFileForm(acceptedFiles);
        setValue(name, acceptedFiles); 
        return updatedFiles;
    });

    return (
        <div className='w-full'>
            <div className="flex flex-col items-center mt-4 gap-2">
                <p className="text-lg font-medium text-gray-700">Preview</p>
                <p className="text-sm text-gray-500">
                    You have uploaded {files.length} {files.length === 1 ? 'image' : 'images'}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                    {files.map(file => (
                        <div key={file.id} className="relative mt-4 group">
                            <img src={file.preview} alt={file.name} className="w-24 h-24 object-cover rounded" />
                            <div
                                className="absolute inset-0 bg-black bg-opacity-50 flex items-center rounded justify-center opacity-0 group-hover:opacity-100 cursor-pointer"
                                onClick={() => removeFile(file.id)}
                            >
                                <span className="text-white font-bold">Eliminar</span>
                            </div>
                        </div>
                    ))}
                    {files.length < MAX_FILES && (
                        <button
                            type="button"
                            onClick={open}
                            className="flex items-center justify-center mt-4 w-24 h-24 border-2 border-[#84BD00] border-dashed rounded cursor-pointer text-[#84BD00] hover:bg-gray-100"
                        >
                            <FiPlus size={24} />
                        </button>
                    )}
                    <input {...getInputProps()} {...register(name)} className="hidden" />
                </div>
            </div>
        </div>
    );
};
