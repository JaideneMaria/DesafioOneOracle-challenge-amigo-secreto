//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];
let nomeSorteado = [];


function adicionarAmigo(){
    let nomeDoAmigo = document.querySelector('#amigo').value;
    if(nomeDoAmigo == ""){
        alert("Por favor, insira um nome!")
    }else{
        listaDeAmigos.push(nomeDoAmigo);
        amigo.value = "";
        exibirLista();  
    }
}

function exibirLista(){
    const lista = document.querySelector('#listaAmigos');
    lista.innerHTML = "";
    for(let i = 0; i < listaDeAmigos.length; i++){
        const exibirNome = document.createElement('li');
        exibirNome.innerHTML = `${listaDeAmigos[i]}`;
        lista.appendChild(exibirNome);
    }
}

function sortearAmigo(){
    if(listaDeAmigos != ""){
        const qtdDeNomes = listaDeAmigos.length;
        let indice = Math.floor(Math.random() * qtdDeNomes);
        const resultado = document.querySelector('#resultado');
        let exibirResultado = listaDeAmigos[indice];

        if (nomeSorteado.includes(exibirResultado)){
            return sortearAmigo();
        }else{
            nomeSorteado.push(exibirResultado);
            console.log(nomeSorteado);
            resultado.innerHTML = `${exibirResultado}`;
            if(nomeSorteado.length == listaDeAmigos.length){
                setTimeout(() => { 
                    alert('Todos os nomes já foram sorteados!');
                    nomeSorteado = [];
                }, 1000);
            }
        }

    }else{
        alert('Por favor, insira os nomes.');
    }
    
}