import './styles/experience.css';

export function Experience() {
    return (
        <>
            <section className="separator">
                <div className="separator__line"></div>
            </section>
            <section className='experience' id='experience'>
                <h2 className="experience__title">Experiencia Laboral</h2>
                <div className="experience__cards">
                    <div className="experience__card">
                        <div className="experience__card--titlecontain">
                            <h4 className='experience__card--title'>Mayo 2017 - Julio 2021</h4>
                        </div>
                        <span className='experience__card--company'>Acer Latam</span>
                        <span className='experience__card--position'>Asesor</span>
                        <p className='experience__card--text'>Trabajé como Asesor Comercial, brindando asesoramiento en software
                            y hardware. Logré aumentar las ventas y mejorar la satisfacción del
                            cliente, desarrollando habilidades comerciales y tecnológicas clave.</p>
                    </div>
                    <div className="experience__card">
                        <div className="experience__card--titlecontain">
                            <h4 className='experience__card--title'>Enero 2022 - Enero 2024</h4>
                        </div>
                        <span className='experience__card--company'>Colombia Movil - TIGO</span>
                        <span className='experience__card--position'>Asesor</span>
                        <p className='experience__card--text'>Trabajé en el área de Redes y Telecomunicaciones como especialista
                            en atención al cliente, brindando soporte y realizando ventas. Esta
                            experiencia fortaleció mis habilidades en comunicación y resolución
                            de problemas. </p>
                    </div>
                </div>

            </section>
        </>
    )
}