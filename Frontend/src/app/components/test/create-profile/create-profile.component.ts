import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

import { Profile } from "../../../models/Profile";
import { ProfileService } from "src/app/services/profile.service";
import { CategoriesService } from "src/app/services/categories.service";
import { Category } from "src/app/models/Category";

import { CookieService } from 'ngx-cookie-service';
import { Subscription } from "rxjs";

@Component({
  selector: "app-create-profile",
  templateUrl: "./create-profile.component.html",
  styleUrls: ["./create-profile.component.css"],
})
export class CreateProfileComponent implements OnInit {
  form: FormGroup;
  profile: Profile;
  imageData: string;
  categories: Category[] = [];
  public docSo
  private profileSubscription: Subscription;

  constructor(private profileService: ProfileService,public CategoriesService: CategoriesService, private cookieService: CookieService) {}

  ngOnInit(): void {
    this.CategoriesService.getAllCategory();
    this.profileSubscription = this.CategoriesService
      .getProfilesStream()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
      });
    this.form = new FormGroup({
      productName: new FormControl(null),
      productPrice: new FormControl(null),
      description: new FormControl(null),
      productAddress: new FormControl(null),
      loai_sp: new FormControl(null),
      image: new FormControl(null),
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
    let user = JSON.parse(this.cookieService.get('user'));
    this.profileService.addProfile(
    this.form.value.productName,
    this.form.value.productPrice,
    this.form.value.description,
    this.form.value.productAddress,
    this.form.value.loai_sp,
    user.userAccount,
    this.form.value.ngay_dang,
    this.form.value.image);
    this.form.reset();
    this.imageData = null;
  }
  ngOnDestroy() {
    this.profileSubscription.unsubscribe();
  }

  nextToText(docSo){
    
  }


}
