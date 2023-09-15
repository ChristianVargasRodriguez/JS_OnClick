function logout(elemento) {
    if (elemento.innerText == "Login"){
        elemento.innerText = "Logout";
    } else {
        elemento.innerText = "Login";
    }
}

function esconde(element) {
    element.remove();
}

function like(element) {
    let numLikes = element.querySelector('.numLike');
    let cantidadLikes = numLikes.innerText;
    cantidadLikes ++;
    numLikes.innerText = cantidadLikes;

    alert("Ninja was liked");
}