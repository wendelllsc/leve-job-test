import React from 'react';
import axios from 'axios';
import Header from '../Components/Header/Header';

export default class CursosListagem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cursos: []
        }
    }

    componentDidMount(){
        this.onload();
    }

    onload = async() =>{
        const data = await axios.get('http://localhost:3001/cursos');
        console.log(data['data']);
        this.setState({ cursos: data['data'] });
    }

    render(){
        return(
            <div className='h-100 d-flex flex-column bg-primary'>
                <Header />
                <div className='container p-2 d-flex flex-column align-items-center'>
                    {this.state.cursos.map( data => (
                        <div key={data.id} className='mb-2 bg-white w-100 p-3 border rounded d-flex justify-content-center'>
                            <div className='p-2'>
                                <span className='m-2 text-center'>Curso:</span>
                                <strong className='m-2 text-center'>{data.nomeCurso}</strong>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}