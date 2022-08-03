import '../login/login.css'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'
import { postCadastro } from '../requisicao/requisicao'
import { useState, useEffect } from 'react';

export default function Cadastro() {
    const [cadastro, setcadastro] = useState({})
    const [carregando,setcarregando] =useState([])

    function handleForm({ value, name }) {
               setcadastro({
            ...cadastro,
            [name]: value,
        });
    }
    function cadastrar (){
       setcarregando(["5"])
        postCadastro(cadastro).then((res)=>{
            console.log(res.data);
                });

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

        <input disabled="true" name="email" onChange={(e) => handleForm({ name: e.target.name, value: e.target.value, })}
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

        <button onClick={cadastrar} className='confirmar'>...</button>
        <Link className='link' to={'/'}>Já tem uma conta? Faça login!</Link>
    </div>


    )
}