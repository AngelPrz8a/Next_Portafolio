import db from "./db_symbols_contact.json"

export default function Symbols_contact() {
    let symbols: { name: string; link: string; viewBox: string; xmlns: string; title: string; d: string }[] = []
    db.map(element=>(
        symbols.push(element)
    ))
    return symbols
}