import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

export const InputFile = () => {
    const [files, setFiles] = useState([]);

    const onDrop = useCallback((acceptedFiles) => {
        setFiles(prevFiles => [
            ...prevFiles,
            ...acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            }))
        ]);
    }, []);

    useEffect(() => {
        // Revoke the data uris to avoid memory leaks
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        multiple: true
    });

    const thumbs = files.map(file => (
        <div key={file.name} className="mt-4">
            <img
                src={file.preview}
                alt={file.name}
                className="w-24 h-24 object-cover rounded"
            />
        </div>
    ));

    return (
        <div className='w-full'>
            <div {...getRootProps({ className: 'dropzone' })} className="mx-auto cursor-pointer flex flex-col items-center rounded-xl border-2 border-[#84BD00] border-dashed bg-gray-100 p-6 text-center">
                <input {...getInputProps()} id="dropzone-file" className="hidden" />

                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#84BD00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <h2 className="mt-4 text-xl font-medium text-gray-700 tracking-wide">Payment File</h2>
                <p className="mt-2 text-gray-500 tracking-wide">Upload or drag & drop your file SVG, PNG, JPG or GIF.</p>

                <div className="flex flex-wrap justify-center mt-4 gap-2">
                    {thumbs}
                </div>
            </div>
        </div>
    );
};


