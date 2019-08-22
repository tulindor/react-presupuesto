import React, {Fragment} from 'react';
import Gasto from './Gasto';

function Listado ({gastos}){
    return(
        <Fragment>
              <p className="text-white lead text-center mt-4">Tus Gastos</p>
              {gastos.map(gasto =>(
                 <Gasto
                    gasto={gasto}
                    key={gasto.id}
                 />
               ))}
        </Fragment>
    );
}

export default Listado;