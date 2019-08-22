import React from 'react';

const Gasto = ({gasto}) => {


return(

<div className=" mb-4 shadow">
    <div className="row">
        <div className="col-2 text-white ">
            <div className="bg-amarillo p-3">
                ${gasto.cantidadGasto}
            </div>
        </div>
        <div className="col-10">
            <div className="text-white p-3">
                {gasto.nombreGasto}
            </div>
             
        </div>
        
    </div>
  

</div>

);
}

export default Gasto;