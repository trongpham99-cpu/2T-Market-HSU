import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Ads } from "../../../models/Ads";
import { AdsService } from "src/app/services/ads.service";
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-create-ads',
  templateUrl: './create-ads.component.html',
  styleUrls: ['./create-ads.component.css']
})
export class CreateAdsComponent implements OnInit {
  form: FormGroup;
  ads: Ads;
  imageData: string;
  adss: Ads[]=[];
  private profileSubscription: Subscription;
  public count =0;
  constructor(private AdsService: AdsService) { }


  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null),
      image: new FormControl(null),
    });
    this.AdsService.getAllAds();
    this.profileSubscription = this.AdsService
      .getProfilesStream()
      .subscribe((ads: Ads[]) => {
        this.adss = ads;
        for(let i =0;i<ads.length;i++){
          this.count++
        }
      });
  }

  onFileSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    this.AdsService.addAds(
    this.form.value.name,
    this.form.value.image);
    this.form.reset();
    this.imageData = null;
  }

  ngOnDestroy() {
    this.profileSubscription.unsubscribe();
  }

}
