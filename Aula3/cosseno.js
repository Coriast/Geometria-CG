/**
 * Curva do Cosseno de PI no plano cartesiano
 */

 function ponto(x, y) {
    this.x = x;
    this.y = y;
}

function vector2(x1, y1, x2, y2) {
    this.b = new ponto(x1, y1);
    this.f = new ponto(x2, y2);
}

var Alpha = 1.0;
var Beta = 15;
var check = true
var checkB = true

function setup() {
    createCanvas(1000, 650, WEBGL)
    
    background(220)
}

function draw() {
    // Padrão do sistema Cartesiano
    scale(25)
    //background(220)
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

    point(Beta, cos(PI*Alpha)) // cos(PI)

    if (check == true) {
        Alpha = (parseFloat(Alpha) - 0.05).toFixed(3)
    } else if (check == false) {
        Alpha = (parseFloat(Alpha) + 0.05).toFixed(3)
    }
    if (Alpha >= 1) {
        check = true
    } else if (Alpha <= 0) {
        check = false
    }

    if (checkB == true) {
        Beta = (parseFloat(Beta) - 0.1).toFixed(3)
    } else if (checkB == false) {
        Beta = (parseFloat(Beta) + 0.1).toFixed(3)
    }
    if (Beta >= 15) {
        //background(220)
        checkB = true
    } else if (Beta <= -15) {
        //background(220)
        checkB = false
    }
}