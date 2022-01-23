import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning-alert.component.html',
  // styleUrls: ['./warning-alert.component.css']
  styles: [`
    h4 {
      padding: 20px;
      background-color: mistyrose;
      border: 2px solid red;
    }
  `]
  // inline styling
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
