// Efecto titulo nosotros 

const typed = new Typed('.typed', {
    strings: [
        'CodeTecno',
        'Nosotros'
    ],

    typeSpeed: 75, // Velocidad para poner la letra
    startDelay: 300, // Tiempo de retraso en iniciar la animacion miliseg
    backSpeed: 75, // Velocidad para borrar la letra 
    smartBackspace: true, //eliminar solamente las palabras que sean nuevas en una cadena de texto
    shuffle: false, // Alterar el orden en el que se escriben las palabras
    backDelay: 2000, // Tiempo de espera despues de que se termina de escribir una palabra
    loop: true, // Repetir el array de strings
    loopCount: Infinity, // Cantidad de veces a repetir
    showCursor: true, // Mostrar cursor palpitando
    cursorChar: '|',
    contentType: 'html',
})