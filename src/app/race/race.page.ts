import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-race',
  templateUrl: './race.page.html',
  styleUrls: ['./race.page.scss'],
})
export class RacePage implements OnInit {
  positions:number = 6;

  selectedPosition:number = null;
  currentName: string = null;
  currentTime: number = null;

  positionsArr:Array<any> = [];
  racers: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.makePositions();
  }

  resetForm(){
    this.selectedPosition = null;
    this.currentName = null;
    this.currentTime = null;
  }

  makePositions(){ 
    this.positionsArr = [];
    for(let i = 0; i< this.positions; i++){
      this.positionsArr.push({
        value: i,
        txt: (i+1) + 'º' 
      })
    }
  }

  saveRacer(){
    this.positionsArr = this.positionsArr.filter(p => {
      return p.value != this.selectedPosition
    })

    this.racers.push({
      name: this.currentName,
      time: this.currentTime,
      position: this.selectedPosition,
      positionTxt: (this.selectedPosition+1) + 'º'
    });
    this.resetForm();
  }

  makeResult(){
    this.racers.sort(function (a, b) {
      if (a.time > b.time) {
        return 1;
      }
      if (a.time < b.time) {
        return -1;
      }
      return 0;
    })

    this.racers[0].winner = true;
  }
}
