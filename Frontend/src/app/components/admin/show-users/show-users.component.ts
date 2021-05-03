import { User } from '../../../models/user.model';
import { UsersService } from '../../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  public user: User[]=[];
  public countUser = 0;
  constructor( public UsersService:UsersService ) {
    this.UsersService.getDataUser().subscribe((res: User[])=>{
      this.user = res;
      for(let i = 1; i<=res.length;i++){
        this.countUser++;
      }
    });
   }

  ngOnInit(): void {
  }

}
