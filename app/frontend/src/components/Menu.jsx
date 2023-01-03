import React from 'react';
import { cashForceLogoImg, apertoDeMaoVerde } from '../images'
import '../styles/components/menu.css'


const Menu = () => {
    return (
        <>
            <div className='header-menu'>
                <div className='menu-content'>
                    <div className='logo-content'>
                        <img src={cashForceLogoImg} alt='logo da Cash Force'className='logo'/>
                    </div>
                    <div className='item-content'>
                        <div className='item-selected'>
                            <div className='faixa-rectangle'/>
                            <img src={apertoDeMaoVerde} alt='aperto de mao verde' className='icon-mao-verde'/>
                            <p>Notas Fiscais</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Menu;
