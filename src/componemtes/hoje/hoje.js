import Topo from "../topo/topo"
import { useEffect, useState } from 'react';
import { getHoje, postDesfeito, postFeito } from "../requisicao/requisicao";
import dayjs from "dayjs";
import './hoje.css'
import Footer from "../footer/footer";
import nike from "../../img/nike.png"



export default function Hoje({ dados, valor, setvalor }) {

    let token = localStorage.getItem("token");
    const days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];
    const now = new Date();
    const dia = days[now.getDay()];
    const data = dayjs().format('DD/MM');
    const [habitos, sethabitos] = useState([]);
    const [atualiza, setatualiza] = useState([]);


    function confirma(id) {
        let resposta = postFeito(id, token)
        resposta.then((ref) => { setatualiza(ref)})
        resposta.catch(() => { alert("Não foi possivel completar sua requisição!") })
    }
    function desconfirma(id) {
        let resposta = postDesfeito(id, token)
        resposta.then((ref) => { setatualiza(ref) })
        resposta.catch(() => { alert("Não foi possivel completar sua requisição!") })
    }
    useEffect(() => {
        let contagem = 0;
        for (let i = 0; i < habitos.length; i++) {
            if (habitos[i].done === true) {
                contagem++
            }
            setvalor((contagem / habitos.length) * 100);
        }
    }, [habitos,setvalor]
    )
    useEffect(() => {
        let resposta = getHoje(token)
        resposta.then((res) => {
            sethabitos(res.data);
        });
        resposta.catch(() => alert("Tivemos um problema para recuperar seu habitos!!!"));
    }, [atualiza,token]);
 
    function zero(ref) {
        return (
            <div className="sequencia"><h4 className="sequencia" > Seu recorde:</h4> <h4 >{ref.highestSequence} {ref.highestSequence === 1 ? "dia" : "dias"} </h4></div>
        )
    }
    return (
        habitos.length === 0 ?
            <>

                <Topo img={dados.image} />
                <div className="fundo2">
                    <div className="date">
                        <h2>{dia},{data} </h2>
                        Nenhum hábito concluído ainda
                    </div>
                    <Footer valor={valor} />
                </div>

            </>
            :
            <>
                <Topo img={dados.image} />

                <div className="fundo2">
                    <div className="date">
                        <h2>{dia},{data} </h2>
                        {valor === 0 ? "Nenhum hábito concluído ainda" : <h6 className="text"> {valor.toFixed()}% dos hábitos concluidos</h6>}
                    </div>
                    {habitos.map((ref, index) => {
                        return (
                            <div key={index} className="habitosHoje">
                                <div className="info">
                                    <h5 className="Name">{ref.name}</h5>
                                    <div>
                                        <div className="sequencia"><h4 className="sequencia" >Sequência atual:</h4>  {ref.done === true ? <h4 className="verde">   {ref.currentSequence}{ref.currentSequence === 1 ? " dia" : "dias"}</h4> : <h4>  {ref.currentSequence} {ref.currentSequence === 1 ? "dia" : "dias"}</h4>}</div>
                                        {ref.currentSequence === 0 ? zero(ref) : <div className="sequencia"><h4 className="sequencia" > Seu recorde:</h4> {ref.currentSequence >= ref.highestSequence ? <h4 className="verde"> {ref.highestSequence} {ref.highestSequence === 1 ? "dia" : "dias"} </h4> : <h4 >{ref.highestSequence} {ref.highestSequence === 1 ? "dia" : "dias"} </h4>}</div>
                                        }
                                    </div>

                                </div>
                                {ref.done === false ? <div onClick={() => { confirma(ref.id) }} className="aconfirmar"> <img alt="" src={nike} /> </div> : <div onClick={() => { desconfirma(ref.id) }} className="confirmado"><img alt="" src={nike} /></div>}


                            </div>
                        )
                    })}

                </div>
                <Footer valor={valor} />
            </>

    )
}