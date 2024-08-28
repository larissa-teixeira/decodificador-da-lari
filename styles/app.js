var Botaocrip = document.getElementById("botao-crip");
var Botaodescrip = document.getElementById("botao-descrip");

Botaocrip.onclick = () => {
    var entradatexto = document.getElementById("entrada-texto").value;
    var saidaArea = document.getElementById("saida-area");
    var Resultado = document.getElementById("resultado");
    var Esconder = document.getElementById("esconder-imagem");
    var saidaVazio = document.getElementById("saida-vazio");

    var arrayentrada = entradatexto.split("");
    var arrayCrip = [];

    for (let i = 0; i < arrayentrada.length; i++) {
        if (arrayentrada[i] === "a") {
            arrayCrip.push("ai");
        } else if (arrayentrada[i] === "e") {
            arrayCrip.push("enter");
        } else if (arrayentrada[i] === "i") {
            arrayCrip.push("imes");
        } else if (arrayentrada[i] === "o") {
            arrayCrip.push("ober");
        } else if (arrayentrada[i] === "u") {
            arrayCrip.push("ufat");
        } else {
            arrayCrip.push(arrayentrada[i]);
        }
    }

    // Exibir o resultado da criptografia
    Esconder.style.display = "none";
    saidaVazio.style.display = "none";
    Resultado.style.display = "block";
    Resultado.innerHTML = arrayCrip.join("");
};

Botaodescrip.onclick = () => {
    var entradatexto = document.getElementById("entrada-texto").value;
    var saidaArea = document.getElementById("saida-area");
    var Resultado = document.getElementById("resultado");
    var Esconder = document.getElementById("esconder-imagem");
    var saidaVazio = document.getElementById("saida-vazio");

    var descrip = entradatexto
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    // Exibir o resultado da descriptografia
    Esconder.style.display = "none";
    saidaVazio.style.display = "none";
    Resultado.style.display = "block";
    Resultado.innerHTML = descrip;
};
