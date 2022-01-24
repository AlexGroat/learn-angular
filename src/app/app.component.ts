import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //styles: [`
// h3 {
  // color: red;
//}
//`] can use the styles section to write css here in the component, cant combine style urls and styles, must choose one
})
export class AppComponent {
  userName: '';
  password = false;
  log = []

 onToggleDetails() {
  this.password = !this.password;
  // this.log.push(this.log.length + 1);
  this.log.push(new Date())
 }
}
