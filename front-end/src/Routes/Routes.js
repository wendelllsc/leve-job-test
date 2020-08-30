import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Views
import Cadastro from '../View/Cadastro';
import Listagem from '../View/ListagemPessoas'
import Curso from '../View/CursosListagem';
import Editar from '../View/EditarPessoa';

function RouterManagement(){
    return(
        <Router>
            <Routes>
                <Route path='/cadastro' element={<Cadastro />}/>
                <Route path='/pessoas' element={<Listagem />}/>
                <Route path='/cursos' element={<Curso />} />
                <Route path='/editar/:id' element={<Editar />} />
            </Routes>
        </Router>
    );
}
export default RouterManagement;