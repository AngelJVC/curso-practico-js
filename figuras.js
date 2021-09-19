//console.group("Cuadrado del triángulo");

const resultado = document.getElementsByClassName("resultado_tipo-final");
const nombrefigura = document.getElementsByClassName("reultados_tipo-figura");

const perimetro = document.getElementById("perimetro");
const area = document.getElementById("area");

const valorUsuario = document.getElementById("inputCuadrado");


perimetro.addEventListener("click", mostrarP);
area.addEventListener("click", mostrarA);




function mostrarP() {
    calcularPerimetro();
    nombrefigura[0].innerHTML = "Perimetro";
}

function mostrarA() {
    calcularArea();
    nombrefigura[0].innerHTML = "Area";
}


function calcularPerimetro() {
    resultado[0].innerHTML = "";
    const valor = valorUsuario.value;
    const perimetro = perimentroCuadrado(valor);
    resultado[0].innerHTML = perimetro + " cm";
    console.log(perimetro);



}

function calcularArea() {

    resultado[0].innerHTML = "";
    const valor = valorUsuario.value;
    const area = areaCuadrado(valor);
    resultado[0].innerHTML = area + " cm2";
    console.log(area);

}

function perimentroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

























// console.group("Cuadrado del triángulo");
function perimetroTriangulo(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
}

function areaTriandulo(base, altura) {
    return (base * altura) / 2;
}


// console.group("Área del circulo");

function diametroCirculo(radio) {
    return radio * 2;
}

const peCirculo = radio => diametroCirculo(radio) * Math.PI;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}

function areaCirculo(radio) {
    return (radio * radio) * Math.PI;
}

//resultado