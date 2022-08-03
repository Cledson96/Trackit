import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./cadastro/cadastro";
import Login from "./login/login";



export default function App () {
    return (
      <>
            <BrowserRouter>
            
                <Routes>

                    <Route path='/' element={<Login  />} />
                    <Route path='/cadastro' element={<Cadastro  />} />
                   
                </Routes>

            </BrowserRouter>
        </>
    )
}
