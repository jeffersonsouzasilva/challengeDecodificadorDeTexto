function criptografar() {
    const textarea = document.querySelector('#containerInput_text');
    let texto = textarea.value;

    if (!texto.match(/^[a-z\s]*$/) || texto === "") {
        alert("Apenas letras minúsculas e sem acento são permitidas.");
        return;
    }

    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    mostrarResultado(textoCriptografado);
}

function descriptografar() {
    const textarea = document.querySelector('#containerInput_text');
    let textoCriptografado = textarea.value;

    if (!textoCriptografado.match(/^[a-z\s]*$/) || textoCriptografado === "") {
        alert("Apenas letras minúsculas e sem acento são permitidas.");
        return;
    }

    let textoOriginal = textoCriptografado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    mostrarResultado(textoOriginal);
}

function mostrarResultado(texto) {
    document.querySelector('#containerOutput_empty').classList.add('hidden');
    document.querySelector('#containerOutput_emptyImage').classList.add('hidden');
    document.querySelector('#containerOutput_emptyMessage').classList.add('hidden');
    document.querySelector('#containerOutput_emptyMessage_strong').classList.add('hidden');
    document.querySelector('#containerOutput_emptyMessage_text').classList.add('hidden');

    const outputControl = document.querySelector('#containerOutput_control');
    const result = document.querySelector('#containerOutput_controlResult');
    const copyButton = document.querySelector('#containerOutput_controlButton_copiar');

    result.textContent = texto;
    result.classList.remove('hidden');
    copyButton.classList.remove('hidden');
}


function copiar() {
    const result = document.querySelector('#containerOutput_controlResult');
    navigator.clipboard.writeText(result.textContent).then(() => {
    
        document.querySelector('#containerInput_text').value = '';
        result.textContent = '';
        result.classList.add('hidden');
        document.querySelector('#containerOutput_controlButton_copiar').classList.add('hidden');

        document.querySelector('#containerOutput_empty').classList.remove('hidden');
        document.querySelector('#containerOutput_emptyImage').classList.remove('hidden');
        document.querySelector('#containerOutput_emptyMessage').classList.remove('hidden');
        document.querySelector('#containerOutput_emptyMessage_strong').classList.remove('hidden');
        document.querySelector('#containerOutput_emptyMessage_text').classList.remove('hidden');
    }, () => {
        alert("Falha ao copiar o texto");
    });
}

console.log("Desenvolvido por Jefferson Souza Silva, seguindo as métricas via figma da alura.")