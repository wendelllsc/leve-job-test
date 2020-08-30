import React from 'react';
import axios from 'axios';
import MaskedInput from 'react-text-mask';

class FormCadstroPessoa extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        nome: '',
        telefone: '',
        cpf: '',
    };
      this.handleChange = this.handleChange.bind(this); 
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event){
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({ [nam]: val });
    }

    handleSubmit(event) {
      event.preventDefault();

      //Remove máscara para salvar no banco
      let telefoneOnly = this.state.telefone.replace(/[ ~!@#$%^&*()_|+\-=?;:'",.<>{}[\]/]/gi, '')
      let cpfOnly = this.state.cpf.replace(/[ ~!@#$%^&*()_|+\-=?;:'",.<>{}[\]/]/gi, '')

      const data = {
        nome: this.state.nome,
        telefone: telefoneOnly,
        cpf: cpfOnly
      }
      axios.post('http://localhost:3001/pessoa', data);
      window.location = 'http://localhost:3000/pessoas';
    }


    render() {
      return (
        <div className='bg-primary h-100 d-flex justify-content-center align-items-center flex-column'>
                <h1 className='text-white'>Cadastro de Pessoa</h1>
                <div className='container p-2 bg-white rounded border'>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <div className='m-2'>
                                <span>Nome:</span>
                                <input type="text" className="form-control" placeholder="Nome" id="nome" name='nome' onChange={this.handleChange}></input>
                            </div>
                        </div>
                        <div className="form-group d-flex">
                            <div className='m-2 w-50'>
                                <span className='m-auto'>Telefone:</span>
                                <MaskedInput className="form-control" placeholder="Telefone" id="telefone" name='telefone' onChange={this.handleChange} mask={['(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}></MaskedInput>
                            </div>
                            <div className='m-2 w-50'>
                                <span className='m-auto'>CPF:</span>
                                <MaskedInput className="form-control" placeholder="CPF" id="cpf" name='cpf' onChange={this.handleChange} mask={[/[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}></MaskedInput>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <input type='submit' value='Cadastrar' className="btn btn-primary" placeholder="Cadastrar"/>
                        </div>
                    </form>
                </div>
            </div>
      );
    }
  }
export default FormCadstroPessoa;