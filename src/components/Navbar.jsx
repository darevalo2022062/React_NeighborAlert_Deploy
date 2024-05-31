import React from 'react';
import logo from '../../public/Logo.png'
import ComunityIcon from '../../public/MyComunityIcon.png'
import HeartIcon from '../../public/HeartIcon.png'
import AddUser from '../../public/AddUser.png'

const Navbar = () => {
    return (
        <nav className="bg-[#11111F] text-white px-6 py-3 flex items-center justify-between">
            <div className="flex items-center">
                <div className="flex flex-col">
                    <div className="text-white-500 font-bold text-lg mb-2 sm:text-xl sm:mb-0">NEIGHBOR</div>
                    <div className="text-white-500 font-bold text-lg mt-2 sm:text-xl">ALERT</div>
                </div>
                <img src={logo} style={{ width: '120px', height: '60px' }} alt='Logo' className='h-8 ml-2'/>
            </div>
            <ul className="flex space-x-4">
                <li className='flex items-center'>
                    <a href="/comunityReports" className="hover:text-green-500 mr-1">Reportes de comunidad</a>
                    <img src={HeartIcon} alt="Heart" style={{ width: '10px', height: '10px' }} className="-m0.5"/>
                </li>
                <li><a href="/misreportes" className="hover:text-green-500">Mis Reportes</a></li>
                <li><a href="/reportar" className="hover:text-green-500">Reportar</a></li>
                <li><a href="/yoreporter" className="hover:text-green-500">YoReporter</a></li>
                <li className='flex items-center'>
                    <img src={ComunityIcon} alt="Login" className="h-6 mr-2 filter invert" />    
                    <a href="/micomunidad" className="hover:text-green-500">Mi comunidad</a>
                </li>
            </ul>
            
            <div className="flex items-center">
                <a href="/register" className="bg-transparent text-green-500 border border-green-500 px-4 py-2 rounded hover:bg-green-600 flex items-center">
                    <img src={AddUser} alt="AddUser" className="filter invert brightness-0 saturate-100" style={{ width: '35px', height: '35px', marginRight: '10px' }}/>
                    <span className="ml-auto">Iniciar Sesión</span>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
