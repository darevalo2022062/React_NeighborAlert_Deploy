import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import useRequest from '../hooks/useRequest';

const Request = () => {
    const { getAllRequest, acceptRequest } = useRequest();
    const { data, isLoading, error, refetch } = getAllRequest();
    console.log("🚀 ~ Request ~ data:", data);

    useEffect(() => {
        refetch();
    }, [refetch]);

    return (
        <>
            <Navbar />

            <div className='min-h-[calc(100vh-96px)] flex flex-col items-center mb-6'>
                <div className='max-w-4xl shadow-xl rounded-2xl mt-10 w-full'>
                    <div className="overflow-x-auto">
                        {isLoading && <p>Loading...</p>}
                        {error && <p className="text-red-500">Error: {error.message}</p>}
                        <table className="table mx-auto">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Message</th>
                                    <th>Name Lastname</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.length > 0 ? (
                                    data.map((item, index) => (
                                        <tr key={index}>
                                            <th>{index + 1}</th>
                                            <td>{item.message}</td>
                                            <td>{item.idUser.name} {item.idUser.lastName}</td>
                                            <td>{item.status}</td>
                                            <td>
                                                {item.status !== 'Accepted' ? (
                                                    <>
                                                        <button
                                                            onClick={() => acceptRequest(item._id)}
                                                            className="inline-flex items-center px-4 py-3 bg-[#e6fbb7] text-[#84BD00] text-sm font-medium rounded-3xl hover:bg-[#d6fb83]" >
                                                            Accept
                                                        </button>
                                                        <button className="inline-flex items-center px-4 py-3 bg-red-100 text-red-600 text-sm font-medium rounded-3xl hover:bg-red-200">
                                                            Decline
                                                        </button>
                                                    </>
                                                ) : (
                                                    <p className="text-green-600">Accepted</p>
                                                )}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="text-center">No data available</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Request;
