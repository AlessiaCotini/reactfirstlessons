//component CLASSE 
// i componenti classe -> STRUTTURA 
// NOME CLASSE = nome COMPONENTE
import { Component } from "react"

const pane = 'Pane'
const latte = 'Latte'
const carciofi = 'Uova'
const coffe = 'Caffè'
class List extends Component{
    render(){
        return(
            <ul>
                <li>Lista spesa</li>
                <li>{pane}</li>
                <li>{latte}</li>
                <li>{carciofi}</li>
                <li>{coffe}</li>
            </ul>
        )
    }
}
export default List
//this.props.nome 