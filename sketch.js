var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var form;
var form2;
var offline;
var rules;
var title,guru;
var hero, heroin, song, movie;
var points = 30;
var db

function preload(){
  gameback = loadImage("img/4.png")
  heroI = loadImage("img/hero2.png")
  heroinI = loadImage("img/heroin2.png")
  movieI = loadImage("img/movie2.png")
  songI = loadImage("img/song2.png")
  titleI = loadImage("img/title.png")
  guruI = loadImage("img/guru.png")
  ticketI = loadImage("img/ticket.png")
}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  db = firebase.firestore()
  form = new Form()
  //offline = new Players()
  //settings = new Settings()
  //rules = new Rules()


  title = createSprite(displayWidth/2 + 20 , displayHeight/2 - 300)
  title.addImage(titleI)
  title.scale = 2.1;
  
  guru = createSprite(displayWidth/2 - 350 , displayHeight/2 - 100)
  guru.addImage(guruI)
  guru.scale = 1.8;
  
  hero = createSprite(displayWidth/2 - 115 , displayHeight/2 - 180)
  hero.addImage(heroI)
  hero.scale = 0.7;

  heroin = createSprite(displayWidth/2 + 156 , displayHeight/2 - 190)
  heroin.addImage(heroinI)
  heroin.scale = 0.66;

  song = createSprite(displayWidth/2 - 120 , displayHeight/2 - 60)
  song.addImage(songI)
  song.scale = 0.55;

  movie = createSprite(displayWidth/2 + 135 , displayHeight/2 - 80)
  movie.addImage(movieI)
  movie.scale = 0.65;

  
}


function draw(){
  background(gameback)

  textSize(15)
  stroke(204, 36, 117)
  strokeWeight(1)
  fill(204, 36, 117)
  text("Bolly coins : " + points,displayWidth/2 + 570, displayHeight/2 - 360)

  if (gameState === 0){
    form.display()
    line(displayWidth/2, displayHeight/2 - 230, displayWidth/2, displayHeight/2)
    line(displayWidth/2 - 280, displayHeight/2 - 120, displayWidth/2 + 320, displayHeight/2 - 120)
   }  
  
   if(gameState === 1 ){
    console.log("check")
    form2.display()
    form2.displayQuestions()
  }
  if (gameState === 2){   
    //offline.display()
   }

  if (gameState === 3){   
  //settings.display()
  }

  if (gameState === 4){   
//  rules.display()
  }
  
  drawSprites();
}
