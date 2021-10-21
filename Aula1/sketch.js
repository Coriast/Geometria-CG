/**
 * Um poligono simples
 */

class vector2 {
  constructor(x1, y1, x2, y2) {
    // ponto A
    this.x1 = x1;
    this.y1 = y1;

    // ponto B
    this.x2 = x2;
    this.y2 = y2;
  }
};

let fr = 30;

var centerX, centerY; // dois pontos centrais do gráfico da tela
let vectorX = new vector2();
let vectorY = new vector2();

let vectorS = new vector2();
let vectorU = new vector2(); let vectorV = new vector2(); 
let vectorF = new vector2(); let vectorW = new vector2();


function setup() {
  createCanvas(800, 600);
  background(220);
  frameRate(30);

  centerX = width / 2;
  centerY = height / 2;

  vectorX = new vector2(0, centerY, width, centerY);
  vectorY = new vector2(centerX, 0, centerX, height);

  vectorU = new vector2(centerX, centerY, centerX+80, centerY-120);
  vectorV = new vector2(centerX, centerY, centerX+140, centerY-10);
  vectorS = new vector2(centerX, centerY, vectorU.x2+vectorV.x2 - centerX, vectorU.y2+vectorV.y2 - centerY);

}

function draw() {
  background(220);

  stroke(0);
  line(vectorX.x1, vectorX.y1, vectorX.x2, vectorX.y2) // Linha guia X

  stroke(0);
  line(vectorY.x1, vectorY.y1, vectorY.x2, vectorY.y2) // Linha guia Y
  
  stroke(240, 10, 10);
  line(vectorU.x1, vectorU.y1, vectorU.x2, vectorU.y2); // Linha do vetor U
  
  stroke(10, 240, 10);
  line(vectorV.x1, vectorV.y1, vectorV.x2, vectorV.y2); // Linha do vetor V

  stroke(255, 0, 240);
  line(centerX, centerY, vectorS.x2, vectorS.y2); // Linha do vetor S soma de U + V
  vectorS = new vector2(centerX, centerY, vectorU.x2+vectorV.x2 - centerX, vectorU.y2+vectorV.y2 - centerY);

  vectorF = new vector2(vectorU.x2, vectorU.y2, vectorS.x2, vectorS.y2);
  line(vectorF.x1, vectorF.y1, vectorF.x2, vectorF.y2);

  vectorW = new vector2(vectorV.x2, vectorV.y2, vectorS.x2, vectorS.y2);
  line(vectorW.x1, vectorW.y1, vectorW.x2, vectorW.y2);
}