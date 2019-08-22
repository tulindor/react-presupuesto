import React, {useState, useEffect, Fragment} from 'react';
import Pregunta from './componentes/Pregunta';
import Formulario from './componentes/Formulario';
import Listado from './componentes/Listado';
import ControlPresupuesto from './componentes/ControlPresupuesto';


function App() {

  //state
  //presupuesto total
  const [presupuesto, guardarPresupuesto] = useState(0);
  //presupuesto restante
  const [restante, guardarRestante] = useState(0);
  const [preguntaPresupuesto, guardarPreguntaPresu] = useState(true);
  //creo este state, para iniciar el listado siempre y cuando se cree un gasto
  //eso lo envio al formulario para validarlo
  const [crearGasto, guardarCrearGasto] = useState(false);
  //este se envia al formulario para traer datos
  const [gasto, guardarGasto] = useState({});
  //se guardan los gastos a un array general
  const [gastos, guardarGastos] = useState([]);

  useEffect(()=>{
    //valido si crear gasto es true
    if (crearGasto){
      const listadoGastos = [...gastos, gasto];
      guardarGastos(listadoGastos);
      //una vez que se agrega se pone como false
      //restar presupesto
      const presupuestoRestante = restante - gasto.cantidadGasto;
      guardarRestante(presupuestoRestante);

      guardarCrearGasto(false);
    }
    
  }, [crearGasto, gastos, gasto, restante]); 
  //se pasa en la dependecia para que el effect sepa que tiene que esperar para ejecutarse

  return (
    <div className="App container py-5">
      <h1 className="text-amarillo display-4 text-center">Gasto Semanal</h1>
      <div className="p-4 border border-dark shadow my-4">
        
        {(preguntaPresupuesto) ?
          <Pregunta
            guardarPresupuesto={guardarPresupuesto}
            guardarPreguntaPresu={guardarPreguntaPresu}
            guardarRestante={guardarRestante}
          />
        : (
          <Fragment>
            <Formulario
              guardarGasto={guardarGasto}
              guardarCrearGasto={guardarCrearGasto}
            />
            <Listado 
              gastos={gastos}
            />
            
            <ControlPresupuesto
                presupuesto={presupuesto}
                restante={restante}
            />
          </Fragment>  
        )
        }
      </div>
      
    </div>
  );
}

export default App;
