import './styles/header.css';
import logo from './assets/logo.png';
import React, { useState, useEffect } from 'react';


export function Header() {
    const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
    return (
            <header className={scroll ? 'header-scroll' : 'header'}>
                <div className='header__container'>
                    <figure className='header__logo'>
                        <img src={`${logo}`} alt="Logo" className='header__logo--img' />
                    </figure>
                    <nav className='header__nav'>
                        <ul className="header__menu">
                            <li className="header__menu-item">
                                <a href="#" className="header__menu-link">Acerca de mi</a>
                            </li>
                            <li className="header__menu-item">
                                <a href="#" className="header__menu-link">Experiencia</a>
                            </li>
                            <li className="header__menu-item">
                                <a href="#" className="header__menu-link">Proyectos</a>
                            </li>
                            <li className="header__menu-item">
                                <a href="#" className="header__menu-link">Habilidades</a>
                            </li>
                        </ul>
                    </nav>
                    <div className='header__buttons'>
                        <button className='header__button'><img src="./src/assets/moon.png" alt="dark mode" className='header__button--icon' /></button>
                        <button className='header__button'><img src="https://flagsapi.com/US/shiny/64.png" alt="language" className='header__button--flag' /></button>
                    </div>
                </div>
            </header>
        
    )
}