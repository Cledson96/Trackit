import './login.css'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'


export default function Login () {
        return (
        <div className="fundo">
            <img alt="track" src={logo} />
            <input type="email" placeholder='email'></input>
            <input type="password" placeholder='senha'></input>
            <button className='confirmar'>Entrar</button>
            <Link className='link' to={'/cadastro'}>Não tem uma conta? Cadastre-se!</Link>
        </div>

    )
}