/**
 * Angulo entre dois vetores e vetor unitário
 */

function ponto(x, y){
    this.x = x;
    this.y = y;
}

function vector2(x1, y1, x2, y2){
    this.b = new ponto(x1, y1);
    this.f = new ponto(x2, y2);
}

// Declaração de Pontos
var A = new ponto();
var B = new ponto();

// Declaração de Vetores
var a = new vector2();
var Ua = new vector2();
var b = new vector2();

function setup() {
    createCanvas(1000, 650, WEBGL)
}

function draw(){
    // Padrão do sistema Cartesiano
    scale(25.0)
    background(220)
    frameRate(30)
    stroke(0)

    // Eixos X e Y
    stroke(180)
    strokeWeight(1)
    line(0, height, 0, -height)
    line(width, 0, -width, 0)
    stroke(0)
    rotateZ(PI)
    rotateY(PI)
    // ------------------------ //

    // Pontos 
    strokeWeight(6)
    A = new ponto(3, 5)
    point(A.x, A.y)
    B = new ponto(7, 2)
    point(B.x, B.y)

    // calculo do vetor unitario
    var Ux = (1/sqrt(pow(A.x, 2) + pow(A.y, 2)))*A.x
    var Uy = (1/sqrt(pow(A.x, 2) + pow(A.y, 2)))*A.y

    // Angulo entre dois vetores
    var AporB = (A.x*B.x) + (A.y*B.y)
    var mA = sqrt((pow(A.x, 2) + pow(A.y, 2)))
    var mB = sqrt((pow(B.x, 2) + pow(B.y, 2)))

    var ang = acos( AporB/(mA*mB)) * (180/PI)
    console.log(ang)

    // Linhas de vetores
    strokeWeight(1)
    a = new vector2(0, 0, A.x, A.y)
    line(a.b.x, a.b.y, a.f.x, a.f.y)
    b = new vector2(0, 0, B.x, B.y)
    line(b.b.x, b.b.y, b.f.x, b.f.y)

    

    
}