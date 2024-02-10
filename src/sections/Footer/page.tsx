import Symbols_contact from "app/components/Contact/page"

const Footer = () => {
    return (
        <>
        <footer>
            {/*<p className="title">Contactame</p>*/}
            <div className="footer-container" >
                {
                    Symbols_contact().map(element=>(
                        <a key={element.name} target="_blank" rel="noopener noreferrer" 
                        href={element.link}>
                            <div className="img">
                                <svg className="circle-medium fill-white" role="img" viewBox={element.viewBox} xmlns={element.xmlns}><title>{element.title}</title><path d={element.d}/></svg>                    
                            </div>
                        </a>
                    ))
                }
            </div>
        </footer>
        </>
    )
}

export default Footer