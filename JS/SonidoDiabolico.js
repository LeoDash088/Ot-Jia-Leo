const boton = document.getElementById('JS_boton');
const audio = document.getElementById('miSonido');

JS_boton.addEventListener('click', () => {
    audio.play();
    console.log("Reproduciendo...")
});