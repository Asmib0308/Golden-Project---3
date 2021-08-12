class Players {

    constructor() {
      this.name1 = createInput('Player1');
      this.name2 = createInput('Player2');
      this.heroB = createInput('Enter the name of the Hero');
      this.heroineB = createInput('Enter the name of the Heroine');
      this.songB = createInput('Enter the name of the Song');
      this.movieB = createInput('Enter the name of the Movie');
      this.triviaB = createInput('Enter some fun trivia about the Movie');
      this.songHintB = createInput('Enter something related to the Song');
      this.actorHintB = createInput('Enter the name of the Hero/Heroine(again)');

      this.back = createButton("BACK");

    }
    
    reappear(){
      this.back.show();
      this.name1.show();
      this.name2.show();
      this.heroB.show();
      this.heroineB.show();
      this.songB.show();
      this.movieB.show();
      this.triviaB.show();
      this.songHintB.show();
      this.actorHintB.show();
    }
  
    display(){
      push()
      textSize(60)
      stroke("white")
      strokeWeight(2)
      fill(204, 36, 117)
      text("Fill in the Answers",displayWidth/2 - 200 , displayHeight/2 - 200)
      pop()
      textSize(25)
      fill(204, 36, 117)
      text("Remember : Don't let your opponent see the answers",displayWidth/2 - 270 , displayHeight/2 - 150)

      
      this.name1.position(displayWidth/2 - 200 , displayHeight/2 - 80);
      this.name1.size(150,30)
      this.name2.position(displayWidth/2 + 100 , displayHeight/2 - 80);
      this.name2.size(150,30)
      text("Hero - ",displayWidth/2 - 240 , displayHeight/2 + 20)
      this.heroB.position(displayWidth/2 - 50 , displayHeight/2);
      this.heroB.size(600,25)
      text("Heroine - ",displayWidth/2 - 240 , displayHeight/2 + 70)
      this.heroineB.position(displayWidth/2 - 50 , displayHeight/2+ 50);
      this.heroineB.size(600,25)
      text("Song - ",displayWidth/2 - 240 , displayHeight/2 + 120)
      this.songB.position(displayWidth/2 - 50 , displayHeight/2 + 100);
      this.songB.size(600,25)
      text("Movie - ",displayWidth/2 - 240 , displayHeight/2 + 170)
      this.movieB.position(displayWidth/2 - 50 , displayHeight/2 + 150);
      this.movieB.size(600,25)
      text("Trivia - ",displayWidth/2 - 240 , displayHeight/2 + 220)
      this.triviaB.position(displayWidth/2 - 50 , displayHeight/2 + 200);
      this.triviaB.size(600,25)
      text("Song Hint - ",displayWidth/2 - 240 , displayHeight/2 + 270)
      this.songHintB.position(displayWidth/2 - 50 , displayHeight/2 + 250);
      this.songHintB.size(600,25)
      text("1 of the Actor  - ",displayWidth/2 - 240 , displayHeight/2 + 320)
      this.actorHintB.position(displayWidth/2 - 50 , displayHeight/2 + 300);
      this.actorHintB.size(600,25)

      this.back.position(displayWidth/2 - 660, displayHeight/2 - 360);
      this.back.style("color","purple")

      this.back.mousePressed(()=>{
        gameState = 0;
        this.back.hide();
        this.name1.hide();
        this.name2.hide();
        this.heroB.hide();
        this.heroineB.hide();
        this.songB.hide();
        this.movieB.hide();
        this.triviaB.hide();
        this.songHintB.hide();
        this.actorHintB.hide();

        form.reappear()          
      })
    }
  }
  