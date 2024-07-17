import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiPlus } from 'react-icons/fi';

export const InputFile = () => {
    const [files, setFiles] = useState([]);

    const onDrop = useCallback((acceptedFiles) => {
        if (files.length + acceptedFiles.length <= 5) {
            setFiles(prevFiles => [
                ...prevFiles,
                ...acceptedFiles.map((file, index) => Object.assign(file, {
                    preview: URL.createObjectURL(file),
                    id: `${file.name}-${Date.now()}-${index}`
                }))
            ]);
        }
    }, [files]);

    useEffect(() => {
        // Revoke the data uris to avoid memory leaks
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    const { getRootProps, getInputProps, open } = useDropzone({
        onDrop,
        multiple: true,
        noClick: true,
        noKeyboard: true
    });

    const removeFile = (fileId) => {
        setFiles(prevFiles => prevFiles.filter(file => file.id !== fileId));
    };

    const thumbs = files.map(file => (
        <div key={file.id} className="relative mt-4 group">
            <img
                src={file.preview}
                alt={file.name}
                className="w-24 h-24 object-cover rounded"
            />
            <div
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer"
                onClick={() => removeFile(file.id)}
            >
                <span className="text-white font-bold">Eliminar</span>
            </div>
        </div>
    ));

    return (
        <div className='w-full'>
            <div className="flex flex-col items-center mt-4 gap-2">
                <p className="text-lg font-medium text-gray-700">Preview</p>
                <p className="text-sm text-gray-500">You have uploaded {files.length} {files.length === 1 ? 'image' : 'images'}</p>
                <div className="flex flex-wrap justify-center gap-2">
                    {thumbs}
                    {files.length < 5 && (
                        <button
                            type="button"
                            onClick={open}
                            className="flex items-center justify-center mt-4 w-24 h-24 border-2 border-[#84BD00] border-dashed rounded cursor-pointer text-[#84BD00] hover:bg-gray-100"
                        >
                            <FiPlus size={24} />
                        </button>
                    )}
                    <input
                        {...getInputProps()}
                        id="dropzone-file"
                        className="hidden"
                    />
                </div>
            </div>
        </div>
    );
};
