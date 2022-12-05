function verificar(){
       var data = new Date()
       var ano = data.getFullYear()//pegando o ano
       var fano = document.getElementById('idade')//pegando o ano do formulario
       var res = document.getElementById('res')
       
       if(fano.value.length==0 || fano.value>ano){
        window.alert('Verifique os dados e tente novamente!')
        }
       else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
       
       if(fsex[0].checked){
        genero='Homem'
        if(idade>=0 && idade<10){
            window.alert('>....')
            img.setAttribute('src','../img/homembebe.jfif')
        }
        res.innerHTML=`Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)

       }
    }

}