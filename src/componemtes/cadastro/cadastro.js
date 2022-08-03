import '../login/login.css'
import logo from '../../img/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { postCadastro } from '../requisicao/requisicao'
import { useState } from 'react';

import imgcarregando from '../../img/carregando.gif'

export default function Cadastro() {
    const [cadastro, setcadastro] = useState({})
    const [carregando, setcarregando] = useState([])
    const navigate = useNavigate();

    function handleForm({ value, name }) {
        setcadastro({
            ...cadastro,
            [name]: value,
        });
    }
    function cadastrar() {
        setcarregando(["referencia"])
        let resposta = postCadastro(cadastro);
        resposta.then(() => navigate('/', {
            state: {
                cadastro
            },
        }))
        resposta.catch(() => {setcarregando([]);alert("Não foi possivel realizar o cadastro,verifique os campos cadastrais e tente novamente!")})

    }


    return (
        carregando.length === 0 ?
            <div className="fundo">

                <img alt="track" src={logo} />

                <input name="email" onChange={(e) => handleForm({ name: e.target.name, value: e.target.value, })}
                    type="email" placeholder='email'>
                </input>

                <input name="password" onChange={(e) => handleForm({ name: e.target.name, value: e.target.value, })}
                    type="password" placeholder='senha'>
                </input>

                <input name="name" onChange={(e) => handleForm({ name: e.target.name, value: e.target.value, })}
                    type="text" placeholder='nome'>
                </input>

                <input name="image" onChange={(e) => handleForm({ name: e.target.name, value: e.target.value, })}
                    type="url" placeholder='foto'>
                </input>

                <button onClick={cadastrar} className='confirmar'>Cadastrar</button>
                <Link className='link' to={'/'}>Já tem uma conta? Faça login!</Link>
            </div>
            :
            <div className="fundo">

                <img alt="track" src={logo} />

                <input className='desativado' disabled="true" name="email" onChange={(e) => handleForm({ name: e.target.name, value: e.target.value, })}
                    type="email" placeholder='email'>
                </input>

                <input className='desativado' disabled="true" name="password" onChange={(e) => handleForm({ name: e.target.name, value: e.target.value, })}
                    type="password" placeholder='senha'>
                </input>

                <input className='desativado' disabled="true" name="name" onChange={(e) => handleForm({ name: e.target.name, value: e.target.value, })}
                    type="text" placeholder='nome'>
                </input>

                <input className='desativado' disabled="true" name="image" onChange={(e) => handleForm({ name: e.target.name, value: e.target.value, })}
                    type="url" placeholder='foto'>
                </input>

                <button onClick={cadastrar} className='confirmar opaco'><img alt='' src={imgcarregando} /></button>

                <Link className='link' to={'/'}>Já tem uma conta? Faça login!</Link>
            </div>
    )
}
