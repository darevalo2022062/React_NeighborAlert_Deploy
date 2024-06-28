import React from 'react'
import Navbar from '../components/Navbar'
import { FormReport } from '../components/Reports/FormReport'

const Reports = () => {
    return (
        <>
            <Navbar />
            <div >
                <FormReport />
            </div>
        </>
    )
}

export default Reports