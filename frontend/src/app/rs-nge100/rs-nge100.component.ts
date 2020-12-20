import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rs-nge100',
  templateUrl: './rs-nge100.component.html',
  styleUrls: ['./rs-nge100.component.scss']
})
export class RsNge100Component implements OnInit {

  voltage: number;
  current: number;

  constructor() { }

  setParams(): void {
    console.log("Voltage: ", this.voltage)
    console.log("Current: ", this.current)
  }

  ngOnInit(): void {
  }

}
