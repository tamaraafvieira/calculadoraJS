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
    var resultado = $('#resultado').html();
    if(resultado) {
        $('#resultado').html(eval(resultado));
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