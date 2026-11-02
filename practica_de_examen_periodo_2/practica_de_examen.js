let tmp = [25 , 28 , 22 , 30 , 18 , 24 , 27 ];

function listarTemperaturas(){
                document.getElementById("lista").textContent = (tmp);
}

function calcularPromedio() {
    let suma = 0;
for (let numero of tmp){
    suma += numero
}
    let promedio = suma / tmp.length

    document.getElementById("promedio").innerHTML = promedio.toFixed(2)
}
function temperaturaMaxima(){
    let max = document.getElementById("maxima")
    let maximo = Math.max(...tmp)
    max.innerHTML = maximo
}
function hayDiasFrios(){
    for(let dias of tmp){
        if(dias < 24){
            document.getElementById("frios").innerHTML = "Hay Dias Frios"
        }
    }
}