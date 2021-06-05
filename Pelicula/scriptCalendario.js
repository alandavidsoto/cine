
const mesesDias = {
    "ENERO":31,
    "FEBRERO":28,
    "MARZO":31,
    "ABRIL":30,
    "MAYO":31,
    "JUNIO":30,
    "JULIO":31,
    "AGOSTO":31,
    "SEPTIEMBRE":30,
    "OCTUBRE":31,
    "NOVIEMBRE":30,
    "DICIEMBRE":31
}
let añoInicial = 2021;

const dateMeses = ["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"]


const mes = document.querySelector(".mes");
const año = document.querySelector(".año");
const retroceder = document.querySelector(".retroceder")
const avanzar = document.querySelector(".avanzar")

const diaNumero = document.getElementsByClassName("dias-numeros");//pensado

var indiceMes // vamos a utilizarlo para buscar el indice de un mes en el array "dateMeses"
var mesIndexOf; // lo vamos a utilizar como elemento para realizar el metodo IndexOf (linea 50 aprox)
var dia;
export var data; //  lo vamos a usar para enviar datos a otro modulo;
var numeroDias;
var diaActiveIndex; //indice del elemento que va a atener activado la clase dia-active. lo manipularemos

document.addEventListener("DOMContentLoaded",()=>{
    let fecha = new Date();
    numeroDias = fecha.getDate();
    dia = fecha.getDay();
    indiceMes = fecha.getMonth();
    mesIndexOf = dateMeses[indiceMes]
    if (indiceMes == 0){
        crear_last_days(indiceMes,mesesDias[dateMeses[11]])
    } else {
        crear_last_days(indiceMes,mesesDias[dateMeses[indiceMes-1]])
    }
    
    crearDias(mesesDias[mesIndexOf])

})

avanzar.addEventListener("click",()=>{
    let mesAnterior = dateMeses[indiceMes];
    let indice = indiceMes+1
    if(indice <= 11) {
        var mesSiguiente = dateMeses[indice]
    } else {
        indice = 0
        var mesSiguiente = dateMeses[indice]
        añoInicial++;
        año.textContent = añoInicial;
    }
    indiceMes = indice
    mes.textContent = dateMeses[indiceMes]
    const padreElement = document.querySelector(".dias")
    padreElement.innerHTML = ``

    crear_last_days(indiceMes,mesesDias[mesAnterior])
    crearDias(mesesDias[mesSiguiente])
})

retroceder.addEventListener("click",()=>{
    let indice = indiceMes-1
    if(indice > 0) {
        var mesSiguiente = dateMeses[indice]
    } else {
        indice = 11
        var mesSiguiente = dateMeses[indice]
        añoInicial--;
        año.textContent = añoInicial;
    }
    indiceMes = indice
    let mesAnterior = dateMeses[indiceMes-1];
    mes.textContent = dateMeses[indiceMes]
    const padreElement = document.querySelector(".dias")
    padreElement.innerHTML = ``

    crear_last_days(indiceMes,mesesDias[mesAnterior])
    crearDias(mesesDias[mesSiguiente])
})




const crearDias = (valor) => {
    const padreElement = document.querySelector(".dias")
    

    let totalDias = valor;
    for (let dia = 1; dia <=totalDias; dia++) {
        
        padreElement.innerHTML += `<div class="dias-numeros">${dia}</div>`
        
    }
    for (let index = 0; index < padreElement.children.length; index++) {
        if (padreElement.children[index].textContent == numeroDias) {
            padreElement.children[index].classList.add("dia-active")
            diaActiveIndex = index
        }
        padreElement.children[index].addEventListener("click",()=>{
            padreElement.children[diaActiveIndex].classList.remove("dia-active")
            padreElement.children[index].classList.add("dia-active")
            data = {
                dia: parseInt(padreElement.children[index].textContent),
                mes: indiceMes,
                ano: String(añoInicial)
            }
            diaActiveIndex = index
            
        })
        
    }
}

function crear_last_days(mes1,mesanterior) {
    const padreElement = document.querySelector(".dias")
    let numeroDias = mesanterior; // 31 o 30
    let fecha = new Date(añoInicial,mes1,1);
    let dia = fecha.getDay(); // indice cuando comienza el 1 de cada mes
    if (dia == 0) {
        dia = 7;
    }
    numeroDias = numeroDias+-(dia-2)
     for (let index = 1; index <= dia-1 ; index++) {
        padreElement.innerHTML += `<div class="dias-numeros-anteriores">${numeroDias}</div>`;
        numeroDias++;
    }
    
    mes.textContent = dateMeses[indiceMes];
    año.textContent = añoInicial
}