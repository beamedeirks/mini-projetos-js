//variavel global
const calcular = document.getElementById("calcular");


function imc() {
    //pegando os valores de html e passando a variavel js
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');


    if (nome !== '' && altura !== '' && peso !== '') {
        //calculo imc
        // toFixed - arredondar para 2 casas decimais
        const valorIMC = (peso / (altura * altura)).toFixed(2);


        //variavel let pois será alterada
        let classificacao = ' ';
        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso.';
        } else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!';
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso.';
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade grau I'
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II'
        } else {
            classificacao = 'com obsidade grau III. Cuidado!!'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
        //resultado.textContent  = valorIMC;

    } else {
        //validação de dados
        //alert ('Preencha todos os campos!!')
        resultado.textContent = 'Preencha todos os campos!!';
    }

}

//adicionar o evento quando clicar executar a função imc
calcular.addEventListener('click', imc);

