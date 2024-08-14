const textArea = document.querySelector('.text-area');
const messageCapture = document.querySelector('.message');

// Las "llaves" de encriptación que utilizaremos son las siguientes:
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Validar entrada para que solo contenga letras minúsculas y sin caracteres especiales
function isValidInput(input) {
    const regex = /^[a-z\s]*$/; // Solo letras minúsculas y espacios
    return regex.test(input);
}

// Funcion de Encriptacion
function encrypt(stringEncrypt) {
    if (!isValidInput(stringEncrypt)) {
        alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
        return "";
    }

    const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncrypt = stringEncrypt.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncrypt.includes(matrizCodigo[i][0])) {
            stringEncrypt = stringEncrypt.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncrypt;
}

// Boton de encriptar
function btnEncrypt() {
    const textEncrypt = encrypt(textArea.value);
    if (textEncrypt) {
        messageCapture.value = textEncrypt;
        textArea.value = '';
        messageCapture.style.backgroundImage = "none";
    }
}

// Funcion de desencriptacion
function decrypt(stringDecrypt) {
    if (!isValidInput(stringDecrypt)) {
        alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
        return "";
    }

    const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDecrypt = stringDecrypt.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDecrypt.includes(matrizCodigo[i][1])) {
            stringDecrypt = stringDecrypt.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDecrypt;
}

// Boton de desencriptar
function btnDecrypt() {
    const textDecrypt = decrypt(textArea.value);
    if (textDecrypt) {
        messageCapture.value = textDecrypt;
        textArea.value = '';
        messageCapture.style.backgroundImage = "none";
    }
}

// Funcion de copiar
function btnCopy() {
    messageCapture.select();
    document.execCommand("copy");
    alert("¡Texto copiado!");
}

// Funcion de limpiar
function btnClear() {
    textArea.value = '';
    messageCapture.value = '';
}

// Codigo para cambiar el titulo y añadir el efecto de maquina de escribir: header-title
const headerTitle = document.querySelector('.header-title');
const titles = ["Text Encryptor", "Encrypt your text!", "Decrypt your text!"];
let titleIndex = 0;
let charIndex = 0;
let currentTitle = '';
let isDeleting = false;

function typeEffect() {
    if (!isDeleting && charIndex < titles[titleIndex].length) {
        currentTitle += titles[titleIndex].charAt(charIndex);
        charIndex++;
        headerTitle.textContent = currentTitle;
        setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
        currentTitle = currentTitle.substring(0, charIndex - 1);
        charIndex--;
        headerTitle.textContent = currentTitle;
        setTimeout(typeEffect, 50);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            titleIndex = (titleIndex + 1) % titles.length;
        }
        setTimeout(typeEffect, 1000);
    }
}

typeEffect();
