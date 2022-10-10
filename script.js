function singular(valor){
    if(valor == 1){
       return valor + ' Pessoa'
    }else{
        return valor + ' Pessoas'
    }    
}

function formatarDinheiro(valor){
    valor = Math.ceil(valor * 100) / 100
    valor = valor.toFixed(2)
    return 'R$ ' + valor 
}

function gorjeta(){
    let valorConta = Number(document.getElementById('valorConta').value)
    let inputGorjeta = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value

    let contaValor =  valorConta * (inputGorjeta / 100)
    let totalGorjeta =  valorConta + contaValor
    let totalConta = totalGorjeta / split

    //Porcentagem da gorjeta
    document.getElementById('Percent-gorjeta').innerHTML = inputGorjeta + ' %'

    //Valor da gojeta
    document.getElementById('tipValue').innerHTML = formatarDinheiro(contaValor)

    //Valor total a pagar
    document.getElementById('totalGorjeta').innerHTML = formatarDinheiro(totalGorjeta)

    //Dividir por pessoa
    document.getElementById('splitValue').innerHTML = singular(split)

    //Fatura total da conta
    document.getElementById('total').innerHTML = formatarDinheiro(totalConta)
}