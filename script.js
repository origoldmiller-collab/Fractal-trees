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
  tree.push(new Branch(width/2, height, 100, 45));
  for (let i = 0; i < 2; i++){
    tree.push(new Branch(tree[i]+));
  }
}

function draw() {
  background(30);
  for (let i = 0; i < tree.length; i++){
      tree[i].display();
  }
}

class Branch {
  constructor(startingx, startingy, disance, angle,) {
    this.starx = startingx;
    this.stary = startingy;
    this.x2 = x2;
    this.y2 = y2;
  }
  display() {
    stroke(255, 0 ,255)
    strokeWeight(5)
    line(this.x1, this.y1, this.x2, this.y2)
  }
}