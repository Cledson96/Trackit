import './login.css'
import logo from '../../img/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { postLogin } from '../requisicao/requisicao'
import { useState } from 'react';



import imgcarregando from '../../img/carregando.gif'

export default function Login() {

    const [login, setlogin] = useState({});
    const [carregando, setcarregando] = useState([]);
    const navigate = useNavigate();


    function handleForm({ value, name }) {
        setlogin({
            ...login,
            [name]: value,
        });
    };

    function verificar() {
        setcarregando(["referencia"])
        let resposta = postLogin(login);
        resposta.then((ref) => {
            const autorize = ref.data;
            localStorage.setItem("token", ref.data.token);
            navigate('/hoje', {
                state: {
                    autorize
                },
            })
        })
        resposta.catch(() => { setcarregando([]); alert("Não foi possivel realizar o login,verifique seus dados e tente novamente!") })

    };



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
                <button onClick={verificar} className='confirmar'>Entrar</button>
                <Link className='link' to={'/cadastro'}>Não tem uma conta? Cadastre-se!</Link>
            </div>

            :
            <div className="fundo">
                <img alt="track" src={logo} />
                <input className='desativado' disabled="true" type="email" placeholder='email'></input>
                <input className='desativado' disabled="true" type="password" placeholder='senha'></input>
                <button className='confirmar opaco'><img alt='' src={imgcarregando} /></button>
                <Link className='link' to={'/cadastro'}>Não tem uma conta? Cadastre-se!</Link>
            </div>
    )
}