import React from 'react'
import Navbar from '../components/Navbar'
import useAuth from '../hooks/useAuth'
import Footer from '../components/common/Footer';
import EnterCommunity from '../components/report/EnterCommunity';
import { FormReport } from '../components/report/FormReport';

const Reports = () => {

    const { user } = useAuth();

    return (
        <>
            <Navbar />

            {user.idCommunity == null ? (
                <>
                    <EnterCommunity />
                </>
            ) : (
                <>
                    <FormReport />
                </>
            )}
            <Footer />

        </>
    )
}

export default Reports