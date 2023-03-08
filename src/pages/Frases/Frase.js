import React, {Component} from 'react';
import img from '../../assets/biblia.jpg';
import './Frase.css';
class Frase extends Component{
  constructor(props){
    super(props);
    this.state = {
      textoFrase: ''
    }
    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [' 19 Se vocês estiverem dispostos a obedecer comerão os melhores frutos desta terra;',

    ' Isais 1:19 Se vocês estiverem dispostos a obedecer comerão os melhores frutos desta terra;',
  
    'Acredite  em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.']
  }

  quebraBiscoito(){
    let state = this.state;

    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "';
    this.setState(state);
  }

  render(){
    return(
      <div className="container">
      <div className="card mt-4 mb-3 bg-warning bg-opacity-75">
       
        <img className='img' src={img} alt="Palavras da Biblia" />
       
        <Botao nome=  'PALAVRAS DE SABEDORIA' acaoBtn={this.quebraBiscoito}/>
      
        <h3 className='textoFrase'>{this.state.textoFrase}</h3>
      </div>
      </div>
     
      
    )
  }
}

class Botao extends Component{
  render(){
    return(
      <div className="card mt-4 mb-3 bg-warning bg-opacity-75">
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
       
      </div>
    )
  }
}
export default Frase;