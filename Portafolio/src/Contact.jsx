import './styles/contact.css';


export function Contact() {

    return (
        <>
            <section className="separator">
                <div className="separator__line"></div>
            </section>
            <section className='contact' id='contact'>
                <h2 className="contact__title">Contacto</h2>
                <p className="contact__description">Estoy disponible para considerar cualquier oportunidad profesional o propuesta de colaboración que pueda surgir. Si tienes alguna idea que te gustaría discutir o compartir, no dudes en ponerte en contacto conmigo. Estaré encantado de responder a la brevedad posible y explorar cómo podemos colaborar juntos.</p>
                <div className='contact__card'>
                    <figure className='contact__mail'>
                        <a href='mailto:joelsanabria11@gmail.com' className='contact__mail--link'>
                            <img src='/SocialMedia/maillight.png' alt="Image Mail" className='contact__mail--img' />
                            <span className='contact__mail--mail'>joelsanabria11@gmail.com</span>
                        </a>
                    </figure>

                    <div className='contact__media'>
                        <figure className='contact__media--figure'>
                            <a href="https://wa.me/+573209028534" target="_blank">
                                <img src='/SocialMedia/whatsapp.png' alt="Image WhatsApp" className='contact__media--img' />
                            </a>
                        </figure>
                        <figure className='contact__media--figure'>
                            <a href="https://www.linkedin.com/in/emanuel-gelvez-13020a1b0/" target="_blank">
                            <img src='/SocialMedia/linkedln.png' alt="Image Linkedln" className='contact__media--img'/>
                            </a>
                        </figure>
                    </div>
                </div>
            </section>
        </>
    )
}