import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.page.html',
  styleUrls: ['./calc.page.scss'],
})
export class CalcPage implements OnInit {

  leftOp:number = null;
  rightOp:number = null;
  operation:any = null;
  result:number = null;

  constructor() { }

  ngOnInit() {
  }

  reset(){
    this.result = null;
    this.operation = null;
    this.rightOp = null;
    this.leftOp = null;
  }

  selectOperation(operation: String){
    this.operation = operation;
  }

  selectNumber(value: string){
    if(this.operation){
      const str = this.rightOp ? this.rightOp.toString() : '';
      this.rightOp = parseInt(str + value);
    } else {
      const str = this.leftOp ? this.leftOp.toString() : '';
      this.leftOp = parseInt( str + value);
    }
  }

  getResult(){
    switch (this.operation) {
      case '/':
        this.result = this.leftOp / this.rightOp;
        break;
      case '*':
        this.result = this.leftOp * this.rightOp;
        break;
      case '-':
        this.result = this.leftOp - this.rightOp;
        break;
      case '+':
        this.result = this.leftOp + this.rightOp;
        break;
      default:
        break;
    }
  }
}
