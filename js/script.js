let acordeon = document.getElementsByClassName('boton-acordeon');
for (let i = 0; i < acordeon.length; i++) {
    acordeon[i].addEventListener('click', (event) => {
        let x = event.currentTarget;
        x.classList.add('active');
        let y = x.nextElementSibling;
        if (y.style.display == 'block') {
        y.style.display = 'none';
        } else {
        y.style.display = 'block';
        }
    });
}