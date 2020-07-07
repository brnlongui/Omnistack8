import React from 'react';
import './Login.css';

import logo from "../assets/logo.png";

export default function Login(){
    return(
        <div className='login-container'>
            <form>
                <img src={logo} alt="Tindev"/>
                <input placeholder="Digite seu user do Git"/>
                <button type="submit">Enviar</button>
            </form>
        </div>
        
    );
}
