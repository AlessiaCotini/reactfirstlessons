// DUE MODI PER CREARE COMPONENTI 
// componenti A FUNZIONE -> 
// componenti A CLASSE -> Piu complessi 
// nome funzione === nome File MAIUSCOLA
const Title = function(props){
    return <div>
        <h1>ESERCIZIO REACT DI: {props.name} </h1>
    </div>
}
export default Title

//un COMPONENTE per FILE 
// un export per PAGINA
//ora lo devo mettere in APP