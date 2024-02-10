import Symbols from "app/components/Skills/page";
import Main from "../Main/layout";
import db from "./db.json";

const Courses =()=>{
    
    return(
    <Main>
        <section id={"cursos"}>                
            <p className="title">Cursos</p>
            <div className="curses-cards-container">

                {db.map((element)=>(
                    <div key={element.id} className="curse-card card">
                        <div className="curse-head">
                            <div className="img">
                                <img className="circle circle-big" src={element.logo} alt={element.institute} />
                            </div>
                            <p>{element.institute}</p>
                            <div className="text">
                                <p>{element.programName}</p>
                                <p className="curse-date">{element.duration}</p>
                            </div>
                        </div>
                        <div className="curse-body">
                            {
                                Symbols(element.skills).map((skill)=>(
                                    <div key={skill.name} className="img">
                                        <svg className="circle-small fill-black" role="img" viewBox={skill.viewBox} xmlns={skill.xmlns}><title>{skill.title}</title><path d={skill.d}/></svg>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))}
                

            </div>
        </section>
        <hr/>
    </Main>
    )
}

export default Courses