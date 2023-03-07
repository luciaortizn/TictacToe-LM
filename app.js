
let contenido = {
    mesa1: {
        capacidad : 5 
    },
    mesa2: {
        capacidad : 8
    },
    mesa3: {
        capacidad : 6 
    },
    mesa4: {
        capacidad : 4 
    },             
    mesa5: { 
        capacidad : 2 
    },
    mesa6: { 
        capacidad : 1 
    }, 
    mesa7: { 
        capacidad : 4 
    }, 
    mesa8: { 
        capacidad : 2
     },
    mesa9: {  
        capacidad : 1 
    },
}





let casillas = document.getElementsByClassName('casilla');
let contador = 0;
for(mesa in contenido){
    console.log(contenido[mesa]['capacidad']);
     // Paso 3. Realizar el innerHTML de cada capacidad   
    casillas[contador].innerHTML = contenido[mesa]['capacidad'];
    contador++;
}

/*
TIK TAK TOE
 */
let jugador1= "X";
let jugador2= "O";

/* 
let tablero = [
    [,,],
    [,,],
    [,,]
];*/
let tablero  = document.getElementsByClassName('casilla');
/*  [3,4,5]
    [0,3,6]
    [1,4,7]
    [2,5,8]
    [0,4,6]
    [2,4,6]
*/
let combinacionGanadora = [
    [3,4,5],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,6],
    [2,4,6]
];
function GANAR_X(){
    let actual = [];
//recorrer las posiciones del tablero-> comparar array correcto 
//recorrer las casillas para ver su contenido
for(let i=0; i<tablero.length; i++){
    if(tablero[i].innerHTML = 'X'){
        //push mete valor dentro del array
        //->El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
        actual.push(i);
    }
}
//Utilizar Array.include para comprobar si una de las combis correctas están
//incluidas en mi array actual
 for (let i = 0; i<combinacionGanadora.length; i++){
    if(actual.includes(combinacionGanadora[i][0])&& actual.includes(combinacionGanadora[i][1])&& actual.includes(combinacionGanadora[i][2])){
        alert("Ganan las X");
    }

 }
}

function GANAR_O(){
    for (let i = 0; i<combinacionGanadora.length; i++){
        if(actual.includes(combinacionGanadora[i][0])&& actual.includes(combinacionGanadora[i][1])&& actual.includes(combinacionGanadora[i][2])){
            alert("Ganan las O");
        }
    
    }
}
/*la función ponerFicha pide al usuario una pos para insertar la ficha
si pos vacía se vuelve a preg */
function ponerFicha(){
    //utilizamos el prompt para recoger la casilla de usuario
    let c = prompt('Dime una casilla donde colocar la ficha');
    if (tablero[c].innerHTML==''){
        tablero[c].innerHTML = 'X';
        GANAR_X();
    }else{
        alert('Esta casilla está ocupada');
        ponerFicha();
    }
}
ponerFicha();