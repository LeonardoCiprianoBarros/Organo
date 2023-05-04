import { useState } from 'react'
import Botao from '../Botao/Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensas from '../ListaSuspensa'
import './formulario.css'

const Formulario = (props) => {
    
    const [nome,setNome] = useState ('')
    const [cargo,setCargo] = useState ('')
    const [foto, setFoto] = useState ('')
    const [time, setTime] = useState ('')

   /*  const times = [
        'Selecione',
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ] */
    
    


    const HandleSubmit=(e)=>{
            if (cargo === '' || nome === '' || foto === '' || time === '' ) {
                alert('preencha todos os dados')
            } else {
                
                
                
                props.aoColaboradroCadastrado({
                    nome,
                    cargo,
                    foto,
                    time
                })
                setCargo ('')
                setFoto ('')
                setTime('')
                setNome('')
            }
                e.preventDefault();
            }




    return (
        <section className='formulario'>
            <form onSubmit={HandleSubmit}>
                 <h2>Preencha os dado para crirar o card do colaborador</h2>
                
                <CampoTexto 
                value = {nome}
                valorAlte = {valor =>setNome(valor)}
                type='text'
                label='Nome'
                placeholder="Digite seu nome" 
                />
                
                <CampoTexto 
                value = {cargo}
                valorAlte = {valor =>setCargo(valor)}
                type='text'
                label="Cargo"
                placeholder="Digite seu cargo" 
                />
                
                <CampoTexto 
                value = {foto} 
                valorAlte = {valor =>setFoto(valor)} 
                type='text' label="Imagem" 
                placeholder="Coloque uma foto" 
                />
                
                <ListaSuspensas
                 label="Time"
                 itens={props.nomeTimes}
                 value= {time}
                 valorAlt ={valor=>setTime(valor)}
                 

                 />
                
                <Botao  >Criar Card</Botao>
            </form>
        </section>
    )

}

export default Formulario 