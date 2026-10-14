let genero = "";

function seleccionarGenero(generoSeleccionado) {
    genero = generoSeleccionado;
}

function recomendar() {

    let edad = Number(document.getElementById("edad").value);

    switch (genero) {

        case "Drama":

            if (edad < 13) {
                document.getElementById("resultado").innerHTML = "Te recomendamos Casablanca";
            }
            else if (edad >= 13 && edad <= 15) {
                document.getElementById("resultado").innerHTML = "Te recomendamos The Shawshank Redemption";
            }
            else {
                document.getElementById("resultado").innerHTML = "Te recomendamos Taxi Driver";
            }

            break;


        case "Comedia":

            if (edad < 13) {
                document.getElementById("resultado").innerHTML = "Te recomendamos Back to the Future";
            }
            else if (edad >= 13 && edad <= 15) {
                document.getElementById("resultado").innerHTML = "Te recomendamos The Truman Show";
            }
            else {
                document.getElementById("resultado").innerHTML = "Te recomendamos The Wolf of Wall Street";
            }

            break;


        case "Musical":

            if (edad < 13) {
                document.getElementById("resultado").innerHTML = "Te recomendamos La La Land";
            }
            else if (edad >= 13 && edad <= 15) {
                document.getElementById("resultado").innerHTML = "Te recomendamos Les Misérables";
            }
            else {
                document.getElementById("resultado").innerHTML = "Te recomendamos The Rocky Horror Picture Show";
            }

            break;


        case "Crimen":

            if (edad < 13) {
                document.getElementById("resultado").innerHTML = "No hay opciones para esta edad";
            }
            else if (edad >= 13 && edad <= 15) {
                document.getElementById("resultado").innerHTML = "Te recomendamos El Secreto de sus Ojos";
            }
            else {
                document.getElementById("resultado").innerHTML = "Te recomendamos The Godfather";
            }

            break;


        default:

            document.getElementById("resultado").innerHTML = "Seleccione un género";
    }
}