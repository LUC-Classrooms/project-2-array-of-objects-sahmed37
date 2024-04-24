/*
 Project 2 - Array of Objects
 Name: Sofia Ahmed
 Comments: 
 */

/*** 
 * Please see the full assignment instructions in COMP 125 on Sakai (or under the "Markdown" tab)
 * Make an array of objects of the same type. Start by creating an object constructor funciton. Test it with individual object instances. Then create an array and initialize it with objects created from your constructor.
 * Use the draw() function to display and move your objects independently on the canvas.
***/

// Global Variables go here
var diamond = new Array(50)
var hearts = new Array(50)// or should I do star?
var obj1, obj2;

function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600 x 400 pixel drawing canvas
  
  createCanvas(320, 240);
  obj1 = new Heart(100, 100);
  obj2 = new Heart(200, 100);

  
}

function draw(){
  background(200); //light gray background
  //obj1.display();
  //obj2.display();
}

function Heart(_x, _y){
  this.x = _x;
  this.y = _y;
  
  this.display = function(){
    push()
    translate(this.x, this.y)
    fill("red");
    noStroke();
    ellipse(0, 0, 5)
    ellipse(-20, -15, 50, 55)
    ellipse(20, -15, 50, 55)
    triangle(-42, 0, 42, 0, 0, 40)
    pop()
  }
  
}

