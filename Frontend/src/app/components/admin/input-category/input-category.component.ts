import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Category } from "../../../models/Category";
import { CategoriesService } from "src/app/services/categories.service";
@Component({
  selector: 'app-input-category',
  templateUrl: './input-category.component.html',
  styleUrls: ['./input-category.component.css']
})
export class InputCategoryComponent implements OnInit {
  form: FormGroup;
  category: Category;
  imageData: string;
  constructor(private CategoriesService: CategoriesService) { }

  ngOnInit() {
      this.form = new FormGroup({
      name: new FormControl(null),
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
    this.CategoriesService.addCategory(
    this.form.value.name,
    this.form.value.image);
    this.form.reset();
    this.imageData = null;
  }

}
