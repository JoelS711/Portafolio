import './styles/about.css';

export function About() {
    return (
        <section className='about' id='about'>
            <h2 className='about__title'>Acerca de mi</h2>
            <p className='about__p'>Soy un apasionado desarrollador de software con experiencia en tecnologías modernas. Me encanta trabajar en proyectos desafiantes y colaborar con equipos creativos para ofrecer soluciones innovadoras. Mi enfoque se centra en crear experiencias digitales impactantes y de alta calidad que mejoren la vida de las personas.</p>
            <div className='about__cards'>
                <figure className='about__cards--card'>
                    <img src="./src/assets/unomas2.png" alt="Mas de un anio" className='about__cards--img' />
                    <p>Soy un desarrollador con más de un año de experiencia en mis propios proyectos, enfocado en la innovación y la resolución creativa de problemas.</p>
                </figure>
                <figure className='about__cards--card'>
                <img src="./src/assets/graduation-hat2.png" alt="Graduation" className='about__cards--img'/>
                    <p>Egresado como tecnologo en sistemas de la Universidad ECCI y actualmente estudiante de Ingenieria de Software</p>
                </figure>
                <figure className='about__cards--card'>
                <img src="./src/assets/diploma.png" alt="Graduation" className='about__cards--img'/>
                    <p>Diplomado en desarrollo de software Universidad del Bosque y MinTic</p>
                </figure>
            </div>
        </section>
    )
}