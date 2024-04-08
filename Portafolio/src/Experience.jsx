import './styles/experience.css';

export function Experience() {
    return (
        <>
            <section class="separator">
                <div className="separator__line"></div>
            </section>
            <section className='experience'>
                <h2 className="experience__title">Experiencia Laboral</h2>
                <div className="experience__cards">
                    <div className="experience__card">
                        <div className="experience__card--titlecontain">
                            <h4 className='experience__card--title'>Mayo 2017 - Julio 2021</h4>
                        </div>
                        <span className='experience__card--company'>Acer Latam</span>
                        <span className='experience__card--position'>Asesor</span>
                        <p className='experience__card--text'>Asesor comercial con alta experiencia en software y hardware.</p>
                    </div>
                    <div className="experience__card">
                        <div className="experience__card--titlecontain">
                            <h4 className='experience__card--title'>Enero 2022 - Enero 2024</h4>
                        </div>
                        <span className='experience__card--company'>Colombia Movil - TIGO</span>
                        <span className='experience__card--position'>Asesor</span>
                        <p className='experience__card--text'>Asesor servicio y ventas, manejo de
                            plataformas facturadoras, entre otras. </p>
                    </div>
                </div>

            </section>
        </>
    )
}