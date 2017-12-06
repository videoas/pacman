//объявляет Pacman
var pacman = {
  image:"pac.png",
  score:0,
  hp:100,
  left:0,
  top:0,

  show:function(){

    var div = document.querySelector('#map')
    div.innerHTML ='<img src="'+this.image+'" style="left: '+ this.left+'px;top:'+this.top+'px;">'
  },
  moveLeft:function(){
    if(this.left >=25){
   this.left +=-25;
    }
    this.show();
    if(this.left>=125&&this.left<=225&&this.top>=125&&this.top<=225){
       this.hp=this.hp-10;
      alert("lives-10");
      alert("There are still lives"+this.hp);
     }
       if(this.hp==10){ this.image="pac1.png";}
    },
  moveTop:function(){
    if(this.top>=25){
    this.top +=-25;}
    this.show();
    if(this.left>=125&&this.left<=225&&this.top>=125&&this.top<=225){
      this.hp=this.hp-10;
     alert("lives-10");
       alert("There are still lives"+this.hp);
     }
    if(this.hp==10){ this.image="pac1.png";}
  },
  moveRight:function(){
    if(this.left<=425){
    this.left +=25;}
     this.show();
       if(this.left>=125&&this.left<=225&&this.top>=125&&this.top<=225){
       this.hp=this.hp-10;
      alert("lives-10");
      alert("There are still lives"+this.hp);
    }
      if(this.hp==10){this.image="pac1.png";}
  },
  moveBottom:function(){
    if(this.top<=425){
    this.top +=25;}
    this.show();
      if(this.left>=125&&this.left<=225&&this.top>=125&&this.top<=225){
      this.hp=this.hp-10;
     alert("lives-10");
     alert("There are still lives"+this.hp);
      }
     if(this.hp==10){
       this.image="pac1.png";}
    }
};
