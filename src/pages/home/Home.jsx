import React from 'react'
import Navbar from '../../components/Navbar'
import useAuth from '../../hooks/useAuth'

const Home = () => {
    const { isAuthenticated} = useAuth();
    return (
        <> {/* <---- usar estas etiquetas vacias  <>  en cada componente que envuelvan todo el componente */}
            <Navbar />
            <h1>HOME </h1>
        </>
    )
}

export default Home