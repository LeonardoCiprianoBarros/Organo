import './ListaSuspensa.css'

const ListaSuspensas = (props) => {
  

  return (

    <div className="ListaSuspensa">
      <label>{props.label}</label>
      <select onChange= {e=> props.valorAlt(e.target.value)} value = {props.value}>
        <option >Selecione seu time</option>
       {props.itens.map(item=> <option key={item}>{item}</option>)}
      </select>
    </div>

  )
}

export default ListaSuspensas