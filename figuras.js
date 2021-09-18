//console.group("Cuadrado del triángulo");

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