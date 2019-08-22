import React, {Fragment, useState} from 'react';
import Error from './Error';
import shortid from 'shortid';


function Formulario (props){

    const {guardarGasto, guardarCrearGasto} = props;

    //state
    const[nombreGasto, guardarNombreGasto] = useState('');
    const [cantidadGasto, guardarCantidadGasto] = useState('');
    const [error, guardarError] = useState(false);

    //agrego el gasto on sumbit
    const agregarGasto = e => {
        e.preventDefault();

        //validar datos del form
        if(cantidadGasto <= 1 || isNaN(cantidadGasto) || nombreGasto === '' ){
            guardarError(true);
            return;
        }

        //construir objeto de gasto
        const gasto = {
            nombreGasto,
            cantidadGasto,
            id: shortid.generate()

        }

        //enviarlo al componente principal
        guardarGasto(gasto);
        //valido que se creo un gasto
        guardarCrearGasto(true);

        //eliminar error
        guardarError(false);

        //resetear el form
        guardarNombreGasto('');
        guardarCantidadGasto('');

    }

    return(
        <Fragment>
        <p className="text-white lead text-center">Ingresá tus Gastos</p>
        <form
            onSubmit={agregarGasto}
        
        >
            {error ? <Error mensaje='Ambos campos son obligatorios'/> : null}
            <input 
                type="text"
                className="form-control bg-transparent border-dark mb-3 bg-oscuro rounded-0"
                placeholder="Ej. Transporte"
                onChange={e => guardarNombreGasto (e.target.value)}
                value={nombreGasto}
            />
            <input 
                type="number"
                className="form-control bg-transparent border-dark mb-3 bg-oscuro rounded-0"
                placeholder="200"
                onChange={e => guardarCantidadGasto(parseInt(e.target.value, 10))}
                value={cantidadGasto}
            />
            <input 
                type="submit"
                className="btn btn-success btn-block rounded-0"
                value="AGREGAR"
            />
        </form>
        </Fragment>
    );

}

export default Formulario;