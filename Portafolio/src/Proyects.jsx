import './styles/proyects.css';

export function Proyects() {
    return (
        <>
            <section class="separator">
                <div className="separator__line"></div>
            </section>
            <section className='proyects'>
                <h2 className="proyects__title">Proyectos</h2>
                <p className="proyects__description">He trabajo en proyectos utilizando Java, JavaScript, Spring Boot, HTML, CSS, Angular, React y Python, entre otros. Mi enfoque abarca desde aplicaciones web hasta backend, trabajando con bases de datos relacionales y no relacionales para garantizar la calidad y eficiencia en cada proyecto.</p>
                <article className='proyects__cards'>
                    <div className="proyects__card">
                        <div className="proyects__image">
                            <figure className="proyects__figure">
                                <img src="./src/assets/proyects/f1.png" alt="Image of Page" className="proyects__figure--img"/>
                            </figure>
                        </div>
                        <h3 className="proyects__name">Proyect F1</h3>
                        <div className='proyects__icons'>
                            <figure className='proyects__icon'>
                                <img src="./src/assets/icons/html.png" alt="html Logo" className='proyects__icon--img'/>
                                <img src="./src/assets/icons/css.png" alt="html Logo" className='proyects__icon--img'/>
                                <img src="./src/assets/icons/js.png" alt="html Logo" className='proyects__icon--img'/>
                            </figure>
                        </div>
                        <p className="proyects__description">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                        <div className="proyects__buttons">
                            <button className="proyects__button"><a href="">Github</a></button>
                            <button className="proyects__button"><a href="">Preview</a></button>
                        </div>

                    </div>
                </article>
            </section>
        </>
    )
}