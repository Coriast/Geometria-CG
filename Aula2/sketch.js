/**
 * Interpolação Linear e Bilinear
 */

function ponto(x, y){
    this.x = x;
    this.y = y;
}

function vector2(x1, y1, x2, y2){
    this.b = new ponto(x1, y1);
    this.f = new ponto(x2, y2);
}



var A = new ponto(10, 100);
var B = new ponto(100, 250)
var C = new ponto(30, 10)

var lenghtV = new ponto(B.x-A.x, B.y - A.y);

var Alpha = 1;
var Beta = 1;
var checkA = true;
var checkB = true;

var v = new vector2(A.x, A.y, A.x+(lenghtV.x*Alpha), A.y+(lenghtV.y*Alpha));

function setup() {
    createCanvas(800, 600, WEBGL)
    background(220)
    
}

function draw() {
    frameRate(30)

    rotateZ(PI)
    rotateY(PI)
    
    strokeWeight(7)

    stroke(255, 0, 0)
    point(A.x, A.y)

    stroke(0, 255, 0)
    point(B.x, B.y)

    stroke(0, 0, 255)
    point(C.x, C.y)

    var z, k, w;
    z = Alpha*Beta
    k = Beta*(1-Alpha)
    w = (1-Beta)

    var rgb = 255;
    strokeWeight(5)
    //v = new vector2(A.x, A.y, A.x+(Alpha*(B.x - A.x)), A.y+(Alpha*(B.y-A.y)))
    //v = new vector2(A.x, A.y, Alpha*B.x +(1- Alpha)*A.x, Alpha*B.y +(1- Alpha)*A.y)
    v = new vector2(A.x, A.y, z*A.x + k*B.x + w*C.x, z*A.y + k*B.y + w*C.y)
    stroke(z*rgb, k*rgb, w*rgb)
    point(v.f.x, v.f.y)
    // linhas guia
    stroke(180)
    strokeWeight(1);
    line(-width/2, 0, width/2, 0);      // eixo X
    line(0, -height, 0, height);    // eixo Y
    
    // Alpha
    if (Alpha >= 1.0) {
        checkA = true;
    } else if(Alpha <= 0.0){
        checkA = false;
    }

    if (checkA == true) {
        Alpha = (Alpha - 0.0003*99).toFixed(5);
    } else {
        Alpha = (parseFloat(Alpha)+0.0003*99).toFixed(5);
    }
    
    // Beta 
    if (Beta >= 1.0) {
        checkB = true;
    } else if(Beta <= 0.0){
        checkB = false;
    }

    if (checkB == true) {
        Beta = (Beta - 0.001).toFixed(5);
    } else {
        Beta = (parseFloat(Beta)+0.001).toFixed(5);
    }
}