import Footer from "../footer/footer"
import Topo from "../topo/topo"
import { getHabitos, postHabitos, deleteHabitos } from "../requisicao/requisicao"
import { useEffect, useState } from 'react';
import './habitos.css'
import lixeira from '../../img/lixeira.png'


export default function Habitos({ dados ,valor}) {
    let token = localStorage.getItem("token");
      const [habitos, sethabitos] = useState([]);
    const [add, setadd] = useState(false);
    const [novoHabito, setnovoHabito] = useState([]);
    const [dias, setdias] = useState([]);
    const [renderiza, setrenderiza] = useState(["ola"])

    function deletaHabitos(props) {
        if (window.confirm("Tem certeza que deseja excluis este hábito?")) {
            let resposta = deleteHabitos(props, token);
            resposta.then((res) => { console.log(res); setrenderiza(props) });
            resposta.catch(()=>alert("Tivemos um problema para deletar seu habito!!"));
        }

    }

    function atualiza() {
        setdias([...dias,])
    }

    useEffect(() => {
        let resposta = getHabitos(token)
        resposta.then((res) => {
            sethabitos(res.data)
            console.log(res.data)
        });
        resposta.catch(()=>alert("Tivemos um problema para atualizar seus habitos!!"))
    }, [token,renderiza]);

    function enviahabitos() {
        let body = { ...novoHabito, days: dias }
        let resposta = postHabitos(body, token)
        resposta.then(() => {
            setadd(false);
            setrenderiza(body);
            setdias([])
        });
        resposta.catch(()=>alert("Não foi possivel adicionar seu habito!!!"))

    };


    function handleForm({ value, name }) {
        setnovoHabito({
            ...novoHabito,
            [name]: value,
        });
    };


    return (
        habitos.length === 0 ?
            <>
                <Topo img={dados.image} />
                <div className="fundo2">
                    <div className="addHabitos">
                        <h2>Meus hábitos </h2>
                        <button onClick={() => setadd(true)} > + </button>

                    </div>
                    {
                        add === false ? "" :
                            <div className="cadastrohabitos">
                                <div>
                                    <input name="name" onChange={(e) => handleForm({ name: e.target.name, value: e.target.value, })}
                                        type="text" placeholder='nome do hábito'>
                                    </input>
                                    <div className="dias">
                                        {dias.findIndex(element => element === 0) === -1 ? <button onClick={() => { setdias([...dias, 0]) }} className="dia"> D </button> : <button onClick={() => { let novo = dias; novo.splice(novo.indexOf(0), 1); setdias(novo); atualiza() }} className="diaselecionado"> D </button>}
                                        {dias.findIndex(element => element === 1) === -1 ? <button onClick={() => { setdias([...dias, 1]) }} className="dia"> S </button> : <button onClick={() => { let novo = dias; novo.splice(novo.indexOf(1), 1); setdias(novo); atualiza() }} className="diaselecionado"> S </button>}
                                        {dias.findIndex(element => element === 2) === -1 ? <button onClick={() => { setdias([...dias, 2]) }} className="dia"> T </button> : <button onClick={() => { let novo = dias; novo.splice(novo.indexOf(2), 1); setdias(novo); atualiza() }} className="diaselecionado"> T </button>}
                                        {dias.findIndex(element => element === 3) === -1 ? <button onClick={() => { setdias([...dias, 3]) }} className="dia"> Q </button> : <button onClick={() => { let novo = dias; novo.splice(novo.indexOf(3), 1); setdias(novo); atualiza() }} className="diaselecionado"> Q </button>}
                                        {dias.findIndex(element => element === 4) === -1 ? <button onClick={() => { setdias([...dias, 4]) }} className="dia"> Q </button> : <button onClick={() => { let novo = dias; novo.splice(novo.indexOf(4), 1); setdias(novo); atualiza() }} className="diaselecionado"> Q </button>}
                                        {dias.findIndex(element => element === 5) === -1 ? <button onClick={() => { setdias([...dias, 5]) }} className="dia"> S </button> : <button onClick={() => { let novo = dias; novo.splice(novo.indexOf(5), 1); setdias(novo); atualiza() }} className="diaselecionado"> S </button>}
                                        {dias.findIndex(element => element === 6) === -1 ? <button onClick={() => { setdias([...dias, 6]) }} className="dia"> S </button> : <button onClick={() => { let novo = dias; novo.splice(novo.indexOf(6), 1); setdias(novo); atualiza() }} className="diaselecionado"> S </button>}
                                    </div>
                                </div>
                                <div className="confirma">
                                    <button className="cancelar" onClick={() => setadd(false)} >Cancelar</button>
                                    <button className="salvar" onClick={enviahabitos}>Salvar</button>
                                </div>

                            </div>
                    }
                    <div className="habitos">
                        <h3>
                            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                        </h3>
                    </div>
                    <Footer valor={valor} />
                </div>
            </>
            :
            <>
                <Topo img={dados.image} />

                <div className="fundo2">
                    <div className="addHabitos">
                        <h2>Meus hábitos </h2>
                        <button onClick={() => setadd(true)} > + </button>

                    </div>
                    {
                        add === false ? "" :
                            <div className="cadastrohabitos">
                                <div>
                                    <input name="name" onChange={(e) => handleForm({ name: e.target.name, value: e.target.value, })}
                                        type="text" placeholder='nome do hábito'>
                                    </input>
                                    <div className="dias">
                                        {dias.findIndex(element => element === 0) === -1 ? <button onClick={() => { setdias([...dias, 0]) }} className="dia"> D </button> : <button onClick={() => { let novo = dias; novo.splice(novo.indexOf(0), 1); setdias(novo); atualiza() }} className="diaselecionado"> D </button>}
                                        {dias.findIndex(element => element === 1) === -1 ? <button onClick={() => { setdias([...dias, 1]) }} className="dia"> S </button> : <button onClick={() => { let novo = dias; novo.splice(novo.indexOf(1), 1); setdias(novo); atualiza() }} className="diaselecionado"> S </button>}
                                        {dias.findIndex(element => element === 2) === -1 ? <button onClick={() => { setdias([...dias, 2]) }} className="dia"> T </button> : <button onClick={() => { let novo = dias; novo.splice(novo.indexOf(2), 1); setdias(novo); atualiza() }} className="diaselecionado"> T </button>}
                                        {dias.findIndex(element => element === 3) === -1 ? <button onClick={() => { setdias([...dias, 3]) }} className="dia"> Q </button> : <button onClick={() => { let novo = dias; novo.splice(novo.indexOf(3), 1); setdias(novo); atualiza() }} className="diaselecionado"> Q </button>}
                                        {dias.findIndex(element => element === 4) === -1 ? <button onClick={() => { setdias([...dias, 4]) }} className="dia"> Q </button> : <button onClick={() => { let novo = dias; novo.splice(novo.indexOf(4), 1); setdias(novo); atualiza() }} className="diaselecionado"> Q </button>}
                                        {dias.findIndex(element => element === 5) === -1 ? <button onClick={() => { setdias([...dias, 5]) }} className="dia"> S </button> : <button onClick={() => { let novo = dias; novo.splice(novo.indexOf(5), 1); setdias(novo); atualiza() }} className="diaselecionado"> S </button>}
                                        {dias.findIndex(element => element === 6) === -1 ? <button onClick={() => { setdias([...dias, 6]) }} className="dia"> S </button> : <button onClick={() => { let novo = dias; novo.splice(novo.indexOf(6), 1); setdias(novo); atualiza() }} className="diaselecionado"> S </button>}
                                    </div>
                                </div>
                                <div className="confirma">
                                    <button className="cancelar" onClick={() => setadd(false)} >Cancelar</button>
                                    <button className="salvar" onClick={enviahabitos}>Salvar</button>
                                </div>

                            </div>
                    }
                    {
                        habitos.map((ref) => {

                            return (
                                <div className="meushabitos">
                                    <img onClick={() => { deletaHabitos(ref.id) }} alt="" src={lixeira} />
                                    {ref.name}
                                    <div className="dias">
                                        {ref.days.findIndex(element => element === 0) === -1 ? <button className="dia"> D </button> : <button className="diaselecionado"> D </button>}
                                        {ref.days.findIndex(element => element === 1) === -1 ? <button className="dia"> S </button> : <button className="diaselecionado"> S </button>}
                                        {ref.days.findIndex(element => element === 2) === -1 ? <button className="dia"> T </button> : <button className="diaselecionado"> T </button>}
                                        {ref.days.findIndex(element => element === 3) === -1 ? <button className="dia"> Q </button> : <button className="diaselecionado"> Q </button>}
                                        {ref.days.findIndex(element => element === 4) === -1 ? <button className="dia"> Q </button> : <button className="diaselecionado"> Q </button>}
                                        {ref.days.findIndex(element => element === 5) === -1 ? <button className="dia"> S </button> : <button className="diaselecionado"> S </button>}
                                        {ref.days.findIndex(element => element === 6) === -1 ? <button className="dia"> S </button> : <button className="diaselecionado"> S </button>}
                                    </div>
                                </div>)
                        })
                    }
                    <Footer valor={valor} />
                </div>
            </>
    )
}