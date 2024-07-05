import React from 'react'
import Navbar from '../components/Navbar'
import useAuth from '../hooks/useAuth'
import { Section } from '../components/community/Section'


const Community = () => {
    const { user } = useAuth()
    console.log(user)
    return (
        <>
            <Navbar />
            <Section/>
         
        </>
    )
}

export default Community