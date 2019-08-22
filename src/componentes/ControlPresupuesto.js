import React, {Fragment} from 'react';
import {revisarPresupuesto} from '../Helpers';


const ControlPresupuesto = ({presupuesto, restante}) => (
    <Fragment>
        <div className="text-center p-2 bg-oscuro text-verde mt-4">
           Presupuesto total: ${presupuesto}
        </div>
        <div className={revisarPresupuesto(presupuesto, restante)}>
           Presupuesto Restante: ${restante}
        </div>
    </Fragment>
)

export default ControlPresupuesto;