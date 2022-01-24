var robotP5 = function(a) {

            var x;
            var y;
            var scaling = 2;
            var headWidth = 100 * scaling;
            var headHeight = 100 * scaling;
            var neckWidth;
            var neckHeight;
            var bodyHeight;
            var bodyWidth;
            var footRadius;
            var roundCorners = 10 * scaling;

            // Setup function runs once at the start of program
            a.setup = function() {
                a.textFont("Aldrich");
                var myCanvas = a.createCanvas(800, 800);
                a.smooth();
                a.strokeWeight(3);
                a.background(0);
                x = a.width / 2 - headWidth / 2;
                y = a.height / 2 - headHeight / 2;
                a.textSize(64);
                a.textAlign(a.CENTER);
            }

            // This function sets up the background
            a.backgroundSetup = function() {
                var patternSize = 10;
                a.background(0);
                for (var i = patternSize + 20; i < a.width - 20; i += patternSize + 20) {
                    for (var j = patternSize + 20; j < a.height - 20; j += patternSize + 20) {
                        a.stroke(104, 14, 206, 100);
                        a.noFill();
                        a.ellipse(i, j, patternSize, patternSize);
                    }
                }
                a.textSize(40);
                a.textAlign(a.CENTER);
                a.fill(255);
                a.text("NATO Phonetic Alphabet Robot", 400, 100);

                a.textSize(22);
                a.textAlign(a.RIGHT);
                a.fill(109, 21, 240);
                a.textFont("Outfit");

                a.text("CLICK FOR INSTRUCTIONS", 760, 40);
                a.textSize(50);
                a.textFont("Aldrich");
            }

            // This function formats the text for the robot to speak
            a.drawSpeechBubble = function(message) {
                var messageX = a.width / 2;
                var messageY = y - 90;
                a.strokeWeight(3);
                a.strokeCap(a.ROUND);
                //stroke(109, 21, 240);
                a.fill(109, 21, 240);
                //rect(x-100-10, y-60-10, 100, 50, roundCorners);
                a.textSize(60);
                //fill(0);
                a.textAlign(a.CENTER);
                a.text(message, messageX, messageY);
                //   prvarln(message);
            }

            // This function runs over and over again
            a.draw = function() {
                a.backgroundSetup();

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
                if (a.keyIsPressed === true && (a.keyCode == 37 || a.keyCode == 39)) {
                    if (a.keyCode == 37) {
                        x = x - 10;
                        a.backgroundSetup();
                    } else if (a.keyCode == 39) {
                        // If it’s the right arrow
                        x = x + 10;
                        a.backgroundSetup();
                    }
                }

                // Draw circle on cursor
                a.backgroundSetup(); //clears the window before drawing the circle
                a.fill(255, 70);
                a.noStroke();
                a.ellipse(a.mouseX, a.mouseY, 50, 50);

                // If key is pressed and isn't a coded key, get the key and display the word corresponding to the letter
                if (a.keyIsPressed === true && a.keyCode !== 37 && a.keyCode !== 39) {
                    //  if (a.keyIsPressed === true) {
                    a.backgroundSetup();
                    a.fill(109, 21, 240);
                    switch (a.key) {
                        case "A":
                        case "a":
                            a.drawSpeechBubble("Alpha");
                            break;
                        case "B":
                        case "b":
                            a.drawSpeechBubble("Bravo");
                            break;
                        case "C":
                        case "c":
                            a.drawSpeechBubble("Charlie");
                            break;
                        case "D":
                        case "d":
                            a.drawSpeechBubble("Delta");
                            break;
                        case "E":
                        case "e":
                            a.drawSpeechBubble("Echo");
                            break;
                        case "F":
                        case "f":
                            a.drawSpeechBubble("Foxtrot");
                            break;
                        case "G":
                        case "g":
                            a.drawSpeechBubble("Golf");
                            break;
                        case "H":
                        case "h":
                            a.drawSpeechBubble("Hotel");
                            break;
                        case "I":
                        case "i":
                            a.drawSpeechBubble("India");
                            break;
                        case "J":
                        case "j":
                            a.drawSpeechBubble("Juliet");
                            break;
                        case "K":
                        case "k":
                            a.drawSpeechBubble("Kilo");
                            break;
                        case "L":
                        case "l":
                            a.drawSpeechBubble("Lima");
                            break;
                        case "M":
                        case "m":
                            a.drawSpeechBubble("Mike");
                            break;
                        case "N":
                        case "n":
                            a.drawSpeechBubble("November");
                            break;
                        case "O":
                        case "o":
                            a.drawSpeechBubble("Oscar");
                            break;
                        case "P":
                        case "p":
                            a.drawSpeechBubble("Papa");
                            break;
                        case "Q":
                        case "q":
                            a.drawSpeechBubble("Quebec");
                            break;
                        case "R":
                        case "r":
                            a.drawSpeechBubble("Romeo");
                            break;
                        case "S":
                        case "s":
                            a.drawSpeechBubble("Sierra");
                            break;
                        case "T":
                        case "t":
                            a.drawSpeechBubble("Tango");
                            break;
                        case "U":
                        case "u":
                            a.drawSpeechBubble("Uniform");
                            break;
                        case "V":
                        case "v":
                            a.drawSpeechBubble("Victor");
                            break;
                        case "W":
                        case "w":
                            a.drawSpeechBubble("Whiskey");
                            break;
                        case "X":
                        case "x":
                            a.drawSpeechBubble("X-ray");
                            break;
                        case "Y":
                        case "y":
                            a.drawSpeechBubble("Yankee");
                            break;
                        case "Z":
                        case "z":
                            a.drawSpeechBubble("Zulu");
                            break;
                        default:
                            a.drawSpeechBubble("NOT A LETTER!"); // don't match the switch parameter
                            break;
                    }
                }

                a.fill(0);
                a.strokeWeight(3);
                a.stroke(255);
                a.fill(109, 21, 240);

                // Head

                //Ears
                a.fill(19, 42, 152);
                a.ellipse(x, y + headHeight / 2, 50, 50);
                a.ellipse(x + headWidth, y + headHeight / 2, 50, 50);
                a.fill(109, 21, 240);
                a.rect(x, y, headWidth, headHeight, roundCorners); //main
                //Eyes
                a.ellipse(x + 30, y + headHeight / 2, 20, 20);
                a.ellipse(x + headWidth - 30, y + headHeight / 2, 20, 20);
                //Antenna
                a.line(x + headWidth / 2, y, x + headWidth / 2, y - 40);
               a.ellipse(x + headWidth / 2, y - 40, 20, 20);
                //Mouth
                a.line(
                    x + 30,
                    y + headHeight / 2 + 45,
                    x + headWidth - 30,
                    y + headHeight / 2 + 45
                );

                // Body

                //foot
                a.fill(19, 42, 152);
                footRadius = 150;
                //ellipse(a.width/2, a.height -(footRadius/2 +5), footRadius, footRadius);
                a.ellipse(
                    x + headWidth / 2,
                    a.height - (footRadius / 2 + 5),
                    footRadius,
                    footRadius
                );
                //neck
                neckWidth = headWidth - 30;
                neckHeight = 20;
                a.rect(
                    x - (neckWidth - headWidth) / 2,
                    y + headHeight,
                    neckWidth,
                    neckHeight,
                    roundCorners
                );
                //main
                a.fill(109, 21, 240);
                bodyHeight = a.height / 2 - (headHeight + neckHeight) + 50;
                bodyWidth = headWidth + 50;
                a.rect(
                    x - (bodyWidth - headWidth) / 2,
                    y + (neckHeight + headHeight),
                    bodyWidth,
                    bodyHeight,
                    roundCorners
                );

                //If the mouse is pressed, display instructions
                if (a.mouseIsPressed) {
                    // equivalent to mousePressed == true
                    a.fill(109, 21, 240, 240);
                    a.rect(20, 20, a.width - 40, a.height - 40);
                    a.textAlign(a.CENTER);
                    a.fill(255);
                    a.strokeWeight(0);

                    a.text("INSTRUCTIONS", a.width / 2, a.height - a.height + 120);

                    a.textFont("Outfit");

                    a.textSize(22);
                    a.textAlign(a.LEFT);
                    a.text(
                        "1. Move the robot by pressing the LEFT & RIGHT arrow key",
                        a.width / 2 - 300,
                        a.height - a.height + 200
                    );
                    a.text(
                        "2. Type any letter to get the NATO Phonetic Alphabet word",
                        a.width / 2 - 300,
                        a.height - a.height + 250
                    );
                    a.text(
                        "3. The console logs all the corresponding words to your letter",
                        a.width / 2 - 300,
                        a.height - a.height + 300
                    );
                    a.text(
                        "4. Click for instructions again",
                        a.width / 2 - 300,
                        a.height - a.height + 350
                    );

                }


            }
        }

        var robotP5Insert = new p5(robotP5);
