function inverter(){
    const palavra = document.getElementById('txt').value.split('');
    let res = document.getElementById('resposta');
    let reverse = '';
    let compare = document.getElementById('txt').value;

for(let i=0;i<palavra.length;i++){
reverse += palavra[palavra.length-i-1];
}

res.innerHTML = reverse.toUpperCase();

if (compare == reverse){
    res.innerHTML += "  e essa Palavra é um Palindromo"
}
reverse = '';


}