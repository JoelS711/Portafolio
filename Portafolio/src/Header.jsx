import './styles/header.css';
import logo from './assets/logo.png';

export function Header() {
    return (
            <header className='header'>
                <div className='header__container'>
                    <figure className='header__logo'>
                        <img src={`${logo}`} alt="Logo" className='header__logo--img' />
                    </figure>
                    <nav className='header__nav'>
                        <ul class="header__menu">
                            <li class="header__menu-item">
                                <a href="#" class="header__menu-link">Acerca de mi</a>
                            </li>
                            <li class="header__menu-item">
                                <a href="#" class="header__menu-link">Experiencia</a>
                            </li>
                            <li class="header__menu-item">
                                <a href="#" class="header__menu-link">Proyectos</a>
                            </li>
                            <li class="header__menu-item">
                                <a href="#" class="header__menu-link">Habilidades</a>
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