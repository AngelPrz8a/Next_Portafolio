import db_symbols from "./db_symbols.json"

const Symbols = (names:any[])=>{
    let result:{
            "name":string,
            "viewBox":string,
            "xmlns":string,
            "title":string,
            "d":string
    }[]=[]
    names.map(name=>{
        db_symbols.map(element=>{
            if(name == element.name){
                result.push(element)
            }
        })
    })
    return result
}

export default Symbols