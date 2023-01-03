import React from 'react';
import { apertoDeMao } from '../images';
import '../styles/components/header.css'


const Header = () => {
    return (
        <>
            <div className='header'>
                <div className='header-sistema'/>
                <div className='header-content-fiscais'>
                    <img src={apertoDeMao} alt='aperto de mao' className='imgApertoDeMao'/>
                    <h3 className='titulo'>Notas Fiscais</h3>
                </div>
                <p className='paragrafo'>Visualize as notas fiscais que você tem</p>
            </div>
        </>
    );
};

export default Header;
