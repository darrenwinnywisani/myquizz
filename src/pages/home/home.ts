import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('slides') slides: any;
 
  slideOptions: any;
  flashCardFlipped: boolean = false;
  flashCardFlippe: boolean = false;
  flashCardFlipp:boolean= false;
  flashCardFlippd:boolean= false;
  flashCardFliped:boolean= false;
  flashCardFlipepd:boolean= false;
  flashCardFlpped:boolean=false;
  flashCardFipped:boolean=false;
  flashCardlipped:boolean=false;
  flashCarFlipped:boolean=false;
  flashCadFlipped:boolean=false;
  flashCrdFlipped:boolean=false;
  flashardFlipped:boolean=false;
  flasCardFlipped:boolean=false;
  flahCardFlipped:boolean=false;
  flshCardFlipped:boolean=false;
  fashCardFlipped:boolean=false;
  lashCardFlipped:boolean=false;
  fflashCardFlipped:boolean=false;
  fllashCardFlipped:boolean=false;
  constructor(public navCtrl: NavController, ) {

  }
 
 
    selectAnswer(){
      this.flashCardFlipped = true;
    }
  
  selectAnswerb(){
    
    this.flashCardFlippe = true;
}

selectAnswert(){
    
  this.flashCardFlipp = true;
}
selectAnswerp(){
    
  this.flashCardFlippd = true;
}
selectAnswerba(){
    
  this.flashCardFliped = true;
}
selectAnswerbo(){
    
  this.flashCardFlipepd = true;

}
selectAnswerboo(){
  this.flashCardFlpped = true;

}

selectAnswerc(){
  this.flashCardFipped = true;

}

selectAnswerch(){
  this.flashCardlipped = true;

}


selectAnswerco(){
  this. flashCarFlipped = true;

}

selectAnswerdr(){
  this.flashCadFlipped = true;

}

selectAnswerhou(){
  this.flashCrdFlipped = true;

}
selectAnswerpen(){
  this.flashardFlipped = true;

}

selectAnswerpenc(){
  this.flasCardFlipped = true;

}
selectAnswerru(){
  this.flahCardFlipped = true;

}
selectAnswersch(){
  this.flshCardFlipped = true;

}
selectAnswerph(){
  this.fashCardFlipped = true;

}
selectAnswersui(){
  this.lashCardFlipped= true;

}
selectAnswertv(){
  this.fflashCardFlipped= true;

}

  selectAnswerwa(){
    this.fllashCardFlipped= true;

}
ionViewDidLoad() {}





Q1:string;
A1="2"
pointQ1=0;

Q2:string;
A2="2"
pointQ2=0;

Q3:string;
A3="2"
pointQ3=0;

Q4:string;
A4="1"
pointQ4=0;

Q5:string;
A5="4"
pointQ5=0;
Results=0;

tQ1():void{
    if(this.Q1===this.A1){
      this.pointQ1=10;
    }
}
tQ2():void{
  if(this.Q2===this.A2){
    this.pointQ2=10;
  }
}
  tQ3():void{
    if(this.Q3===this.A3){
      this.pointQ3=10;
    }
}

tQ4():void{
  if(this.Q4===this.A4){
    this.pointQ4=10;
  }
}

tQ5():void{
  if(this.Q5===this.A5){
    this.pointQ5=10;
  }
}

Result():void{
 
  this.tQ1();
  this.tQ2();
  this.tQ3();
  this.tQ4();
  this.tQ5();


  this.Results=this.pointQ1+this.pointQ2+this.pointQ3+this.pointQ4+this.pointQ5;
 

}
validateAnswer():void{
  if(this.Q1===""){
 
      alert();
  }
  }
}