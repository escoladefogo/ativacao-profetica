document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('header').removeAttribute("hidden");
        document.getElementById('container').removeAttribute("hidden");

        document.getElementById('c-loader').setAttribute("hidden", "true");
    }, 20);

    
});

function Form(){
   document.getElementById('text').setAttribute("hidden", "false");
   document.getElementById('form').removeAttribute("hidden");
}
function Ministerio(resposta){
    if (resposta == "Outro") {
        document.getElementById('ministerio').removeAttribute("hidden");
    }else{
        document.getElementById('ministerio').setAttribute("hidden","true");
    };
}
function Criancas(resposta){
    if (resposta == "Sim") {
        document.getElementById('criancas').removeAttribute("hidden");
    }else{
        document.getElementById('criancas').setAttribute("hidden","true");
    };
}

function EnviarDados(nome, telefone){
    var validado = true;
    if(nome=="" || nome.length < 8){
        document.getElementById("nome").style.cssText= 'background: #e35858; color: #fff;';
        document.getElementById("nome").focus();
        validado = false;
    }else{
        document.getElementById("nome").style.cssText= 'background: #fff; color: #000;';
    }
    //Nessesário criar uma validação de telefone
    if(telefone=="" || telefone.length < 8){
        document.getElementById("telefone").style.cssText= 'background: #e35858; color: #fff;';
        document.getElementById("telefone").focus();
        validado = false;
    }else{
        document.getElementById("telefone").style.cssText= 'background: #fff; color: #000;';
    }
    if(validado){
        Gravar(nome, telefone);
    }
}

function Gravar(nome, telefone){

    fetch("https://sheetdb.io/api/v1/y6wzxu5btyj7l", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        data: [
            {
                'Nome': nome,
                'Telefone': telefone,
            }
        ]
    }),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("Success:", data);
        document.getElementById('form').setAttribute("hidden", "false");
        document.getElementById('sucesso').removeAttribute("hidden");
    })
    .catch((error) => {
        console.error("Error:", error);
    });
 }