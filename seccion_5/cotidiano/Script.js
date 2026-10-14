let actividad = "";

function seleccionarActividad(actividadSeleccionada) {
    actividad = actividadSeleccionada;
}

function personas(cantidadSeleccionada) {
    personas = cantidadSeleccionada;
}
function limpiar(){
    location.reload();
}

function recomendar(){

    let presupuesto = Number(document.getElementById("presupuesto").value);


    switch(actividad) {
        case'Deportes':
         if (presupuesto < 8000){
            document.getElementById("resultado").innerHTML = "caminata recreativa";
         }
        else if (presupuesto >= 8001 && presupuesto <=15000){
            document.getElementById("resultado").innerHTML = "Alquiler de cancha";
         }
        else (presupuesto > 15000);{
            document.getElementById("resultado").innerHTML = "Actividad deportiva epecializada";
         }

         break;

         case'Entretenimiento':
         if (presupuesto < 8000){
            document.getElementById("resultado").innerHTML = "Actividad economica";
         }
        else if (presupuesto >= 8001 && presupuesto <=15000){
            document.getElementById("resultado").innerHTML = "Entrada al Cine";
         }
        else (presupuesto > 15000);{
            document.getElementById("resultado").innerHTML = "Concierto o Espectaculo";
         }

         break;

          case'Turismo':
         if (presupuesto < 8000){
            document.getElementById("resultado").innerHTML = "Visita parque publico";
         }
        else if (presupuesto >= 8001 && presupuesto <=15000){
            document.getElementById("resultado").innerHTML = "Tour Local";
         }
        else (presupuesto > 15000);{
            document.getElementById("resultado").innerHTML = "Excursion de dia completo";
         }

         break;

          case'Actividades Familiares':
         if (presupuesto < 8000){
            document.getElementById("resultado").innerHTML = "Picnic Familiar";
         }
        else if (presupuesto >= 8001 && presupuesto <=15000){
            document.getElementById("resultado").innerHTML = "Salida Recreativa";
         }
        else (presupuesto > 15000);{
            document.getElementById("resultado").innerHTML = "Parque tematico o actvidad especial";
         }

         break;

        
    }
}
function descuento(){

switch(personas){
case'personas':
         if (personas <= 4){
            document.getElementById("resultado").innerHTML = "0 %";
         }
        else if (personas >= 5 && personas <=8){
            document.getElementById("resultado").innerHTML = "10 %";
         }
        else (personas >= 9);{
            document.getElementById("resultado").innerHTML = "15 %";
         }

         break;
}

}
