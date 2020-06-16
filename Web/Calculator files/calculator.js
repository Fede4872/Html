
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
    let r = get_suma();
    document.getElementById("resultado").innerHTML= r;
}

function show_rst(){
    let r = get_resta();
    document.getElementById("resultado").innerHTML= r;
}

function show_mlt(){
    let r = get_mult();
    document.getElementById("resultado").innerHTML= r;
}

function show_div(){
    let r = get_div();
    document.getElementById("resultado").innerHTML= r;
}
function clear(){
    document.getElementById("resultado").innerHTML = "";
}

document.getElementById("suma").addEventListener("click",show_add);
document.getElementById("resta").addEventListener("click",show_rst);
document.getElementById("mult").addEventListener("click",show_mlt);
document.getElementById("div").addEventListener("click",show_div);
document.getElementById("clr").addEventListener("click",clear);
