import Topo from "../topo/topo";
import Footer from "../footer/footer";
import Calendar from 'react-calendar';
import React, { useState, useEffect } from 'react';
import './historico.css'
import { getHistorico } from "../requisicao/requisicao";


export default function Historico({ valor, dados }) {
    let token = localStorage.getItem("token");
    const [value, onChange] = useState(new Date());
    
    
    console.log({value})
  
    useEffect(() => {
       getHistorico(token);
       
    }, [token])

  
    return (
        <>
            <Topo img={dados.image} />
            <div className="fundo2">
                <h2>Histórico</h2>
                <Calendar  onChange={onChange} value={value} />
            </div>
            <Footer valor={valor} />
        </>
    )
}