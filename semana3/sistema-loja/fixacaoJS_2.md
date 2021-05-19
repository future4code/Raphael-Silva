```
function calculaPrecoTotal(quantidade){
    let precoFinal1 = 1.30*quantidade
    let precoFinal2 = 1.00*quantidade
    if(quantidade<12){
      return precoFinal1
    }else{
      return precoFinal2
    }
}
```
