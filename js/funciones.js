function builder(elementos, offsetAltura, claseCss) {
    return function() {
        //detecta cuanto es la altura
        let scrollTop = document.documentElement.scrollTop
        for (let i = 0; i < elementos.length; i++) {
            //detecta cuanto voy bajando
            let totalAltura = elementos[i].offsetTop
            if (totalAltura - offsetAltura < scrollTop) {
                elementos[i].style.opacity = 1
                elementos[i].classList.add(claseCss)
            }
        }
    }
}


let mostrar = document.querySelectorAll(".aparece")

window.addEventListener("scroll", builder(mostrar, 300, "apareceTop"))

let aparece = document.querySelector("#aparece")

window.addEventListener("scroll", builder([aparece], 475, "apareceLeft"))

let animacion3D = document.querySelectorAll(".animacion3D")

window.addEventListener("scroll", builder(animacion3D, 450, "apareceBot"))

//desplazamiento suave   
$('a[href*="#"]')
    // Elimina los enlaces 
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // enlaces en la página
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // encuentra el elemento al que se desplace
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Existe un objetivo de desplazamiento?
            if (target.length) {
                // Solo evite el valor predeterminado si la animación realmente va a suceder
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Devolución de llamada después de la animación
                    // Debe cambiar el enfoque
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Comprobando si el objetivo estaba enfocado
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus(); // Establecer el enfoque de nuevo
                    };
                });
            }
        }
    });



/* buscador de cursos */