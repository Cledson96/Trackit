import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./cadastro/cadastro";
import Habitos from "./habitos/habitos";
import Historico from "./historico/historico";
import Hoje from "./hoje/hoje";
import Login from "./login/login";




export default function App () {
    const [dados,setdados] = useState([])
    const [valor,setvalor] = useState(0)

    return (
      <>
            <BrowserRouter>
            
                <Routes>

                    <Route path='/' element={<Login setdados={setdados}/>} />
                    <Route path='/cadastro' element={<Cadastro  />} />
                    <Route path='/hoje' element={<Hoje dados = {dados} valor = {valor} setvalor={setvalor} />} />
                    <Route path='/habitos' element={<Habitos valor = {valor} dados = {dados}/>} />
                    <Route path='/historico' element={<Historico valor = {valor} dados = {dados}/>} />
                   
                </Routes>

            </BrowserRouter>
        </>
    )
}
