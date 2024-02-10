import Symbols from "app/components/Skills/page";
import db from "./db.json";
import Main from "../Main/layout";

const Studies =()=>{
    
    return(
        <Main>
        <section id={"estudios"}>
            <p className="title">Estudios</p>

            <div className="studies-container">
                <div className="studies-cards-container">

                    {db.map((item)=>{
                        return(
                            <div key={item.id} className="study-card card">
                                <div className="study-header">
                                    <div className="study-head">
                                        <div className="img">
                                            <img className="circle circle-big" src={item.logo} alt=""/>
                                        </div>
                                        <p className="study-name">{item.programName}</p>
                                    </div>
                                    <div className="study-details">
                                        <p>{item.programTipe}</p>
                                        <p>{item.duration}</p>
                                    </div>
                                </div>
                                
                                <div className="study-body">
                                    {item.state != "Finalizado" ?
                                    <p><strong>{item.state}</strong></p>
                                    : Symbols(item.skills).map((skill)=>(
                                        <div key={skill.name} className="img">
                                            <svg className="circle-small fill-black" role="img" viewBox={skill.viewBox} xmlns={skill.xmlns}><title>{skill.title}</title><path d={skill.d}/></svg>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
        <hr/>
        </Main>
    )
}

export default Studies