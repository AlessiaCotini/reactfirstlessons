//titolo diverso dentro l'etichetta del bottone 
//lo si fa con la funzione

const ButtonComponent = function(props){
    return <div className="btnDiv">
        <button  className = 'btn'>{props.name}</button>
    </div>
}
export default ButtonComponent