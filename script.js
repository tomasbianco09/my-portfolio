const flecha = document.querySelector('.home-arrow a');
if (flecha) {
    flecha.addEventListener('click', function (e) {
        e.preventDefault();

        const destino = document.querySelector('#about');

        if (destino) {
            window.scrollTo({
                top: destino.offsetTop - 80, // El 80 es para que tu Nav no tape el título
                behavior: "smooth"
            });
        }

        console.log("asdsa")

    })
}