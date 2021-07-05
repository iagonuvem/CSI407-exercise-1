import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fuel',
  templateUrl: './fuel.page.html',
  styleUrls: ['./fuel.page.scss'],
})
export class FuelPage implements OnInit {
  totalLiters = null;
  totalKms = null;
  avgConsumption = null;
  avgRange = null;
  avgBalance = null;

  liter = null;
  km = null;

  fuelList:Array<any> = []
  constructor() { }

  ngOnInit() {
  }

  reset(){
    this.km = null;
    this.liter = null;
  }

  save(){
    this.fuelList.push({
      km: this.km,
      liter: this.liter
    })
    this.reset();
  }

  async makeResult(){
    let liters = 0;
    let kms = 0;

    await this.fuelList.map(f => {
      liters += f.liter;
      kms += f.km
    })

    this.totalLiters = liters;
    this.totalKms = kms;
    this.avgConsumption = liters / this.fuelList.length;
    this.avgRange = kms / this.fuelList.length;
    this.avgBalance = kms / liters;
  }

}
