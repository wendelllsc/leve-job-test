import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Components/Header/Header';

export default class ListagemPessoa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pessoas: [],
            funDelete: this.deletePessoa,
            funEditar: this.editarPessoa
        };
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = async () => {
        const data = await axios.get('http://localhost:3001/pessoa');
        this.setState({ pessoas: data['data'] });
    }

    editarPessoa (elemento){
        const id_pessoa = elemento['id'];        
        window.location = '/editar/' + id_pessoa;
    }

    deletePessoa = async (elemento) => {
        const id_pessoa = elemento['id'];
        await axios.delete(`http://localhost:3001/pessoa/${id_pessoa}`);
        window.location = 'http://localhost:3000/pessoas';
    }

    render() {
        return (
            <div className='h-100 d-flex flex-column bg-primary'>
                <Header />
                <div className='container p-2 d-flex flex-column align-items-center'>
                    {this.state.pessoas.map(data => (
                        <div key={data.id} className='d-flex mb-2'>
                            <article className='cursor-pointer bg-white border rounded-left p-2 mr-2'>
                                <div className='d-flex justify-content-center'>
                                    <span className='m-2 text-center'>Nome:</span>
                                    <strong className='m-2 text-center'>{data.nome}</strong>
                                </div>
                                <div className='d-flex'>
                                    <div className='d-flex'>
                                        <span className='m-2 text-center'>Telefone:</span>
                                        <strong className='m-2 text-center'>{data.telefone}</strong>
                                    </div>
                                    <div className='d-flex'>
                                        <span className='m-2 text-center'>CPF:</span>
                                        <strong className='m-2 text-center'>{data.cpf}</strong>
                                    </div>
                                </div>
                            </article>
                            <div className='bg-white rounded-right border p-2 d-flex flex-column'>
                                <button className='bg-primary rounded p-2 border-0 text-white mb-2' onClick={() => this.state.funEditar(data)}>Editar</button>
                                <button className='bg-danger rounded p-2 border-0 text-white' onClick={() => this.state.funDelete(data)}>Remover</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}