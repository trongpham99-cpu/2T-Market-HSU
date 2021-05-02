import { LoginsService } from './../../services/logins.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  public user: any;
  constructor( public LoginsService:LoginsService ) { }
}
// this.router.navigate(['/signin']);
