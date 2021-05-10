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
  constructor( public UsersService:UsersService ) {
    this.UsersService.getDataUser().subscribe((res: User[])=>{
      this.user = res;
      for(let i = 0; i<res.length;i++){
        this.countUser++;
        let str = String(res[i].ngay_dang_ky);
        res[i].ngay_dang_ky = new Date(str).toString().split('T')[0];
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
      const imgHeight = canvas.height *208/canvas.width;
      doc.addImage(imgData,0,0,208,500);
      doc.save("report.pdf");
    })
  }

}
