import React, { Component } from 'react';


class InputNumber extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            numerito: 10
         }
    }
   

    //primero sebe incializar el estado
    //el mejor para incializar el estado
    //método constructor
    //Actualizar el estado cuando
    //ese evento sea escuchado

    handleChange = e => {
        //target
        //name que ponemos en nuestro input debe 
        //llamarse igual a como inicializamos
        this.setState({  
          [e.target.name]: e.target.value    
        });

        console.log(this.state.numerito)
    }

    //preventDefault

    handleSubmit = e => {
        e.preventDefault();
         
        console.log('se presionó el botón');
    }

    render() { 
        return ( 
           <form onSubmit={this.handleSubmit}>
            <br />
            <br />
            <label>Número Inicial Contador</label> {''}
            <input 
            onChange={this.handleChange}
            type="number" 
            name="numerito"
            placeholder="ingrese su numero"
            value={this.state.numerito}
            ></input>
            <br />
            <br />
            <button>Enviar Número</button>
            <br />
            <br />
           </form>

         );
    }
}
 
export default InputNumber;

