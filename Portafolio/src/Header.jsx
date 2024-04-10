import './styles/header.css';
import logo from './assets/logo.png';
import React, { useState, useEffect } from 'react';


export function Header({ onDarkModeChange }) {
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const visible = prevScrollPos > currentScrollPos;
            setPrevScrollPos(currentScrollPos);
            setVisible(visible);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        onDarkModeChange(newMode); // Llama a la función proporcionada por la prop onDarkModeChange
        localStorage.setItem('darkMode', newMode);
    };
    return (
        <header className={visible ? 'header-scroll' : 'header'}>
            <div className='header__container'>
                <figure className='header__logo'>
                    <img src={`${logo}`} alt="Logo" className='header__logo--img' />
                </figure>
                <nav className='header__nav'>
                    <ul className="header__menu">
                        <li className="header__menu-item">
                            <a href="#about" className="header__menu--link">Acerca de mi</a>
                        </li>
                        <li className="header__menu-item">
                            <a href="#experience" className="header__menu--link">Experiencia</a>
                        </li>
                        <li className="header__menu-item">
                            <a href="#proyects" className="header__menu--link">Proyectos</a>
                        </li>
                        <li className="header__menu-item">
                            <a href="#skills" className="header__menu--link">Habilidades</a>
                        </li>
                        <li className="header__menu-item">
                            <a href="#contact" className="header__menu--link">Contacto</a>
                        </li>
                    </ul>
                </nav>
                <div className='header__buttons'>
                    <div class="toggle-switch">
                        <label class="switch-label">
                            <input type="checkbox" class="checkbox" checked={darkMode}
                                onChange={toggleDarkMode} />
                            <span class="slider"></span>
                        </label>
                    </div>
                    <button className='header__button'><img src="https://flagsapi.com/US/shiny/64.png" alt="language" className='header__button--flag' /></button>
                </div>
            </div>
        </header>

    )
}