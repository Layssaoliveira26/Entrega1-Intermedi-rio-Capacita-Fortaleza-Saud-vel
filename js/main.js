var iconeMenu = document.querySelector('.icone-menu');
var ulHeader = document.querySelector('.ul-header');

iconeMenu.addEventListener('click', ()=>{
    if(ulHeader.classList.contains('ativo')){
        ulHeader.classList.remove('ativo');
    } else{
        ulHeader.classList.add('ativo');
    }
})

document.getElementById('calcular').addEventListener('click', function () {
    event.preventDefault();
    const altura = parseFloat(document.getElementById('altura').value.replace(',', '.'));
    const peso = parseFloat(document.getElementById('peso').value.replace(',', '.'));
    const resultado = document.getElementById('resultado');
    const msgResultado = document.getElementById('mensagem-resultado');
    const imgResultado = document.getElementById('img-resultado');
    

    // Limpa resultados anteriores
    msgResultado.textContent = '';
    imgResultado.style.display = 'none';

    // Validação de entrada
    if (altura <= 0 || peso <= 0 || !altura || !peso) {
        msgResultado.textContent = 'Infelizmente você nos forneceu valores inválidos, digite novamente';
        imgResultado.src = 'img/erro.png';
        imgResultado.style.display = 'block';
        return;
    }

    // Calcular IMC
    const imc = peso / (altura * altura);
    let classeImc;
    let imagemImc;

    // Classificação e escolha da imagem
    if (imc < 18.5) {
        classeImc = 'Você está abaixo do peso ideal. É importante buscar equilíbrio para o bem-estar.';
        imagemImc = 'img/abaixo-do-peso.png'; // Substitua pelos caminhos corretos
    } else if (imc < 24.9) {
        classeImc = 'Parabéns! Seu peso está equilibrado.';
        imagemImc = 'img/peso-equilibrado.png';
    } else if (imc < 29.9) {
        classeImc = 'Você está um pouco acima do peso.  Que tal começar com passos simples para melhorar sua saúde?';
        imagemImc = 'img/acima-peso.png';
    } else {
        classeImc = 
        'Você está obeso(a). Que tal investir em pequenas mudanças para cuidar mais de você? Cada passo conta!';
        imagemImc = 'img/obesidade.png';
    }

    // Exibe o resultado
    msgResultado.textContent = `Seu IMC é ${imc.toFixed(2)} (${classeImc}).`;
    imgResultado.src = imagemImc;
    imgResultado.style.display = 'block';
});
