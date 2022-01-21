float x;
float y;
int scale = 2;
int headWidth = 100*scale;
int headHeight = 100*scale;
int neckWidth;
int neckHeight;
int bodyHeight;
int bodyWidth;
int footRadius;
int roundCorners = 10*scale;
PFont myFont;
PFont otherFont;

// Setup function runs once at the start of program
void setup() {
  size(800, 800);
  smooth();
  strokeWeight(3);
  background(0);
  x = width/2 - headWidth/2;
  y = height/2 - headHeight/2;
  textSize(64);  
  textAlign(CENTER);
  myFont = createFont("Aldrich-Regular.ttf", 32);
  otherFont = createFont("Open Sans", 32);
  textFont(myFont);
//  String[] fontList = PFont.list();
//printArray(fontList);
}

// This function sets up the background 
void backgroundSetup() {
  int patternSize = 10;
  background(0);
  for (int i = patternSize +20; i < width -20; i += patternSize + 20) {
    for (int j = patternSize +20; j < height -20; j += patternSize + 20) {
      stroke(104, 14, 206, 100);
      noFill();
      ellipse(i, j, patternSize, patternSize);
    }
  }
    textFont(myFont);
  textSize(40);
  textAlign(CENTER);
  fill(255);
  text("NATO Phonetic Alphabet Robot", 400, 100);
    textFont(otherFont);

  textSize(22);
  textAlign(RIGHT);
  fill(109, 21, 240);
  text("CLICK FOR INSTRUCTIONS", 760, 40);
    textSize(50);
        textFont(myFont);

}

// This function formats the text for the robot to speak
void drawSpeechBubble(String message) {
  float messageX = width /2;
  float messageY = y - 90;
   strokeWeight(3);
  strokeCap(ROUND);
  //stroke(109, 21, 240);
  fill(109, 21, 240);
  //rect(x-100-10, y-60-10, 100, 50, roundCorners);
  textSize(60);
  //fill(0);
  textAlign(CENTER);
  text(message, messageX, messageY);
  println(message);
}

