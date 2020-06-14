
function get_suma(){
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;    
    let out1 = +x + +y;
    return out1;
}

function mostrar(){
    let result = document.getElementById("resultado");
    let sumar = get_suma();
    let content = document.createTextNode(" " + sumar);
    result.appendChild(content);


}

document.getElementById("suma").addEventListener("click",mostrar);
