//cambia immagine ogni volta
//lo si fa con la classe 
import { Component } from "react"
  


class Image extends Component{
    render(){
        return(
           <img src={this.props.src} alt="immagine" />
        )
    }
}
export default Image