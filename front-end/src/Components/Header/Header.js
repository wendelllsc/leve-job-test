import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className='d-flex bg-white p-2 w-100 header-size'>
            <Link className='d-flex align-items-center p-2 font-weight-bold mr-2 text-decoration-none' to='/pessoas'>Listagem de Pessoas</Link>
            <Link className='d-flex align-items-center p-2 font-weight-bold mr-2 text-decoration-none' to='/cadastro'>Cadastrar Pessoa</Link>
            <Link className='d-flex align-items-center p-2 font-weight-bold mr-2 text-decoration-none' to='/cursos'>Listagem de Cursos</Link>
            <Link className='d-flex align-items-center p-2 font-weight-bold mr-2 text-decoration-none' to='/matricula'>Realizar Matrícula</Link>
        </div>
    );
}
export default Header;