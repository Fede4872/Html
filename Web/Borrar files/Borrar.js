
function get_suma(){
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;    
    let out1 = +x + +y;
    return out1;
}

function get_resta(){
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;    
    let out1 = +x - +y;
    return out1;
}

function get_mult(){
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;    
    let out1 = +x * +y;
    return out1;
}

function get_div(){
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;    
    let out1 = +x / +y;
    return out1;
}



function show_add(){
    let result = document.getElementById("resultado");
    let fc = get_suma();
    let content = document.createTextNode(" " + fc);
    result.appendChild(content);
}

function show_rst(){
    let result = document.getElementById("resultado");
    let fc = get_resta();
    let content = document.createTextNode(" " + fc);
    result.appendChild(content);
}

function show_mlt(){
    let result = document.getElementById("resultado");
    let fc = get_mult();
    let content = document.createTextNode(" " + fc);
    result.appendChild(content);
}

function show_div(){
    let result = document.getElementById("resultado");
    let fc = get_div();
    let content = document.createTextNode(" " + fc);
    result.appendChild(content);
}
function clear(){
    document.getElementById("resultado").innerHTML = "";
}

document.getElementById("suma").addEventListener("click",show_add);
document.getElementById("resta").addEventListener("click",show_rst);
document.getElementById("mult").addEventListener("click",show_mlt);
document.getElementById("div").addEventListener("click",show_div);
document.getElementById("clr").addEventListener("click",clear);
