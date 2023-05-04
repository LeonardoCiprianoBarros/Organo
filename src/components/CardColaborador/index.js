
import './Card.css'
import React from 'react'

const CardColaborador = ({nome, cargo, foto, corDeFundo }) => {
  return (
    <div className='colaborador' >
        <div className='cabecalho' style={{backgroundColor:corDeFundo}}>
            <img src= {foto} alt='perfil'/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>
  )
}

export default CardColaborador