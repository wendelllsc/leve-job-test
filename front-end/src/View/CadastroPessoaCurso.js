import React from 'react';
import axios from 'axios';
import Header from '../Components/Header/Header';
import MaskedInput from 'react-text-mask';

export default class CadastroPessoaCurso extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cursos: [],
            cpf: '',
            cursoSelecionado: 1
        }
        this.handleChange = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.loadCursos();
    }

    loadCursos = async() =>{
        const data = await axios.get('http://localhost:3001/cursos');
        this.setState({ cursos: data['data'] });
    }

    handleChange(event){
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
      }

    async handleSubmit(event){
        event.preventDefault();
    
        //Remove máscara para salvar no banco
        let removeMaskCPF = this.state.cpf.replace(/[ ~!@#$%^&*()_|+\-=?;:'",.<>{}[\]/]/gi, '')

        const data = {cpf: removeMaskCPF, id: this.state.cursoSelecionado}
        await axios.post('http://localhost:3001/matricula', data);
        window.location = 'http://localhost:3000/matricula';
    }

    render(){
        return(
            <div className='h-100 d-flex flex-column bg-primary'>
                <Header />
                <div className='container p-2 d-flex flex-column align-items-center'>
                    <form className='bg-white p-2 rounded border' onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <div className='m-2'>
                                <MaskedInput className="mt-1 form-control w300" placeholder="CPF" name='cpf' onChange={this.handleChange} mask={[/[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}></MaskedInput>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className='m-2'>
                                <select className='p-2 rounded border w300' name='cursoSelecionado' onChange={this.handleChange}>
                                    {this.state.cursos.map( data => (
                                        <option key={data.id} value={data.id}>{data.nomeCurso}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <button type='submit' className='p-2 bg-primary rounded border text-white'>Pronto</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}