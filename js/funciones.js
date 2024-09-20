document.getElementById('horos_signo').addEventListener('submit', function(event) {
    event.preventDefault();
    const anni = parseInt(document.getElementById('anno').value);
    const resto = anni % 12;
    let nombre = '';
    var imagen = document.getElementById('imagen');

    switch (resto) {
        case 0:
            nombre = 'Mono';
            imagen.src = './img/mono.jpeg';
            break;
        case 1:
            nombre = 'Gallo';
            imagen.src = './img/gallo.jpeg';
            break;
        case 2:
            nombre = 'Perro';
            imagen.src = './img/perro.jpeg';
            break;
        case 3:
            nombre = 'Cerdo';
            imagen.src = './img/cerdo.jpeg';
            break;
        case 4:
            nombre = 'Rata';
            imagen.src = './img/rata.jpeg';
            break;
        case 5:
            nombre = 'Buey';
            imagen.src = './img/buey.jpeg';
            break;
        case 6:
            nombre = 'Tigre';
            imagen.src = './img/tigre.jpeg';
            break;
        case 7:
            nombre = 'Conejo';
            imagen.src = './img/conejo.jpeg';
            break;
        case 8:
            nombre = 'Dragón';
            imagen.src = './img/dragon.jpeg';
            break;
        case 9:
            nombre = 'Serpiente';
            imagen.src = './img/serpiente.jpeg';
            break;
        case 10:
            nombre = 'Caballo';
            imagen.src = './img/caballo.jpeg';
            break;
        case 11:
            nombre = 'Cabra';
            imagen.src = './img/cabra.jpeg';
            break;
    }

    document.getElementById('resto').textContent = resto;
    document.getElementById('signo').textContent = nombre;
    document.getElementById('img_Signo').src = imagen;
    document.getElementById('img_Signo').alt = nombre;
});
