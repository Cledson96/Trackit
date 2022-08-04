import Topo from "../topo/topo"
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { postHoje } from "../requisicao/requisicao";
import dayjs from "dayjs";
import './hoje.css'
import Footer from "../footer/footer";
import UserContext from '../usercontext/UserContext'

export default function Hoje() {
  
    let token = localStorage.getItem("token");
    const days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];
    const now = new Date();
    const dia = days[now.getDay()];
    const data = dayjs().format('DD/MM');
    const [habitos, sethabitos] = useState([]);
    const location = useLocation();
    const [tasks, setTasks] = useState([]);
   
    
    useEffect(() => {
        setTasks(location.state.autorize);
        
        postHoje(token).then((res) => {
            sethabitos(res.data)
        });
    }, []);
   
    return (
        habitos.length === 0 ?
            <UserContext.Provider value={{ tasks, setTasks }} >

                <Topo img={location.state.autorize.image} />
                <div className="fundo2">
                    <div className="date">
                        <h2>{dia},{data} </h2>
                        Nenhum hábito concluído ainda
                    </div>
                    <Footer />
                </div>

            </UserContext.Provider>

            :


            <UserContext.Provider>
                <Topo img={location.state.autorize.image} />

                <div className="fundo2">
                    "Fundooooo"
                </div>
            </UserContext.Provider>


    )
}