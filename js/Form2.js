class Form2 {

    constructor() {
      
      this.back = createButton("BACK");
      this.submit = createButton("SUBMIT")
      this.questions = [];
      this.hints = [];
      this.qid = 1;
      this.hid = 1;
      this.hero = createInput();
      this.heroine = createInput();
      this.song = createInput();
      this.movie = createInput();
      this.getData();
      this.getDataHints();
      this.localdb = [];
      this.localdb2 = []
    }
    
    async getData(){
      var localdb = []
      await db.collection('Questions')
              .onSnapshot((snapshot) => {
                var questions = snapshot.docs.map((document) => document.data());
        this.localdb = questions
      });  
    }
    async getDataHints(){
      var localdb2 = []
      await db.collection('Hints')
              .onSnapshot((snapshot) => {
                var hints = snapshot.docs.map((document) => document.data());
        this.localdb2 = hints
        console.log(hints)
      });  
    }
  
    display(){
      
      push()
      textSize(60);
      fill(197, 57, 125);      
      stroke("white")
      strokeWeight(3)
      textFont("Georgia")
      text("Hero - ",displayWidth/2 - 300 , displayHeight/2 - 200)
      this.hero.position(displayWidth/2 - 300 , displayHeight/2 - 150);
      this.hero.size(250,25)

      text("Heroine - ",displayWidth/2 + 50 , displayHeight/2 - 200)
      this.heroine.position(displayWidth/2 + 50 , displayHeight/2 - 150);
      this.heroine.size(250,25)

      text("Song - ",displayWidth/2 - 300 , displayHeight/2 - 20)
      this.song.position(displayWidth/2 - 300 , displayHeight/2 + 40);
      this.song.size(250,25)

      text("Movie - ",displayWidth/2 + 50 , displayHeight/2 - 20)
      this.movie.position(displayWidth/2 + 50 , displayHeight/2 + 40);
      this.movie.size(250,25)
      pop()

      this.back.position(displayWidth/2 - 660, displayHeight/2 - 360);
      this.back.style("color","purple")

      this.back.mousePressed(()=>{
        gameState = 0;
        this.back.hide();
        this.hero.hide();
        this.heroine.hide();
        this.song.hide();
        this.movie.hide();
        this.submit.hide()
        form.reappear()
          
      })
  
      for (var qid in this.localdb){
        if(this.qid === this.localdb[qid].q_id ){
          this.questions = this.localdb[qid]
        }
      }

      for (var hid in this.localdb2){
        if(this.hid === this.localdb2[hid].h_id ){
          this.hints = this.localdb2[hid]
        }
      }
    
      
      this.submit.position(displayWidth/2 + 520, displayHeight/2 + 120);
      this.submit.size(130,35);
      this.submit.mousePressed(async()=>{

        if(answers.hero === this.hero.value){
          flag = 1;
        }
       
        var aid = this.qid.toString()
        var dbref = await db.collection('Answers').doc(aid);
        dbref.get().then((doc) => {
            var answers = doc.data();
            console.log(answers)
            this.answers = answers
        })
     })
      
      /*if(answers.hero === this.hero.val){
        flag = 1
      }
      if(flag === 4){
        console.log("GO TO QUESTION 2")
        this.qid = this.qid + 1
      }
      else{
        console.log("try-again")
      }*/
    }
    displayQuestions(){
      push()
      textSize(60);
      fill(197, 57, 125);
      stroke("white")
      strokeWeight(3)
      textFont("Georgia")
      text(this.questions.hero,(displayWidth/2 - 300)+170 , displayHeight/2 - 200)
      this.hero.position(displayWidth/2 - 300 , displayHeight/2 - 150);
      this.hero.size(250,25)

      text(this.questions.heroine,(displayWidth/2 + 50)+250 , displayHeight/2 - 200)
      this.heroine.position(displayWidth/2 + 50 , displayHeight/2 - 150);
      this.heroine.size(250,25)

      text(this.questions.song,(displayWidth/2 - 300)+170 , displayHeight/2 - 20)
      this.song.position(displayWidth/2 - 300 , displayHeight/2 + 40);
      this.song.size(250,25)

      text(this.questions.movie,(displayWidth/2 + 50)+200 , displayHeight/2 - 20)
      this.movie.position(displayWidth/2 + 50 , displayHeight/2 + 40);
      this.movie.size(250,25)
     
      pop()
      
      fill(204, 36, 117)
      textSize(23);
      strokeWeight(1)
      text(this.hints.hint1,displayWidth/2 - 670 , displayHeight/2 + 250)
      text(this.hints.hint2,displayWidth/2 - 670 , displayHeight/2 + 300)
      
      textSize(35)
      text("Trivia about the movie : ",displayWidth/2 - 660, displayHeight/2 + 200)
      line(displayWidth/2, displayHeight/2 - 250, displayWidth/2, displayHeight/2 + 110)
      line(displayWidth/2 - 340, displayHeight/2 - 80, displayWidth/2 + 365, displayHeight/2 - 80)

    }
  
  }
  function checkAnswers(){
    if(answers.hero === this.hero.value){
      flag = 1;
    }
  }
  
  
