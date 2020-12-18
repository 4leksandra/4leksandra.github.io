var artTherapy = function (a) {

    var img;
    var crayons;
    var color;
    var colorSelected;

    var xPos = a.mouseX;
    var yPos = a.mouseY;

    a.preload = function () {
        img = a.loadImage('https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80');
    }

    a.setup = function () {
        a.tint(255, 100);
        var canvas = a.createCanvas(1000, 500);
        a.image(img, 300, 0, 700, 500);
        canvas.parent("artTherapy");

    }

    a.draw = function () {

        //Adding template for zentangles!
        a.noTint();
        a.tint(0);
        a.strokeWeight(5);
        a.stroke(50);
        a.line(0 + 300, 0, 233 + 300, 500);
        a.line(233 + 300, 500, 350 + 300, 0);
        a.line(350 + 300, 0, 466 + 300, 500);
        a.line(466 + 300, 500, 700 + 300, 0);

        //Adding colors
        //pink
        a.fill(252, 23, 139);
        a.noStroke();
        a.rect(0, 100-80, 150, 40);
        a.triangle(150, 100-80, 150, 140-80, 180, 120-80);

        //Orange
        a.fill(249, 134, 56);
        a.noStroke();
        a.rect(0, 100, 150, 40);
        a.triangle(150, 100, 150, 140, 180, 120);

         //Yellow
         a.fill(255, 255, 82);
         a.noStroke();
         a.rect(0, 100 + 80, 150, 40);
         a.triangle(150, 100 + 80, 150, 140 + 80, 180, 120 + 80); 
        
        //green
         a.fill(43, 253, 168);
         a.noStroke();
         a.rect(0, 100 + 80 +80, 150, 40);
         a.triangle(150, 100 + 80 +80, 150, 140 + 80 +80, 180, 120 + 80 +80);

        //blue
        a.fill(75, 36, 251);
        a.noStroke();
        a.rect(0, 100 + 80 + 80 +80, 150, 40);
        a.triangle(150, 100 + 80 + 80 +80 , 150, 140 + 80 + 80 +80, 180, 120 + 80 + 80 +80);

        //Purple
        a.fill(179, 77, 226);
        a.noStroke();
        a.rect(0, 100 + 80 + 80 +80 +80, 150, 40);
        a.triangle(150, 100 + 80 + 80 +80 +80, 150, 140 + 80 + 80 +80 +80, 180, 120 + 80 + 80 +80 +80);

         //Adding drawing options

        //If not on canvas
        if (a.mouseX <= 305) {
            //don't draw
            a.noStroke();
            a.line(255);

            //when clicking markers, set color to marker color
            if (a.mouseIsPressed && a.mouseX < 200) { //doesn't work when i change mouseIsPressed
                color = a.get(a.mouseX, a.mouseY);
                console.log(color);
            }
            //when on canvas
        } else {
            //draw
            if (a.mouseIsPressed) {
                a.strokeWeight(16);
                //if no marker was pressed set to 0
                if (color === undefined){
                    color = [0,0,0,0];
                }
                // set color to color of marker pressed
                a.stroke(color);
                //draw
                a.line(a.mouseX, a.mouseY, a.pmouseX, a.pmouseY);
            }
        }


    }
}
//selector //draw

//if mouseX and mouseY value is gray - draw

//if not, color picker 
//     function mousePressed(){
// //boolean drawing -- true or false
// //on mousepressed - true
//     }
//     // function mouseReleased false
// 

var artTherapyP5 = new p5(artTherapy);

var state = false;
var img = "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80";
var img2 = "https://images.unsplash.com/photo-1587533042502-1209d3f2d891?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2155&q=80";
var img3 = "https://images.unsplash.com/photo-1444212477490-ca407925329e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2560&q=80";
var imgs = [];
var i = 0;

var loaded1;
var loaded2;
var loaded3;

