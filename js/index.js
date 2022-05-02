$(document).ready(function (){
    $('.inserir').on('click', function(){     
        insert($(this).html());        
    })

    $('#limpar').on('click', function(){
        limpar();
    })

    $('#del').on('click', function(){
        del();
    })

    $('#calcular').on('click', function(){
        calcular();        
    })
    // O show faz o display block
    $('#historico-botao').on('click', function(){
        $('#historico').show(); //O show vai sobrepor com o display block o display none
    })
    /*Agora ele vai fechar, pego o #historico e especifico que é um button 
    com a classe botao (.botao), pq se tiver outros buttons ele pega a classe botao (> é que é filho) 
    - to dando um display block*/
    $('#historico>button.botao').on('click', function(){
        $('#historico').hide(); //O hide tira o display block adicionando o display none
    })
})
  
  
function insert(numeroInserido){
    var numeroNaCalculadora = $('#resultado').html();  
    var resultado = numeroNaCalculadora.substring(numeroNaCalculadora.length -1);
    var isOperador = verificaOperador(resultado);
    var isOperador2 = verificaOperador(numeroInserido);
  
 
    if (isOperador == true && isOperador2 == true){
        del();        
        numeroNaCalculadora = $('#resultado').html();        
        
    }
    $('#resultado').html(numeroNaCalculadora + '' + numeroInserido);
}

function verificaOperador(parametro){
    var isOperador = false;
    switch(parametro){
        case "+": 
            isOperador = true;
            break;
        case "-":
            isOperador = true;
            break;
        case "*":
            isOperador = true;
            break;
        case "/":
            isOperador = true;
            break;    
        default: 
            break;
    }
    return isOperador;
}


function limpar(){
    $('#resultado').html("");
}

function del(){
    var resultado = $('#resultado').html();
    $('#resultado').html(resultado.substring(0, resultado.length -1));
}

function calcular(){
    var resultado = $('#resultado').html(); //O .html substitui o HTML existente
    if(resultado) {
        var soma = eval(resultado);
        $('#resultado').html(soma); //está fazendo o calculo (eval) e mostrando 
        //Aqui estou usando o HTML entro do HTML (append)
        //$('#historico').append("<div>" + resultado + " = " + soma +  "</div>"); 
        $('#historico').append(`<div>${resultado} = ${soma}</div>`); 
        // O append não substitui como o .html, ele mantem o que já existe e adiciona o HTML
    }
    else{
        $('#resultado').html("Digite algum valor");
    }    
} 




/*function insert(num){
   var numero = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = numero + num;

}

function limpar(){
    document.getElementById('resultado').innerHTML = "";
}

function del(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else{
        document.getElementById('resultado').innerHTML = "Digite algum valor";
    }
}*/