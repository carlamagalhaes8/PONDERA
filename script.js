function calcular() {

    let nota_linguagens = parseFloat(document.getElementById("linguagens").value.replace(",", "."));
    let nota_humanas = parseFloat(document.getElementById("humanas").value.replace(",", "."));
    let nota_naturezas = parseFloat(document.getElementById("naturezas").value.replace(",", "."));
    let nota_matematica = parseFloat(document.getElementById("matematica").value.replace(",", "."));
    let nota_redacao = parseFloat(document.getElementById("redacao").value.replace(",", "."));

    let peso_linguagens = parseFloat(document.getElementById("peso-linguagens").value.replace(",", "."));
    let peso_matematica = parseFloat(document.getElementById("peso-matematica").value.replace(",", "."));
    let peso_naturezas = parseFloat(document.getElementById("peso-naturezas").value.replace(",", "."));
    let peso_humanas = parseFloat(document.getElementById("peso-humanas").value.replace(",", "."));
    let peso_redacao = parseFloat(document.getElementById("peso-redacao").value.replace(",", "."));

    if (
        isNaN(nota_linguagens) || isNaN(nota_humanas) || isNaN(nota_naturezas) ||
        isNaN(nota_matematica) || isNaN(nota_redacao) ||
        isNaN(peso_linguagens) || isNaN(peso_humanas) || isNaN(peso_naturezas) ||
        isNaN(peso_matematica) || isNaN(peso_redacao)
    ) { 
        alert("Por favor, preencha todos os campos antes de calcular.");
        return; 
    }

    let media_final = (
        (nota_linguagens * peso_linguagens) + 
        (nota_humanas * peso_humanas) + 
        (nota_naturezas * peso_naturezas) +
        (nota_matematica * peso_matematica) +
        (nota_redacao * peso_redacao)
    ) / (
        peso_linguagens + 
        peso_humanas + 
        peso_naturezas + 
        peso_matematica + 
        peso_redacao
    );

    document.getElementById("final-note").innerHTML = media_final.toFixed(2);
}

function clear() {

    // limpa inputs que o usuário preencheu
    document.querySelectorAll("input").forEach(input => {
        input.value = "";
    });

    // limpa o resultado
    document.getElementById("final-note").innerHTML = "";
}
