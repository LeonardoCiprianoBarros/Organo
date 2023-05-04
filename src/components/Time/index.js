import CardColaborador from '../CardColaborador';
import './Time.css';


const Time = (props) => {
  const backgroundColor = {
    backgroundColor:props.corSecundaria
  }

  const colorPrimary ={
    color: props.corPrimaria
  }

  return (
    
    (props.colaboradores.length>0) &&
    <section className='time' style={backgroundColor}> 
        <h3 style={colorPrimary}>{props.nomeTime}</h3>
        <div className='Card'>
        {props.colaboradores.map(colaborador =>
        <CardColaborador 
        corDeFundo={props.corPrimaria}
        key={colaborador.nome}
        nome={colaborador.nome} 
        cargo={colaborador.cargo}
        foto={colaborador.foto}
        />)}
        </div>

    </section>
  )
};

export default Time;
