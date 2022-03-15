// Estado de la APP
let STATE = {
    currentWord: "", // Aquí debemos guardar el resultado de getNextWord()
    currentProgressWord: 0, // indica cual es la siguiente posición del "currentWord" a procesar

    // Si le pasas una letra, te dice si esa letra va justamente en la posición 'currentProgressWord'
    isCorrectLetter: function (inputLetter) {
        return this.currentWord[STATE.currentProgressWord] == inputLetter;
    },

    // Nos indica si hemos escrito ya toda la letra
    isWordFinished: function () {
        return this.currentProgressWord == this.currentWord.length;
    },

    // Obtener el trozo de la palabra que ya hemos escrito bien
    // subWordCorrect: function () {
    //     return this.currentWord.slice(this.currentProgressWord);
    // }
}

// Paso 1: al hacer click en el botón empezar, obtener la primera palabra a procesar. (console.log) Debemos también ocultar el botón de empezar y mostrar el contenedor con la palabra a escribir.


// Al hacer clic en EMPEZAR-->

// Requisito 1: Ocultar el botón "Empezar"


// Requisito 2: Mostrar el contenedor con id="next-word-card"

// Requisito 3: Actualizar STATE.currentWord con el valor que devuelve getNextWord()

// Requisito 4. Actualizar la propiedad .textContent de id="next-word" con el valor de STATE.currentWord

let button = document.querySelector("#start-game button");

button.addEventListener("click", function () {

    // button.style.display = "none";
    button.classList.add("w3-hide");

    document.querySelector("#next-word-card").classList.remove("w3-hide");

    // Actualizar el estado 
    STATE.currentWord = getNextWord();

    document.querySelector("#next-word").textContent = STATE.currentWord;

    // TODO: Poner el cronómetro en marcha Watch.startWatch();
})



// PASO 2: Escuchar el teclado

// Requisito 1: Añadir un listener para detectar las letras introducidas por el usuario (solo letras). Mostrar por console.log

document.body.addEventListener("keydown", function (event) {
    //console.log(event);

    let keyPressed = event.key;

    // Requisito 2: Cada vez que el usuario pulsa una tecla:
    // A. Ver si la tecla pulsada, es la que toca: STATE.isCorrectLetter(teclaPulsadaPorElUsuario). Si NO es la que toca, terminar la función inmediatamente

    if (!STATE.isCorrectLetter(keyPressed)) {
        return;
    }


    // B. Su ha escrito correctamente la letra que toca
    // 1. Actualizar +1 la variable STATE.currentProgressWord

    STATE.currentProgressWord++;



    // 3. Actualizar la UX. Os ayudará el método substring o slice. Podeis usar <span> para este cometido; partiendo la STATE.currentWord por el índice de currentProgressWord https://oscarm.tinytake.com/msc/NjYyMTUyOF8xOTE2NDI1NQ

    let correctSubWord = STATE.currentWord.slice(0, STATE.currentProgressWord);
    let wordToProcess = STATE.currentWord.slice(STATE.currentProgressWord);

    console.log("Escrito bien hasta el momento: " + correctSubWord);
    console.log("Me falta por escribir: " + wordToProcess);

    document.querySelector("#next-word").innerHTML = `<span style="color:green">${correctSubWord}</span>${wordToProcess}`;

    // Hemos terminado de procesar la palabra??
    if (STATE.isWordFinished()) {

        // TODO: En este punto ya podemos decir que hemos escrito la palabra completamente. Ejecutar let tiempo = Watch.stopWatch() para obtener los milisegundos que ha tardado la persona en escribir la palabra

        // TODO-BONUS: Crear una nueva <section> en el HTML para ir acumulando todas las marcas del usuario

        // 2. Comprobar si ya hemos terminado la palanbra con STATE.isWordFinished. Si ya hemos terminado, tenemos que obtener una nueva palabra, actualizar el estado, y mostrar la nueva palabra al usuario
        // A. Resetear la variable STATE.currentProgressWord


        STATE.currentProgressWord = 0;

        // B. Obtener una nueva palabra con getNextWord() y asignarla a STATE.currentWord;
        STATE.currentWord = getNextWord();

        // C. Actualiar document.querySelector("#next-word") con la nueva palabra
        document.querySelector("#next-word").textContent = STATE.currentWord;

        // TODO: Volver a poner el cronometro en marcha!!

    }


});










