const displayKey = document.querySelector('.key h2');
const displayKeyCode = document.querySelector('.keyCode h2');
const keyCodeDiv = document.querySelector('.keyCode');

document.addEventListener('keydown', (e) => {
    displayKey.innerHTML = e.key;
    displayKeyCode.innerHTML = e.keyCode
    if (e.keyCode === 32) 
    displayKey.innerHTML = "space"

})

keyCodeDiv.addEventListener('click', (e) => {
    const textArea = document.createElement('textarea');
    textArea.setAttribute('readonly', '');
    textArea.style.position= 'absolute';
    textArea.value = keyCodeDiv.querySelector('h2').innerHTML;
    document.body.appendChild(textArea)
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    
})