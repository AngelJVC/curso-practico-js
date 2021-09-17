console.group("Cuadrado del triángulo");
const ladoCuadrado = 5;
const perimentroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");
console.log("El perimetro del cuadrado es: " + perimentroCuadrado + " cm");
console.log("El área del cuadrado es " + areaCuadrado + " cm2");
console.groupEnd("codigo del triangulo");
// 

console.group("Cuadrado del triángulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("Los lados del triángulo miden " +
    ladoTriangulo1 +
    "cm, " +
    ladoTriangulo2 +
    "cm, " +
    baseTriangulo +
    "cm "
);

console.log("La altura del triángulo es de " + alturaTriangulo + "cm ");

const perometroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

console.log("El perimetro del triángulo es: " +
    perometroTriangulo + "cm ");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log("El área del triángulo es " + areaTriangulo + " cm2");
console.groupEnd();
console.group("Área del circulo");
const radioCirculo = 4;
const PI = Math.round(Math.PI);

const perimetroCirculo = radioCirculo * 2 * PI;

const areaoCirculo = (radioCirculo * radioCirculo) * PI;

console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");
console.log("El area del circulo es: " + areaoCirculo + "cm2");
console.groupEnd();