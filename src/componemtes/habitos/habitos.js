import Footer from "../footer/footer"
import Topo from "../topo/topo"
import { useContext } from "react";
import UserContext from '../usercontext/UserContext'

export default function Habitos (){
    console.log(useContext(UserContext));
    
    const habitos = []
    return (
        habitos.length === 0 ?
            <>
                <Topo img={"laa"} />
                <div className="fundo2">
                    <div className="date">
                        <h2>aaa </h2>
                        Nenhum hábito concluído ainda
                    </div>
                    <Footer />
                </div>
            </>
            :
            <>
                <Topo img={"aa"} />

                <div className="fundo2">
                    "Fundooooo"
                </div>
            </>
    )
}