import { LoginsService } from './../../services/logins.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor( public LoginsService:LoginsService ) { }
}
// this.router.navigate(['/signin']);
