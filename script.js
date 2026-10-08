//preview: python -m http.server
const LENGHT_MULT = 0.55;
const LENGTH_DIST = 500;
const CUT_OFF_POINT = 4
const NUM_BRANCHES = 5
const BASE_ANGLE = 45;
const ANGLE_ADD = 60
const BRANCH_SPLIT_DIST = -135;
const TRUNK_HEIGHT = 150;
const X_POS = 650;
const RED_MULT = 40;
const GREEN_MULT = 10;
const BLUE_MULT = 0;
const BASE_COlOUR = [0, 0, 0]
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
  if (distance >= CUT_OFF_POINT){
    for (let i = 0; i < floor(NUM_BRANCHES/2); i++){
      tree.push (new Branch(x2, y2, x2 + cos(angle+BRANCH_SPLIT_DIST)*distance*LENGHT_MULT, y2+sin(angle+BRANCH_SPLIT_DIST)*distance*LENGHT_MULT, r+RED_MULT, g+GREEN_MULT, b+BLUE_MULT));
      buildTree(distance*LENGHT_MULT, angle+ANGLE_ADD*-(i+1), x2 + cos(angle+BRANCH_SPLIT_DIST)*distance*LENGHT_MULT, y2+sin(angle+BRANCH_SPLIT_DIST)*distance*LENGHT_MULT, r+RED_MULT, g+GREEN_MULT, b+BLUE_MULT);

      tree.push (new Branch(x2, y2, x2 + cos(angle+BRANCH_SPLIT_DIST)*distance*LENGHT_MULT, y2+sin(angle+BRANCH_SPLIT_DIST)*distance*LENGHT_MULT, r+RED_MULT, g+GREEN_MULT, b+BLUE_MULT));
      buildTree(distance*LENGHT_MULT, angle+ANGLE_ADD*(i+1), x2 + cos(angle+BRANCH_SPLIT_DIST)*distance*LENGHT_MULT, y2+sin(angle+BRANCH_SPLIT_DIST)*distance*LENGHT_MULT, r+RED_MULT, g+GREEN_MULT, b+BLUE_MULT);
      
      if (NUM_BRANCHES %2 != 0){
      tree.push (new Branch(x2, y2, x2+cos(angle+BRANCH_SPLIT_DIST)*distance*LENGHT_MULT, y2+sin(angle+BRANCH_SPLIT_DIST)*distance*LENGHT_MULT, r+RED_MULT, g+GREEN_MULT, b+BLUE_MULT));
      buildTree(distance*LENGHT_MULT, angle+ANGLE_ADD*0, x2+cos(angle+BRANCH_SPLIT_DIST)*distance*LENGHT_MULT, y2+sin(angle+BRANCH_SPLIT_DIST)*distance*LENGHT_MULT, r+RED_MULT, g+GREEN_MULT, b+BLUE_MULT);
    }
    }
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
  strokeWeight(2)
  line(this.x1, this.y1, this.x2, this.y2);
 }
}