/* Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. */

function fibonacci(){
var ent = document.getElementById("numtxt").value;
var res = document.getElementById("resposta");
let f1=1,f2=1,temp=0;

while(f2<ent){
    if(f2<ent){
        temp=f1;
        f1=f2;
        f2+=temp;
    }
}
if(f2==ent){
    res.innerHTML = "O Número está DENTRO da sequencia de fibonacci";
}else{
    res.innerHTML = "O Número está FORA da sequencia de fibonacci";
}
}