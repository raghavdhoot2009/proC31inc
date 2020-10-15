const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var groundobj;
var division1,division2,division3,division4,division5;
var divisionheight=300;
var particle;
var plinkos;

function setup() {
createCanvas(480,800);
groundobj = new ground (240,750,200,400,20);
division1 = new division(0,740,20,divisionheight);
division2 = new division(80,740,10,divisionheight);
division3 = new division(160,740,10,divisionheight);
division4 = new division(320,740,10,divisionheight);
division5 = new division(400,740,10,divisionheight);
division6 = new division(480,740,20,divisionheight);
}



function draw() {
background(0);  
groundobj.display();
division1.display();
division2.display();
division3.display();
division4.display();
division5.display();
division6.display();

}

if(framecount%60===0){
particle.push(new particles(random(width/2-10,width/2+10,),10,10));
}

for (var  j = 40; j <=width;  j=j+50){
    Plinkos.push(new particles(j,75));
}

for (var  j = 15; j <=width-10;  j=j+50){
    Plinkos.push(new particles(j,175));
}

for (var  k = 40; k <=width;  k=k+50 ){
    Plinkos.push(new particles(j,225));
}

for (var  k = 15; k <=width-10;  k=k+50 ){
    Plinkos.push(new particles(j,325));
}
