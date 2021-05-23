nome = prompt("Qual é o seu nome?")
var pontos = 0;

function verificar(){
    //Checagem da pergunta um
    var p1 = document.getElementById("b1")   
    var res1 = document.getElementById("respt1")
        
    if(p1.checked){
       
        res1.innerText="Resposta Correta"
        res1.style = "color: green;"
    
        pontos += 1;
    } else{
    
        res1.innerText="Resposta Errada"
        res1.style = "color: red"
    }
    //Checagem da pergunta dois
    var p2 = document.getElementById("b2") 
    var res2 = document.getElementById("respt2")
    
    if(p2.checked){
   
        res2.innerText="Resposta Correta"
        res2.style = "color: green;"

        pontos += 1;
    } else{
    
        res2.innerText="Resposta Errada"
        res2.style = "color: red;"
       
    }

    //Checagem da pergunta três
    var p3 = document.getElementById("c3")
    var res3 = document.getElementById("respt3")
    
    if(p3.checked){

        res3.innerText="Resposta Correta"
        res3.style = "color: green;"

        pontos += 1;
    } else{
    
        res3.innerText="Resposta Errada"
        res3.style = "color: red;"
       
    }


    //Perguntas de História

    //Pergunta um    
    var h1 = document.getElementById("ha1")
    var res4 = document.getElementById("resh1")

    if(h1.checked){

        res4.innerText="Resposta Correta"
        res4.style = "color: green;"

        pontos += 1;
    } else{
    
        res4.innerText="Resposta Errada"
        res4.style = "color: red;"
       
    }
    //Pergunta dois
    var h2 = document.getElementById("hd2")
    var res5 = document.getElementById("resh2")

    if(h2.checked){

        res5.innerText="Resposta Correta"
        res5.style = "color: green;"

        pontos += 1;
    } else{
    
        res5.innerText="Resposta Errada"
        res5.style = "color: red;"
       
    }
    //Pergunta em Inglês
    var ing = document.getElementById("inc")
    var res6 = document.getElementById("resing5")

    if(ing.checked){

        res6.innerText="Resposta Correta"
        res6.style = "color: green;"

        pontos += 1;
    } else{
    
        res6.innerText="Resposta Errada"
        res6.style = "color: red;"
       
    }
    //Perguntas de Matemática
    //Pergunta um
    var m1 = document.getElementById("ma1")
    var res7 = document.getElementById("resm1")
    
    if(m1.checked){
        res7.innerText="Resposta Correta"
        res7.style = "color: green;"

        pontos += 1;
    } else{
    
        res7.innerText="Resposta Errada"
        res7.style = "color: red;"
       
    }
    //Pergunta dois
    var m2 = document.getElementById("mc2")
    var res8 = document.getElementById("resm2")
    
    if(m2.checked){
        res8.innerText="Resposta Correta"
        res8.style = "color: green;"

        pontos += 1;
    } else{
    
        res8.innerText="Resposta Errada"
        res8.style = "color: red;"
       
    }
    //Pergunta três
    var m3 = document.getElementById("mb3")
    var res9 = document.getElementById("resm3")
    
    if(m3.checked){
        res9.innerText="Resposta Correta"
        res9.style = "color: green;"

        pontos += 1;
    } else{
    
        res9.innerText="Resposta Errada"
        res9.style = "color: red;"
       
    }
    //Pergunta de Ciências
    //Pergunta de número um
    var cie1 = document.getElementById("cieb1") 
    var res10 = document.getElementById("rescie1")
    
    if(cie1.checked){
        res10.innerText="Resposta Correta"
        res10.style = "color: green;"

        pontos += 1;
    } else{
    
        res10.innerText="Resposta Errada"
        res10.style = "color: red;"
       
    }
    //Pergunta de número um
    var cie2 = document.getElementById("cieb2") 
    var res11 = document.getElementById("rescie2")
    
    if(cie2.checked){
        res11.innerText="Resposta Correta"
        res11.style = "color: green;"

        pontos += 1;
    } else{
    
        res11.innerText= "Resposta Errada"
        res11.style = "color: red;"
       
    }

    alert(` Olá ${nome} você conseguiu ${pontos} pontos!`)
}
