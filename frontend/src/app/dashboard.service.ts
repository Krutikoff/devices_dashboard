import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Custom modules
import { API_URL } from './env';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  setParams(voltage: number, current: number) {
    console.log("START setValue")
    return this.http.post(`${API_URL}`, { voltage: voltage, current: current });
  }

}
