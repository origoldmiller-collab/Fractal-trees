//preview: python -m http.server
const LENGHT_MULT = 0.6;
const LENGTH_DIST = 450;
// const NUM_BRANCHES = 2
const BASE_ANGLE = -45;
const ANGLE_ADD = -20;
const L_BRANCH_SPLIT_DIST = -20;
const R_BRANCH_SPLIT_DIST = -70;
const TRUNK_HEIGHT = 250;
const X_POS = 1000;
const RED_MULT = 0
const GREEN_MULT = -20
const BLUE_MULT = -50
const BASE_COlOUR = [255, 255, 255]
let tree =[];

function setup() {
  createCanvas(windowWidth-30, windowHeight-30);
  background(30);
  angleMode(DEGREES);
  tree.push(new Branch(X_POS, height, X_POS, height-TRUNK_HEIGHT, BASE_COlOUR[0], BASE_COlOUR[1], BASE_COlOUR[2]));
  buildTree(LENGTH_DIST, BASE_ANGLE, X_POS, height-TRUNK_HEIGHT, BASE_COlOUR[0], BASE_COlOUR[1], BASE_COlOUR[2]);
  console.log(tree);
}

function draw() {
  background(30);
  for (let i = 0; i < tree.length; i++){
      tree[i].display();
  }
}
 function buildTree(distance, angle, x2, y2, r, g, b){
    if (distance >= 1){
      tree.push (new Branch(x2, y2, x2+cos(angle+R_BRANCH_SPLIT_DIST)*distance*LENGHT_MULT, y2+sin(angle+R_BRANCH_SPLIT_DIST)*distance*LENGHT_MULT, r+RED_MULT, g+GREEN_MULT, b+BLUE_MULT));
      buildTree(distance*LENGHT_MULT, angle+ANGLE_ADD, x2+cos(angle+R_BRANCH_SPLIT_DIST)*distance*LENGHT_MULT, y2+sin(angle+R_BRANCH_SPLIT_DIST)*distance*LENGHT_MULT, r+RED_MULT, g+GREEN_MULT, b+BLUE_MULT);
      
      tree.push (new Branch(x2, y2, x2 + cos(angle+L_BRANCH_SPLIT_DIST)*distance*LENGHT_MULT, y2+sin(angle+L_BRANCH_SPLIT_DIST)*distance*LENGHT_MULT, r+RED_MULT, g+GREEN_MULT, b+BLUE_MULT));
      buildTree(distance*LENGHT_MULT, angle-ANGLE_ADD, x2 + cos(angle+L_BRANCH_SPLIT_DIST)*distance*LENGHT_MULT, y2+sin(angle+L_BRANCH_SPLIT_DIST)*distance*LENGHT_MULT, r+RED_MULT, g+GREEN_MULT, b+BLUE_MULT);
  }
}
class Branch {
  constructor(startingx, startingy, x2, y2, red, green, blue) {
    this.x1 = startingx;
    this.y1 = startingy;
    this.x2 = x2 
    this.y2 = y2
    this.red = red
    this.green = green
    this.blue = blue
  }
  display() {
  stroke(this.red, this.green, this.blue);
  strokeWeight(5)
  line(this.x1, this.y1, this.x2, this.y2);
 }
}