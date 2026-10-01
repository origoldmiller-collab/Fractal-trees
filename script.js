// checkKeys() {
  //   let forceMagnitude = 12;
    
  //   if (keyIsDown(LEFT_ARROW))  this.applyForce(createVector(-forceMagnitude, 0));
  //   if (keyIsDown(RIGHT_ARROW)) this.applyForce(createVector(forceMagnitude, 0));
  //   if (keyIsDown(UP_ARROW))    this.applyForce(createVector(0, -forceMagnitude));
  //   if (keyIsDown(DOWN_ARROW))  this.applyForce(createVector(0, forceMagnitude));
  // }
  // The "Force" pattern: Force adds to Acceleration
  // applyForce(force) {
  //   this.acc.add(force);
  // }

  // update() {
  //   // 1. Acceleration changes Velocity
  //   this.vel.add(this.acc);
    
  //   // 2. Limit the speed so it doesn't go infinite
  //   this.vel.limit(this.topSpeed);
    
  //   // 3. Velocity changes Position
  //   this.pos.add(this.vel);
    
  //   // 4. Apply friction (velocity decay)
  //   this.vel.mult(this.friction);
    
  //   // 5. Reset acceleration for the next frame
  //   this.acc.mult(0);
  // }

//preview: python -m http.server

let tree =[];

function setup() {
  createCanvas(windowWidth-30, windowHeight-30);
  background(30);
  angleMode(DEGREES);
  tree.push(new Branch(width/2, height, width/2, height/2));
  tree[0].buildTree(height/4, -45);
  console.log(tree);
}

function draw() {
  background(30);
  for (let i = 0; i < tree.length; i++){
      tree[i].display();
  }
}

class Branch {
  constructor(startingx, startingy, x2, y2) {
    this.x1 = startingx;
    this.y1 = startingy;
    this.x2 = x2 
    this.y2 = y2
  }
  display() {
    stroke(random(255), random(255) ,random(255));
    strokeWeight(5)
    line(this.x1, this.y1, this.x2, this.y2);
  }
  buildTree(distance, angle){
  if (distance >= 1){
    tree.push (new Branch(tree[tree.length-1].x2, tree[tree.length-1].y2, tree[tree.length-1].x2 + cos(angle)*distance/2, tree[tree.length-1].y2 + sin(angle)*distance/2));
    tree[tree.length-2].buildTree(distance/2, angle+45)
  }
}
}