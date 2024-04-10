import './styles/skills.css';
import dataSkill from './assets/dataProyect.json';


export function Skills() {

    let allSkills = [];
    dataSkill.forEach(data => {
        data.icons.forEach(icon => {
                allSkills.push({ src: icon.src, alt: icon.alt });
        });
    });
    const uniqueSkills = allSkills.filter((skill, index, self) => 
        index === self.findIndex(s => s.src === skill.src && s.alt === skill.alt)
    );
    return (
        <>
            <section className="separator">
                <div className="separator__line"></div>
            </section>
            <section className='skills'>
                <h2 className="skills__title">Habilidades</h2>
                <figure className="skills__figure">
                    {uniqueSkills.map((skill, index) => (
                        <img src={skill.src} alt={skill.alt} className='skills__img' key={index} />
                    ))}

                </figure>

            </section>
        </>
    )
}