function calcular() {
    let val1 = parseFloat(document.getElementById("val1").value);
    let val2 = parseFloat(document.getElementById("val2").value);
    let sinal = document.getElementById("sinal").value;
    let result = document.getElementById("result"); 
    let resultado = 0;
    
    switch (sinal) {
        case '+':
            resultado = val1 * (val2 / 100)
            break;

        case '-':
            resultado = val1 / val2
            break;

        case '*':
            resultado = val1 * val2
            break;

            console.log("Nenhum operado disponivel")

    }

    result.value = resultado;
}
