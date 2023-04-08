/**
 * TIC TAC TOE
 */
/*
1- meter css a casillas** HECHO

3.- meter opciones:
    3.1. si hay ganador:
        a) no poner más fichas--->  set content remove attribute HECHO EN UN BUCLE NO EN FUNCIÓN
        b) contador de puntuación por equipo--> contenido +1 HECHO pero no se pone el resultado, solo en consola, faltan estilos.
        c) reinicio tablero para volver a jugar--> HECHO (no deja poner contenido ??)
        d) mostrar color linea ganadora
    3.12: CAMBIAR FUNCION GANAR PA Q SEA GENERAL **HECHO
    3.2. contador de tiempo, para cambiar turno si agoto tiempo
    4. COMENTARIOS EN CABECERA FUNCIONES
    @param 
    @return
    5. declarar variables arriba o cambiarlas
    6. no errores en consola.
    7. estilos 
    8. GitHub
    **hecho al final de cada 
 */

/**
 * [3, 4, 5]
 * [0, 3, 6]
 * [1, 4, 7]
 * [2, 5, 8]
 * [0, 4, 8]
 * [2, 4, 6]
 */
let main = document.getElementsByTagName('main')[0];
main.setAttribute('class', 'main');
let contenedor = document.getElementsByTagName('div')[1];
let tablero = document.getElementsByClassName('casilla');
let turno = true;
let puntos  = document.createElement('div');//mete los puntos
let puntosx = document.createElement('div');
let puntos0 = document.createElement('div');
let combinacionGanadora = [
    [3, 4, 5],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let temporizador = document.createElement('div');
let button = document.createElement('button');
let contenedor1 = document.getElementById('contenedor1'); //contiene los puntos y temporizador
let contx=0;
let cont0=0;
let contT=5;
let idT;
temporizador.textContent = "Tiempo: 5";
temporizador.style.color = "white";
temporizador.setAttribute('id','tiempo');
puntos.setAttribute('id', 'puntos');
puntosx.setAttribute('class','puntosx');
puntos0.setAttribute('class','puntos0');
puntosx.textContent="Puntos X: ";
puntos0.textContent= "Puntos 0:";
//puntos0.textContent= "Puntos 0: 0";
contenedor1.appendChild(temporizador);
console.log(tablero.length);
console.log(combinacionGanadora.length);

function pintaConsola(numero){ 
    let x0= tablero[numero];

    clearInterval(idT);
    contT=5;
    //meto aquí el temporizador porque se inicia cuando hago click 
    idT=setInterval(cambioTurno, 1000);

    if(turno){
        x0.textContent = 'X';
        x0.style.color= 'rgb(255, 32, 188)';
        x0.style.fontFamily = 'system-ui';
        GANAR();
       // x0.style.backgroundColor = "white";
    }else{
        x0.textContent = '0';
        x0.style.textAlign = 'center';
        x0.style.color  = 'rgb(73, 32, 255)';
        x0.style.fontFamily = 'system-ui';
    
        GANAR();
       
    }
   turno = !turno;
    
}

button.textContent = 'Reiniciar partida';
button.setAttribute('class','boton');
/*Addeventlistener:
importante usar CLICK NO ONCLICK
función sin comas
.*/
//USO pintaconsola, la cual usa ganar, la cual usa contadorPuntos
for(let i=0; i<tablero.length; i++){
    tablero[i].setAttribute('onclick',`pintaConsola(${i})`);
    button.addEventListener('click',reinicio);
} 
contenedor.appendChild(button);
//contador = setTimeout(cambioTurno(), 10000);

function reinicio(){
    //No reinicio como tal
    for(let i=0; i<tablero.length; i++){
        tablero[i].style.backgroundColor = "black";
        tablero[i].textContent =' ';
        tablero[i].setAttribute('onclick',`pintaConsola(${i})`);
    }
    clearInterval(idT);
}

function GANAR(){
    let actualx = [];
    let actual0= [];
    // Recorrer las casillas para ver su contenido
    for (let i = 0; i < tablero.length; i++){
        if(tablero[i].innerHTML == 'X'){
            actualx.push(i);
        } else if(tablero[i].innerHTML == '0'){
            actual0.push(i);
        }
    }
    
    for(let i = 0; i < combinacionGanadora.length ; i++){
        if(actualx.includes(combinacionGanadora[i][0]) && actualx.includes(combinacionGanadora[i][1]) && actualx.includes(combinacionGanadora[i][2])){
            contx++;
            console.log(contx);
            tablero[combinacionGanadora[i][0]].style.backgroundColor = "#57ff20";
            tablero[combinacionGanadora[i][1]].style.backgroundColor = "#57ff20";
            tablero[combinacionGanadora[i][2]].style.backgroundColor = "#57ff20";
            for(j= 0; j<tablero.length; j++){
                tablero[j].removeAttribute('onclick');
                //para que no deje interactuar con las casillas
            }
            clearInterval(idT);

        }else if(actual0.includes(combinacionGanadora[i][0]) && actual0.includes(combinacionGanadora[i][1]) && actual0.includes(combinacionGanadora[i][2])){
             cont0++;
             console.log(cont0);
            tablero[combinacionGanadora[i][0]].style.backgroundColor = "#57ff20";
            tablero[combinacionGanadora[i][1]].style.backgroundColor = "#57ff20";
            tablero[combinacionGanadora[i][2]].style.backgroundColor = "#57ff20";
            for(j= 0; j<tablero.length; j++){
                tablero[j].removeAttribute('onclick');
                //para que no deje interactuar con las casillas
            }
            //para que no siga cuando se gana
            clearInterval(idT);
        }
    }
    for(j= 0; j<tablero.length; j++){
        if((tablero[j].innerHTML=='X') || (tablero[j].innerHTML=='0')){
            tablero[j].removeAttribute('onclick');
           //para que no deje interactuar con las casillas
        }
    }
    contadorPuntos(contx, cont0);
    puntos.appendChild(puntosx);
    puntos.appendChild(puntos0);
}
puntos.appendChild(puntosx);
puntos.appendChild(puntos0);
contenedor1.appendChild(puntos);
/*
@param contx, cont0
 */
function contadorPuntos(){
    //let main = document.getElementsByClassName(main);
   puntosx.textContent = 'Puntos X:'+ contx;
   puntos0.textContent = 'Puntos 0:'+ cont0;
   console.log(puntosx);
   console.log(puntos0);
   //si añade puntos pero el textcontent no se aplica

};
function cambioTurno(){
    contT--;
    if(contT<0){
        contT=5;
        turno=!turno;
   } 
   temporizador.textContent = "Tiempo: "+ contT;
   console.log(contT);
    // set intervale, función, entero en ms
 }
