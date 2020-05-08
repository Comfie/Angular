import { Component } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  surname = 'Nyatsine';
  meal = 'Rice and beef';
  loadState =  'loading......99%';

  onClickChange(){
    this.loadState = 'finished';
  }
}
