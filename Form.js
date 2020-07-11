class Form {

  constructor() {
    this.input = createInput("Name");
    this.input1 = createInput("emailID");
    this.button = createButton('Submit');
    this.question = createElement('h2');
    this.question2 = createElement('h2');
    this.question3 = createElement('h2');
    this.title = createElement('h1');
    this.a1 = createButton('Yes');
    this.b1 = createButton('No');
    this.a2 = createButton('Yes');
    this.b2 = createButton('No');
    this.a3 = createButton('100');
    this.b3 = createButton('500');
    this.c3 = createButton('1000');
    this.d3 = createButton('More');
    //this.reset = createButton('Reset');
  }
  hide(){
    this.question.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Survey To Bring about Change");
    this.title.position(displayWidth/2 - 50, 0);
     this.input.position(displayWidth/2 - 40 , displayHeight/2 - 240);
     this.input1.position(displayWidth/2 - 40 , displayHeight/2 - 210);
    this.button.position(displayWidth/2 + 30, displayHeight/2-180);
    this.a1.position(displayWidth/2-570,displayHeight/2-90);
    this.b1.position(displayWidth/2-470,displayHeight/2-90);
    this.a2.position(displayWidth/2-570,displayHeight/2);
    this.b2.position(displayWidth/2-470,displayHeight/2);
    this.a3.position(displayWidth/2-570,displayHeight/2+90);
    this.b3.position(displayWidth/2-470,displayHeight/2+90);
    this.c3.position(displayWidth/2-370,displayHeight/2+90);
    this.d3.position(displayWidth/2-270,displayHeight/2+90);
    //this.reset.position(displayWidth-100,20);

    this.button.mousePressed(()=>{
     // this.input.hide();
      //this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
    });
      //this.question.html("Hello " + player.name)
      this.question.html("a) Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?")
      this.question.position(displayWidth/2 - 570, displayHeight/2-150);
    this.question2.html("b)Would you be willing to contribute a small amount every month for such a program ?");
    this.question2.position(displayWidth/2-570,displayHeight/2-60);
    this.question3.html("c). How much per month would you be willing to pay?");
    this.question3.position(displayWidth/2-570,displayHeight/2+30);
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });

  }
}
