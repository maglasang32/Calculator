import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Calculator';

  firstNum!:number;
  secondNum!:number;
  result!:number;

  getValue(value:any){
    this.firstNum = parseInt(value);
  }

  getValue2(value:any){
    this.secondNum = parseInt(value);
  }

  add(){
    this.result=this.firstNum+this.secondNum
  }

  sub(){
    this.result=this.firstNum-this.secondNum
  }

  multi(){
    this.result=this.firstNum*this.secondNum
  }

  div(){
    this.result=this.firstNum/this.secondNum
  }
}