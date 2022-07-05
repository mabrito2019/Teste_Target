/* Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal. */

const json = require('./dados.json');

function filtro(obj) {
    if (obj.valor == 0) {
      return false;
    } else {
      return true;
    }
  }

function maiorfaturamento(){
    const maxValue = json.reduce(function(prev, current) { 
	return prev.valor > current.valor ? prev : current; 
});
return "O maior faturamento foi no dia "+maxValue.dia+" no valor de R$"+parseFloat(maxValue.valor).toFixed(2);
};

function menorfaturamento(){
    const minValue = json.filter(filtro).reduce(function(prev, current) { 
	return prev.valor < current.valor ? prev : current; 
});
return "O menor faturamento foi no dia "+minValue.dia+" no valor de R$"+parseFloat(minValue.valor).toFixed(2);
};

function mediaMensal(){
    let soma = 0, intervalo=0, media=0, dias=0;

    for(let i=0; i < json.length;i++){
        if(json[i].valor != 0){
            soma+=json[i].valor;
            intervalo++;
        }
    }
    media = soma/intervalo;
    for(let i=0; i < json.length;i++){
        if(json[i].valor != 0){
            dias++;
        }
    }
    return dias +" dias desse mês renderam acima da média"
}

console.log(maiorfaturamento());
console.log(menorfaturamento());
console.log(mediaMensal());