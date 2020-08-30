import React from 'react';
import Header from '../Components/Header/Header';

function Home(){
    return(
        <div className='h-100 d-flex flex-column bg-secondary'>
            <Header />
            <div className='mt-3 container d-flex align-items-center justify-content-center flex-fill'>
                <img src='http://www.levetecnologia.com.br/img/logo.png' alt='Leve tecnologia'></img>
            </div>
        </div>
    );
}
export default Home;
