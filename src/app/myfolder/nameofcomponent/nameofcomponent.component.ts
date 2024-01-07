import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nameofcomponent',
  templateUrl: './nameofcomponent.component.html',
  styleUrls: ['./nameofcomponent.component.css']
  
  
})
export class NameofcomponentComponent {

 
  // loggedIn: boolean=false;
  // myName:string;

  @Input() loggedIn:boolean  ;


}
