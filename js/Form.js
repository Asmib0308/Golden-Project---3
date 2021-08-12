class Form {

  constructor() {
    this.input = createInput("Name");
    this.play = createButton('PLAY');
    this.offline = createButton('2 Players');
    this.settings = createButton('settings');
    this.rules = createButton('rules');
  }
   reappear(){
     this.play.show();
     this.offline.show();
     this.input.show();     
     this.settings.show();
     this.rules.show();

     hero.visible = true;
     heroin.visible = true;
     song.visible = true;
     movie.visible = true;
   }

  display(){
    this.input.position(displayWidth/2 - 660 , displayHeight/2 - 330);

    this.play.position(displayWidth/2 - 90, displayHeight/2 + 70);
    this.play.size(210,70)
    this.play.style("fontSize","large")
   
    this.play.mousePressed(()=>{
      gameState = 1;
      form2 = new Form2()
      
      this.input.hide();
      this.play.hide();
      this.offline.hide();
      this.settings.hide();
      this.rules.hide();

      hero.visible = false;
      heroin.visible = false;
      song.visible = false;
      movie.visible = false;
      if(form2)
       form2.back.show()
    })
    

    this.offline.position(displayWidth/2 - 50, displayHeight/2 + 160);
    this.offline.size(135,45)
    this.offline.style("textSize",100)

    this.offline.mousePressed(()=>{
      gameState = 2;
     
   

      this.input.hide();
      this.play.hide();
      this.offline.hide();
      this.settings.hide();
      this.rules.hide();

      hero.visible = false;
      heroin.visible = false;
      song.visible = false;
      movie.visible = false;

      players.reappear()

    })
    
    this.settings.position(displayWidth/2 - 100, displayHeight/2 + 330)
    this.settings.size(60,40)
    this.settings.style("textSize",20)

    this.settings.mousePressed(()=>{
      gameState = 3;

      this.input.hide();
      this.play.hide();
      this.offline.hide();
      this.settings.hide();
      this.rules.hide();

      hero.visible = false;
      heroin.visible = false;
      song.visible = false;
      movie.visible = false;

      settings.reappear()
    })

    this.rules.position(displayWidth/2 + 100, displayHeight/2 + 330);
    this.rules.size(60,40)
    this.rules.style("textSize",20)

    this.rules.mousePressed(()=>{
      gameState = 4;

      this.input.hide();
      this.play.hide();
      this.offline.hide();
      this.settings.hide();
      this.rules.hide();

      hero.visible = false;
      heroin.visible = false;
      song.visible = false;
      movie.visible = false;

      rules.reappear();
    })


    

  }
}
