function calcular()
{
    var valor = document.getElementById('valor')
    var vrestante = document.getElementById('vrestante')
    var entrada = document.getElementById('entrada')
    var parcelas = document.getElementById('parcelas')
    var ventrada = document.getElementById('ventrada')
    var quantparcelas = document.getElementById('quantparcelas')
    var vparcelas = document.getElementById('vparcelas')

    valor = Number (valor.value)
    entrada = Number (entrada.value)
    parcelas = Number (parcelas.value)

    if (entrada>=30 || entrada<=90)
    {
        var res_entrada = (valor*entrada)/100
        ventrada.value = (res_entrada)
    }
    else{
        window.alert(`ERRO`)
    }
    if(valor==0)
    {window.alert('ERRO')}
    else 
    { 
        var res_vrestante = (valor - res_entrada)
        vrestante.value = (res_vrestante)    
    }
    if(parcelas>24 || parcelas<3)
    {window.alert(`ERRO`)}

    else{
        quantparcelas.value = (parcelas)
        var res_vparcelas = (valor/parcelas)
        vparcelas.value = (res_vparcelas)
    }

    

    

    
}