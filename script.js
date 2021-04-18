let colorinput = document.querySelector('#color');
let hex = document.querySelector('#HEX');

colorinput.addEventListener('input', () => {
    let color = colorinput.value;
    document.body.style.backgroundColor = color;
});