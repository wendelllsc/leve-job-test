import React from 'react';
import Header from '../Components/Header/Header';
import Form from '../Components/Form/FormCadastroPessoa';

function Cadastro(){
    return(
        <div className='h-100 d-flex flex-column bg-primary'>
            <Header />
            <Form />
        </div>
    );
}
export default Cadastro;