import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./cadastro/cadastro";
import Habitos from "./habitos/habitos";
import Hoje from "./hoje/hoje";
import Login from "./login/login";





export default function App () {
    return (
      <>
            <BrowserRouter>
            
                <Routes>

                    <Route path='/' element={<Login  />} />
                    <Route path='/cadastro' element={<Cadastro  />} />
                    <Route path='/hoje' element={<Hoje  />} />
                    <Route path='/habitos' element={<Habitos  />} />
                   
                </Routes>

            </BrowserRouter>
        </>
    )
}
