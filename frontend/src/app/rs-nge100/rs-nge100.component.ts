import { Component, OnInit } from '@angular/core';

// Custom modules
import { DashboardService } from '../dashboard.service'

@Component({
  selector: 'app-rs-nge100',
  templateUrl: './rs-nge100.component.html',
  styleUrls: ['./rs-nge100.component.scss']
})
export class RsNge100Component implements OnInit {

  voltage: number;
  current: number;

  constructor(private httpService: DashboardService) { }

  setParams(): void {
    console.log("Voltage: ", this.voltage)
    console.log("Current: ", this.current)
    this.httpService.setParams(this.voltage, this.current).subscribe((info) => console.log(info))
  }

  ngOnInit(): void {
  }

}
