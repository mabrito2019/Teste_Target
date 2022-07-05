const faturamento = [
    {
        estado: 'SP',
        faturamento: 67836.43,
        porcentagem:''
    },
    {
        estado: 'RJ',
        faturamento: 36678.66,
        porcentagem:''
    },
    {
        estado: 'MG',
        faturamento: 29229.88,
        porcentagem:''
    },
    {
        estado: 'ES',
        faturamento: 27165.48,
        porcentagem:''
    },
    {
        estado: 'Outros',
        faturamento: 19849.53,
        porcentagem:''
    }];

let total = faturamento.map(item => item.faturamento).reduce((prev, curr)=> prev + curr, 0);

for(let i=0;i<faturamento.length;i++){
    faturamento[i].porcentagem = Number(faturamento[i].faturamento*100/total).toFixed(0)+'%';
    console.log(faturamento[i].porcentagem);
}
