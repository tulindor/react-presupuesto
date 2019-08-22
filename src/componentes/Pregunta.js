import React, {Fragment, useState} from 'react';
import Error from './Error';

function Pregunta(props){

    //destructuring de los props
    const {guardarPresupuesto,  guardarPreguntaPresu, guardarRestante} = props;

    //definir el state
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    //validar Presupuesto

    const agregarPresupuesto = (e) => {
        e.preventDefault();

        //validacion
        if(cantidad <= 1 || isNaN(cantidad) ){
            guardarError(true);
            return;
        }

        //pasa la validacion guardo el valor y cancelo los errores
        guardarError(false);
        //agregamos el presupuesto restante
        guardarRestante(cantidad);
        //agregamos el presupuesto
        guardarPresupuesto(cantidad);
        //se oculta la pregunta principal
        guardarPreguntaPresu(false);

        
    }

    return(

    <Fragment>
        <p className="text-white lead text-center">Ingresá tu Presupuesto</p>
        {error ? <Error mensaje='El presupuesto es incorrecto'/> : null}
        <form
            onSubmit={agregarPresupuesto}
        
        >
            <input 
                type="number"
                className="form-control bg-transparent border-dark mb-3 bg-oscuro rounded-0"
                placeholder="Agregar Presupuesto"
                //agrego el parse int para que sea numerico y cargo el valor en el hook
                onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
            />
            <input 
                type="submit"
                className="btn btn-success btn-block rounded-0"
                value="ACEPTAR"
            />
        </form>
    </Fragment>

    );

}

export default Pregunta;
