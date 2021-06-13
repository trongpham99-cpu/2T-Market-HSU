import { element } from 'protractor';
import { User } from '../../../models/user.model';
import { UsersService } from '../../../services/users.service';
import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {
  public ngay;
  public user: User[]=[];
  public countUser = 0;
  public str;
  constructor( public UsersService:UsersService ) {
    this.UsersService.getDataUsers().subscribe((res: User[])=>{
      this.user = res;
      for(let i = 0; i<res.length;i++){
        this.countUser++;
         this.str = String(res[i].ngay_dang_ky);
      }
    });
   }
  ngOnInit(): void {
  }

  public exportAsPDF()
  {
    const element = document.getElementById('table');

    html2canvas(element).then((canvas)=>{
      const imgData = canvas.toDataURL('image/png');
      const doc = new jspdf()
      const imgHeight = canvas.height * 280/canvas.width;
      doc.addImage(imgData,20,25,170,imgHeight);
      doc.save("report.pdf");
    })
  }

}
