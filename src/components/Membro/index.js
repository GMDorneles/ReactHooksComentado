import React, {Component} from 'react';

class Membro extends Component{
    constructor(props){
        super(props);
        this.state={
            status:false,
           
        }
        this.sair = this.sair.bind(this);
        this.entrar = this.entrar.bind(this);
    }
    sair(){
        this.setState({status:false});
    }
    entrar(){
        this.setState({status:true});
    }
        
    render(){
        return(
            <div>
                {
                    this.state.status ?
                    <div>
                        <h2>Bem vindo</h2>
                        <button onClick={this.sair}>Sair</button>
                    </div>:
                    <div>
                        <h2>Olá visitante, faça o login</h2>
                        <button onClick={this.entrar}>Logar</button>
                    </div>

                }
                <div>
                    <h2>Curso react</h2>
                </div>
            </div>
                           
        );
    }
}
export default Membro;