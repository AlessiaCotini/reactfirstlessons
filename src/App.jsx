
import './App.css'
import Title from './components/Title'
import List from './components/List'
import ButtonComponent from './components/ButtonComponent'
import Image from './components/Image'
//importo Title
function App() {
  return (
    //sembrerebbe essere un tag vuoto, se la regola vuole che ci RITORNI un solo valore
    //dobbiamo quindi incastonare tutto ciò che ci serve ritornare in UN SOLO VALORE
    //REACT ci crea un CONTENITORE VIRTUALE <> per far rispettare la regola -> REACT FRAGMENT
    //si possono assegnare dei PROP con dei valori ad ogni components 

    <> 
    <Title name='Ale'/>
    <div>
    <ButtonComponent name = 'Here'/>
    <ButtonComponent name = 'There'/>
    <ButtonComponent name = 'Somewhere'/>
    </div>
    <div className ='d-flex justify-content-around'>
    <Image src ='https://placecats.com/g/250/250'/>
    <Image src ='https://placecats.com/g/250/250'/>
    <Image src ='https://placecats.com/g/250/250'/>
    </div>
    </>
  )
}
//abbiamo importato un frammento di react-> pezzetto di interfaccia

export default App
//componente principale- main importa app