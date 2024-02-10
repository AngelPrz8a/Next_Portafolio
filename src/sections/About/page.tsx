import db from "./db.json"
import Main from "../Main/layout"
import Symbols from "app/components/Skills/page"
import db_symbols from "app/components/Skills/db_symbols.json"

const About = () => {

    const symbols_name=(json_symbols:any[])=>{
        const db_names:{
            "name":string,
            "viewBox":string,
            "xmlns":string,
            "title":string,
            "d":string
        }[]=[]
        json_symbols.map(element=>{
            db_names.push(element.name)
        })
        return db_names
    }

    return (
        <Main>
        <section id={"inicio"}>
            <p className="title">Sobre mi</p>
            <div className="about">
                <div className="about-head">
                    {db.about.map((paragraph)=>(
                        <>
                            <p key={paragraph.id}>{paragraph.paragraph}</p>
                            {paragraph.id !== 3 && <br />}
                        </>
                    ))}
                </div>
                <div className="about-tools">
                    {
                        Symbols(symbols_name(db_symbols)).map((skill)=>(
                        <div key={skill.name} className="img">
                            <svg className="circle-small fill-white" role="img" viewBox={skill.viewBox} xmlns={skill.xmlns}><title>{skill.title}</title><path d={skill.d}/></svg>
                        </div>
                        ))
                    }
                </div>
            </div>
        </section>
        <hr/>
        </Main>  
    )
}

export default About