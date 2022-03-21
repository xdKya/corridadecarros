class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Digite seu nome");
    this.playButton = createButton("Jogar");
    this.titleImg = createImg("./assets/TITULO.png", "nome do jogo");
    this.greeting = createElement("h2");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  setElementPosition(){
    this.titleImg.position(120,50);
    this.input.position(width/2 -100 ,height/2 -100);
    this.playButton.position(width/2 -80,height/2 -50);
    this.greeting.position(width/2,height/2 -100);

  }

  setElementStyle(){
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");

  }

  display(){
    this.setElementPosition();
    this.setElementStyle();

  }
}

 