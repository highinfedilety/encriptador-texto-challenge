const titleElement = document.getElementById('challenge-title');
const titles = ["CHALLENGE", "Encrypt your text!", "Decrypt your text and more!"];
let titleIndex = 0;

setInterval(() => {
    titleIndex = (titleIndex + 1) % titles.length;
    titleElement.textContent = titles[titleIndex];
}, 2000);

const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const copyBtn = document.getElementById('copy-btn');

encryptBtn.addEventListener('click', () => {
    const text = inputText.value;
    if (text) {
        outputText.textContent = btoa(text); // Simple base64 encoding as an example
        copyBtn.style.display = 'block'; // Muestra el botón de copiar
    } else {
        outputText.textContent = "No hay ningún texto, inserte un texto para probar el desencriptador / encriptador.";
        copyBtn.style.display = 'none'; // Oculta el botón de copiar
    }
});

decryptBtn.addEventListener('click', () => {
    const text = inputText.value;
    try {
        outputText.textContent = atob(text); // Simple base64 decoding as an example
        copyBtn.style.display = 'block'; // Muestra el botón de copiar
    } catch (e) {
        outputText.textContent = "Texto no válido para desencriptar.";
        copyBtn.style.display = 'none'; // Oculta el botón de copiar
    }
});

copyBtn.addEventListener('click', () => {
    const textToCopy = outputText.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Texto copiado al portapapeles.');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
});