// This function runs over and over again
void draw() {
  backgroundSetup();

  // Have the robot follow the cursor
  //if (mouseX - headWidth/2 > x) {   
  //  backgroundSetup();
  //  x += 2;
  //}   
  //if (mouseX - headWidth/2 < x) {  
  //  backgroundSetup();
  //  x -= 2;
  //}

  // When moving left and right with arrow keys, the robot moves 
  if (keyPressed && (key == CODED)) {  // If it’s a coded key    
    if (keyCode == LEFT) {        // If it’s the left arrow      
      x = x -3;
      backgroundSetup();
    } else if (keyCode == RIGHT) {   // If it’s the right arrow   
      x= x + 3;
      backgroundSetup();
    }
  } 

  // Draw circle on cursor
  backgroundSetup();//clears the window before drawing the circle
  fill(255, 70);
  noStroke();
  ellipse(mouseX, mouseY, 50, 50);

  
  // If key is pressed and isn't a coded key, get the key and display the word corresponding to the letter
  if (keyPressed && (key != CODED)) {
    backgroundSetup();
  fill(109, 21, 240);
    switch(key) {
    case 'A': 
    case 'a':
      drawSpeechBubble("Alpha");
      break;
    case 'B': 
    case 'b':
      drawSpeechBubble("Bravo");
      break;
    case 'C': 
    case 'c':
      drawSpeechBubble("Charlie");
      break;
    case 'D': 
    case 'd':
      drawSpeechBubble("Delta");
      break;
    case 'E': 
    case 'e':
      drawSpeechBubble("Echo");
      break;
    case 'F': 
    case 'f':
      drawSpeechBubble("Foxtrot"); 
      break;
    case 'G': 
    case 'g':
      drawSpeechBubble("Golf"); 
      break;
    case 'H': 
    case 'h':
      drawSpeechBubble("Hotel"); 
      break;
    case 'I': 
    case 'i':
      drawSpeechBubble("India"); 
      break;
    case 'J': 
    case 'j':
      drawSpeechBubble("Juliet"); 
      break;
    case 'K': 
    case 'k':
      drawSpeechBubble("Kilo"); 
      break;
    case 'L': 
    case 'l':
      drawSpeechBubble("Lima"); 
      break;
    case 'M': 
    case 'm':
      drawSpeechBubble("Mike"); 
      break;
    case 'N': 
    case 'n':
      drawSpeechBubble("November"); 
      break;
    case 'O': 
    case 'o':
      drawSpeechBubble("Oscar"); 
      break;
    case 'P': 
    case 'p':
      drawSpeechBubble("Papa");       
      break;
    case 'Q': 
    case 'q':
      drawSpeechBubble("Quebec"); 
      break;
    case 'R': 
    case 'r':
      drawSpeechBubble("Romeo"); 
      break;
    case 'S': 
    case 's':
      drawSpeechBubble("Sierra"); 
      break;
    case 'T': 
    case 't':
      drawSpeechBubble("Tango"); 
      break;
    case 'U': 
    case 'u':
      drawSpeechBubble("Uniform"); 
      break;
    case 'V': 
    case 'v':
      drawSpeechBubble("Victor"); 
      break;
    case 'W': 
    case 'w':
      drawSpeechBubble("Whiskey"); 
      break;
    case 'X': 
    case 'x':
      drawSpeechBubble("X-ray"); 
      break;
    case 'Y': 
    case 'y':
      drawSpeechBubble("Yankee"); 
      break;
    case 'Z': 
    case 'z':
      drawSpeechBubble("Zulu"); 
      break;
    default:             
      drawSpeechBubble("NOT A LETTER!");   // don't match the switch parameter
      break;
    }
  }

  fill(0);
  strokeWeight(3);
  stroke(255);
  fill(109, 21, 240);

  // Head
  
  //Ears
  fill(19, 42, 152);
  ellipse(x, y + headHeight/2, 50, 50); 
  ellipse(x + headWidth, y + headHeight/2, 50, 50);
  fill(109, 21, 240);
  rect(x, y, headWidth, headHeight, roundCorners); //main
  //Eyes
  ellipse(x + 30, y + headHeight/2, 20, 20); 
  ellipse(x + headWidth - 30, y + headHeight/2, 20, 20);
  //Antenna
  line(x + headWidth/2, y, x + headWidth/2, y - 40);
  ellipse(x + headWidth/2, y - 40, 20, 20); 
  //Mouth
  line(x + 30, y + headHeight/2 +45, x + headWidth - 30, y + headHeight/2 +45);

  // Body
  
  //foot
  fill(19, 42, 152);
  footRadius = 150;
  //ellipse(width/2, height -(footRadius/2 +5), footRadius, footRadius);
  ellipse(x + headWidth/2, height-(footRadius/2 +5), footRadius, footRadius);
  //neck
  neckWidth = headWidth - 30;
  neckHeight = 20;
  rect(x - (neckWidth - headWidth)/2, y + headHeight, neckWidth, neckHeight, roundCorners);
  //main
  fill(109, 21, 240);
  bodyHeight = height/2 - (headHeight + neckHeight)+50;
  bodyWidth = headWidth + 50;
  rect(x - (bodyWidth - headWidth)/2, y + (neckHeight + headHeight), bodyWidth, bodyHeight, roundCorners);

  //If the mouse is pressed, display instructions
  if (mousePressed) {  // equivalent to mousePressed == true 
    fill(109, 21, 240, 240);
    rect(20, 20, width-40, height-40);
    textAlign(CENTER);
    fill(255);
    text("INSTRUCTIONS", width/2, height-height + 120);
            textFont(otherFont);

    textSize(22);
    textAlign(LEFT);

    text("1. Move the robot by pressing the LEFT & RIGHT arrow key", width/2 -300, height-height + 200);
    text("2. Type any letter to get the NATO Phonetic Alphabet word", width/2-300, height-height + 250);
    text("3. The console logs all the corresponding words to your letter", width/2-300, height-height + 300);
    text("4. Click for instructions again", width/2-300, height-height + 350);
  }
}
