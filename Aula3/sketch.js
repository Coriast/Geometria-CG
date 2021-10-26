function ponto(x, y){
    this.x = x;
    this.y = y;
}

function vector2(x1, y1, x2, y2){
    this.b = new ponto(x1, y1);
    this.f = new ponto(x2, y2);
}

function setup(){
    createCanvas(1000, 650, WEBGL)
    background(220)
}

function draw(){
    // Padrão do sistema Cartesiano
    scale(25.0)
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

}