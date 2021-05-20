import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import {ShowUsersComponent} from '../../components/admin/show-users/show-users.component'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public Userservice:UsersService) { }

  ngOnInit(): void {
  }

}
