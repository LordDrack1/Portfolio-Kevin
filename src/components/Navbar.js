import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {Button3} from './Button3'

function Navbar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton =()=>{
        if(window.innerWidth <=960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    },[]);

    window.addEventListener('resize',showButton);
    return(
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <a data-easing="linear" href="/" className="navbar-logo" onClick={closeMobileMenu}>
                    Kevin Peñailillo
                </a>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <a data-easing="linear" href='#inicio' className='nav-links' onClick={closeMobileMenu}>
                            Inicio
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a data-easing="linear" href='#services' className='nav-links' onClick={closeMobileMenu}>
                            Servicios
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a data-easing="linear" href='#skills' className='nav-links' onClick={closeMobileMenu}>
                            Habilidades
                        </a>
                    </li>
                    <li>
                        <a data-easing="linear" href='#contacts' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Contacto
                        </a>
                    </li>
                </ul>
                {button && <Button3 buttonStyle='btn--outline'>Contacto</Button3>}
            </div>
        </nav>
        </>
    );
}
export default Navbar