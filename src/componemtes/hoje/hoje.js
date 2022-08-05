import Topo from "../topo/topo"
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getHoje } from "../requisicao/requisicao";
import dayjs from "dayjs";
import './hoje.css'
import Footer from "../footer/footer";


export default function Hoje({ setdados }) {

    let token = localStorage.getItem("token");
    const days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];
    const now = new Date();
    const dia = days[now.getDay()];
    const data = dayjs().format('DD/MM');
    const [habitos, sethabitos] = useState([]);
    const location = useLocation();

    setdados(location.state.autorize);



    useEffect(() => {

        getHoje(token).then((res) => {
            sethabitos(res.data)
        });
    }, [token]);

    return (
        habitos.length === 0 ?
            <>

                <Topo img={location.state.autorize.image} />
                <div className="fundo2">
                    <div className="date">
                        <h2>{dia},{data} </h2>
                        Nenhum hábito concluído ainda
                    </div>
                    <Footer />
                </div>

            </>

            :


            <>
                <Topo img={location.state.autorize.image} />

                <div className="fundo2">
                    "Fundooooo"
                </div>
            </>

    )
}