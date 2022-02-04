/**
 * Comportamento da Luz em plano 2D
 */

function ponto(x, y) {
    this.x = x;
    this.y = y;
}

function vector2(x1, y1, x2, y2) {
    this.b = new ponto(x1, y1);
    this.f = new ponto(x2, y2);
}

// Pontos
var A = new ponto();
var B = new ponto();
var C = new ponto();
var X = new ponto();

// Vetores
var bc = new vector2();
var n = new vector2();
var luz = new vector2();

// Escalar
var Alpha = 1.0

// Variaveis
var check = true

function setup() {
    createCanvas(1000, 650, WEBGL)
}

function draw() {
    // Padrão do sistema Cartesiano
    scale(25.0)
    background(120)
    frameRate(30)
    stroke(0)

    // Eixos X e Y
    stroke(180)
    strokeWeight(0)
    line(0, height, 0, -height)
    line(width, 0, -width, 0)
    stroke(0)
    rotateZ(PI)
    rotateY(PI)
    // ------------------------ //

    // Pontos
    strokeWeight(10)
    stroke(0, 255, 0)
    A = new ponto(6, 5)
    point(A.x, A.y)

    stroke(0)
    B = new ponto(-10, 0)
    point(B.x, B.y)

    C = new ponto(15, 0)
    point(C.x, C.y)

    // Linhas
    strokeWeight(1)
    bc = new vector2(B.x, B.y, C.x, C.y)
    line(bc.b.x, bc.b.y, bc.f.x, bc.f.y)

    n = new vector2(X.x, 0, X.x, 1)
    line(n.b.x, n.b.y, n.f.x, n.f.y)

    // Distancia do meu vetor X para A, uma distancia que muda regularmente
    var Vx = A.x - X.x
    var Vy = A.y - X.y

    // Calculo do vetor unitario da distância de AX, assim eu torno modulo 1 e foco no sentido e direção do vetor
    var Ux = (1 / sqrt(pow(Vx, 2) + pow(Vy, 2))) * Vx
    var Uy = (1 / sqrt(pow(Vx, 2) + pow(Vy, 2))) * Vy
    /**
       Para que minha linha saia do meu ponto X em direção a A com o vetor Unitário em X preciso somar X ao U
       Caso contrário a linha fica traçando a margem unitária em A, e a linha mudando de tamanho, apenas procurei fazer
       o inverso
    */
    var mult = (n.f.y*Uy).toFixed(10)

    strokeWeight(10)
    stroke(0, 255*mult, 0)
    var trajeto = C.x + (B.x - C.x) * Alpha
    X = new ponto(trajeto, 0)
    point(X.x, X.y)
    strokeWeight(1)
    luz = new vector2(X.x, X.y, X.x + Ux, X.y + Uy)
    line(luz.b.x, luz.b.y, luz.f.x, luz.f.y)

    if (check == true) {
        Alpha = (parseFloat(Alpha) - 0.01).toFixed(5)
    } else if (check == false) {
        Alpha = (parseFloat(Alpha) + 0.01).toFixed(5)
    }
    if (Alpha == 1) {
        check = true
    } else if (Alpha == 0) {
        check = false
    }
}