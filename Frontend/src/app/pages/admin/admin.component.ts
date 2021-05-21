import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private UsersService:UsersService, private ProfileService:ProfileService ) { }

  ngOnInit(): void {
    this.getDataUsers();
  }
  public user:any; choDuyet:any ; countUser = 0;countSpChoDyet = 0;
  async getDataUsers(){
    await this.UsersService.getDataUsers().subscribe(data =>{
      this.user = data;
      for(let i=0; i < this.user.length;i++){
        this.countUser++;
      }
    })
  }
  // async getSpChoDuyet(){
  //   await this.ProfileService.getUserPost().subscribe(data =>{
  //     this.choDuyet = data;
  //     console.log(data)
  //     for (let i = 0; i<this.choDuyet.length; i++){
  //       this.countSpChoDyet++;
  //     }
  //     console.log(this.countSpChoDyet)
  //   })
  // }
}
