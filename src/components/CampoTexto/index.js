
import './CampoTexto.css'


const CampoTexto = (props)=>{
   
    const aoDigitar = (e) =>{
        props.valorAlte(e.target.value)
        
    }

    return (

        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.value} onChange={aoDigitar} type={props.type} placeholder={props.placeholder}/>
        </div>

    )
}

    export default CampoTexto;