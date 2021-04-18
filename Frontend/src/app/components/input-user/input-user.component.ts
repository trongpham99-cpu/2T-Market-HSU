import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-input-user',
  templateUrl: './input-user.component.html',
  styleUrls: ['./input-user.component.css'],
  providers: [UsersService]
})
export class InputUserComponent implements OnInit {

  constructor(public UsersService:UsersService,private http:HttpClient) { }

  ngOnInit(): void {
  }

}
