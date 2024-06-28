import React from 'react'
import Navbar from '../components/Navbar'
import useAuth from '../hooks/useAuth'

const Community = () => {
    const { user } = useAuth()
    console.log(user)
    return (
        <>
            <Navbar />
            <div>Nombre: {user.name}</div>
            <div>Nombre: {user.lastName}</div>
        </>
    )
}

export default Community