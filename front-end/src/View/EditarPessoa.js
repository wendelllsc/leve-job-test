import React from 'react';
import axios from 'axios';
import Header from '../Components/Header/Header';
import MaskedInput from 'react-text-mask';

export default class EditarPessoa extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          pessoa : {
              id: '',
              nome: '',
              telefone: '',
              cpf: ''
          },
          matriculas: [],
          funcDelete: this.removeMatricula
      };
        this.handleChange = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount(){
          this.onLoadData();
      }

      onLoadData = async() => {
        //Busca a pessoa atual
        const response = await axios.get('http://localhost:3001/pessoa' + window.location.pathname);
        this.setState({pessoa: response['data']})
        // Busca os cursos que a pessoa atual está matriculado
        const matriculas = await axios.get('http://localhost:3001/matricula/' + response['data']['id']);
        this.setState({ matriculas: matriculas['data'] });
      }
    
      // Referencia os campos do FORM
      handleChange(event){
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
      }
  
      // Envia dados do FORM para atualizar registro de Pessoa
      async handleSubmit(event) {
        event.preventDefault();
  
        //Remove máscara para salvar no banco
        let telefoneOnly = this.state.pessoa['telefone'].replace(/[ ~!@#$%^&*()_|+\-=?;:'",.<>{}[\]/]/gi, '')
        let cpfOnly = this.state.pessoa['cpf'].replace(/[ ~!@#$%^&*()_|+\-=?;:'",.<>{}[\]/]/gi, '')
  
        const data = {
          nome: this.state.pessoa['nome'],
          telefone: telefoneOnly,
          cpf: cpfOnly,
          id: this.state.pessoa['id']
        }
        await axios.put('http://localhost:3001/pessoa/', data);
        window.location = 'http://localhost:3000/pessoas';
      }

      removeMatricula = async(id) =>{
          await axios.delete('http://localhost:3001/matricula/' + id);
          window.location = window.location.href;
      }

    render(){
        return(
            <div className='h-100 d-flex flex-column bg-primary'>
                <Header />
                <div className='h-100 d-flex justify-content-center align-items-center flex-column'>
                    <div className='container p-2 bg-white rounded-top border'>
                    <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <div className='m-2'>
                                    <span>Nome:</span>
                                    <input type="text" className="form-control" placeholder="Nome" id="nome" name='nome' onChange={this.handleChange} defaultValue={this.state.pessoa['nome']}></input>
                                </div>
                            </div>
                            <div className="form-group d-flex">
                                <div className='m-2 w-50'>
                                    <span className='m-auto'>Telefone:</span>
                                    <MaskedInput className="form-control" placeholder="Telefone" id="telefone" name='telefone' onChange={this.handleChange} mask={['(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} defaultValue={this.state.pessoa['telefone']}></MaskedInput>
                                </div>
                                <div className='m-2 w-50'>
                                    <span className='m-auto'>CPF:</span>
                                    <MaskedInput className="form-control" placeholder="CPF" id="cpf" name='cpf' onChange={this.handleChange} mask={[/[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]} defaultValue={this.state.pessoa['cpf']}></MaskedInput>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <input type='submit' value='Salvar' className="btn btn-primary" placeholder="Salvar"/>
                            </div>
                        </form>
                    </div> 
                    <div className='mt-2 container p-2 bg-white border rounded-bottom'>
                        <h5 className='text-center'>Cursos</h5>
                        {this.state.matriculas.map( data => (
                            <div key={data.id} className='p-2 rounded border m-2 d-flex justify-content-between'>
                                <p className='m-0 pl-2 d-flex align-items-center font-weight-bold'>{data.curso.nomeCurso}</p>
                                <button onClick={() => this.state.funcDelete(data.curso.id)} id='button_mat' className='border-0 rounded p-2 text-white font-weight-bold bg-danger'>Remover</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}