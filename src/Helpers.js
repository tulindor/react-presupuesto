//helpers para cambiar los estilos del presupuesto con JS

export const revisarPresupuesto = (presupuesto, restante) => {
    let clase;
    //comprueba el porcentaje total y cambia la clase
    if((presupuesto/4)> restante){
        //tiene menos del 25% total
        clase = 'bg-rojo text-center p-2 text-white';
    } else if ((presupuesto/2) > restante){
        //tiene menos de la mitad
        clase = 'bg-amarillo text-center p-2 text-white';
    } else{
        //esta OK
        clase = 'bg-verde text-center p-2 text-white';
    }
    return clase;
}