var visualization = function (b) {

    var counter = 0;
    var opacity1 = 0;
    var opacity2 = 250;
    var reachedTop = false;
    var reachedBottom = false;

    b.preload = function () {

        //load all images + save them in imgs array
        imgs[0] = b.loadImage(img);
        imgs[1] = b.loadImage(img2);
        imgs[2] = b.loadImage(img3);


    }

    b.setup = function () {
        var canvas = b.createCanvas(700, 500);
        canvas.parent("visualization");
        //set up first image on canvas
        b.image(imgs[i], 0, 0, 700, 500);
    }

    b.draw = function () {

    //     //put all images into p5

    //     b.image(imgs[0], 0, 0, 700, 500);
    //     b.image(imgs[1], 0, 0, 700, 500);
    //     b.image(imgs[2], 0, 0, 700, 500);


    // if (b.mouseIsPressed){
    //     counter += 1;
    //     console.log("COUNTER: " + counter);
    // }

    //     if (counter == 0){
    //         //show first image 

    //         b.tint(255,opacity1);
    //         b.image(imgs[0], 0, 0, 700, 500);
    //         b.tint(255,opacity2);
    //         b.image(imgs[1],0,0,700,500);
    //         b.image(imgs[2],0,0,700,500);

    //         if(reachedTop){
    //             opacity1 = 250;
    //         }

    //         else if(reachedBottom){
    //             opacity2 = 0;
    //         }

    //         else{
    //         opacity1 =  opacity1 + 20;
    //         opacity2 =  opacity2 - 20;
            

    //         if(opacity1 >= 250){
    //             reachedTop = true;
    //         }
    //         if(opacity2 <= 0){
    //             reachedBottom = true;
    //         }

    //     }
            
            

    //     }

    //     else if (counter == 1){

    //         //show first image 

    //         b.tint(255,opacity1);
    //         b.image(imgs[1],0,0,700,500);

    //         b.tint(255,opacity2);
    //         b.image(imgs[0], 0, 0, 700, 500);
    //         b.image(imgs[2],0,0,700,500);

    //         if(reachedTop){
    //             opacity1 = 250;
    //         }

    //         else if(reachedBottom){
    //             opacity2 = 0;
    //         }

    //         else{
    //         opacity1 =  opacity1 + 20;
    //         opacity2 =  opacity2 - 20;
            

    //         if(opacity1 >= 250){
    //             reachedTop = true;
    //         }
    //         if(opacity2 <= 0){
    //             reachedBottom = true;
    //         }

    //     }
            
            

    //     }

    //     else if (counter === 2){

    //     }

    //     else{

    //     }
    //     }

        


        if (b.mouseIsPressed) {
            i = i + 1;

            if (i > 2) {
                i = 0;
            }
            b.image(imgs[i], 0, 0, 700, 500);

        }
    
    }


}




var visualizationP5 = new p5(visualization);

var state = false;
var breathingExercises = function (c) {

    var x = 0;
    var speed = 100;
    var size1 = 0;
    var size2 = 50;
    var inhaleSpeed = 0.7;
    var color = 0;
    var colorState = false;

    c.setup = function () {
        var canvas = c.createCanvas(700, 500);
        c.background(200);
        canvas.parent("breathingExercises");
        c.rectMode(c.CENTER);
        c.noStroke();
        c.fill(255);
        c.colorMode(c.HSB, 100);
    }

    c.draw = function () {
        // c.textSize(32);
        // c.text(x, 100,100);
        // c.textSize(32);
        // c.text(x, 100,100);


        c.background(95);

        //First square group
        c.translate(c.width / 2, c.height / 2);
        c.rotate(c.radians(x / 20));
        c.fill(color, 100, 100, 80 * size1);
        c.rect(0, 0, size1, size1);
        c.fill(245);
        c.rect(0, 0, size2 / 2, size2 / 2);

        //Second square group
        c.rotate(c.radians(x / 20));
        c.fill(color, 100, 100, 30);
        c.rect(0, 0, size1, size1);
        c.fill(245);
        c.rect(0, 0, size2 / 2, size2 / 2);

        c.rotate(c.radians(x / 20));
        c.fill(color, 100, 100, 30);
        c.rect(0, 0, size1, size1);
        c.fill(245);
        c.rect(0, 0, size2 / 2, size2 / 2);

        x = x + 10;

        if (color >= 100) {
            colorState = true;
        }

        if (color <= 70) {
            colorState = false;
        }

        if (colorState == false) {
            color = color + 0.1;
        } else {
            color = color - 0.1;
        }



        // too big -- get smaller
        if (size1 >= 200 && size2 >= 150) {
            state = true;

        }

        // too small -- get big
        if (size1 <= 50 || size2 <= 0) {
            state = false;
        }

        if (state == false) {
            size1 = size1 + inhaleSpeed
            size2 = size2 + inhaleSpeed;;

        } else {
            size1 = size1 - inhaleSpeed;
            size2 = size2 - inhaleSpeed;

        }


        c.textSize(40);


    }

}

var breathingExercisesP5 = new p5(breathingExercises);



// var artTherapy = function(a){

//     a.setup = function (){
//         var canvas = a.createCanvas(500,500);
//         a.background(255,0,0);
//         canvas.parent("artTherapy");
//     }

//     a.draw = function (){

//     }

// }

// var artTherapyP5 = new p5(artTherapy);



// function preload(){
//     img = loadImage("https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80");
// }

// function setup(){
//     // createCanvas(windowWidth, windowHeight);
//     background(255);
//     image(img, 0, 0, windowWidth, windowHeight);
// }

// function draw(){
//     c = get(mouseX, mouseY);
//     fill(c);
//     ellipse(500,500,30,30);}