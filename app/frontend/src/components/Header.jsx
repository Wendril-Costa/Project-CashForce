import React from 'react';
import { apertoDeMao, cashForceLogoImg } from '../images';
import '../styles/components/header.css'


const Header = () => {
    return (
        <>
            <div >
                <div className='image-content'>
                    <img src={ cashForceLogoImg } alt='logo CashForce'/>
                </div>
                <div className='aperto-de-mao'>
                    <img src= { apertoDeMao } alt='aperto de mão com a cor verde'/>
                </div>
                <h1 className='notas-fiscais-header'>Notas fiscais</h1>
                <div className='barra'></div>
            </div>
        </>
    );
};

export default Header;
