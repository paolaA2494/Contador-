import React from 'react';


//cuenta un método constructor es el mejor espacio para levantar 
//en los compenentes tipo funcion el estado solo se puede levantar
// y actualizar por medio de Hooks


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            number: this.props.numero
         }
         //metodo es el mejor lugar para incializar el estado
    }
   
    handleCounterUp = () => {
        //manipular el estado, con el método de actualización 
        //del estado
        this.setState({
            number: this.state.number + 1
        })
    };

    handleCounterDown = () => {
        //manipular el estado, con el método de actualización 
        //del estado
        this.setState({
            number: this.state.number - 1
        })
    };

    render() { 
        return ( 
         <>
          <h1>Mi contadorcito</h1>
          <button onClick={this.handleCounterDown}>Decrementar</button> {''}
          <button onClick={this.handleCounterUp}>Incrementar</button>
          <h3>{this.state.number}</h3>
        </>
         );
    }
}
 
export default Counter;






