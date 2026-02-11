const boton = document.getElementById('miBoton');
const audio = document.getElementById('miAudio');

boton.addEventListener('click', () => {
    audio.play();
});