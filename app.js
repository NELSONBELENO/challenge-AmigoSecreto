let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value.trim();
    
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    amigos.push(nombreAmigo);
    
    inputAmigo.value = "";
    
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    
    listaAmigos.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    let amigoSorteado = amigos[indiceAleatorio];
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo sorteado es: ${amigoSorteado}</li>`;
}