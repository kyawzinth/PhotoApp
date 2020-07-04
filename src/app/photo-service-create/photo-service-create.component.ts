import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {PhotoService} from '../photo-service/photo.service';
import {ImageService} from '../image-service/image.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-photo-service-create',
  templateUrl: './photo-service-create.component.html',
  styleUrls: ['./photo-service-create.component.css']
})
export class PhotoServiceCreateComponent implements OnInit {

  form: FormGroup;
  title='Photo Site';
  imageUrl: string;


  constructor(private http:HttpClient,
              private fb:FormBuilder,
              private photoService:PhotoService,
              private imageService:ImageService,
              private router:Router) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      name:['',Validators.required,Validators.minLength(3)],
      address:['',Validators.required,Validators.minLength(3)],
      uploadTime:['',Validators.required,Validators.minLength(3)],
      email:['',Validators.required,Validators.minLength(3)],
      image:['',Validators.required],
    })
  }

  addPackage(){
    let props = this.form.get('packages')as FormArray
    props.push(this.fb.group({
      packageName:['',Validators.required,Validators.minLength(3)],
      description:['',Validators.required,Validators.minLength(3)],
      packageImage:['',Validators.required],
    }))
  }

  removePackage(index:any){
    let props = this.form.get('packages') as FormArray
    props.removeAt(index);
  }

  imgUpload = false;
  imgUpload2  = false;


  upload(file: File, fc: AbstractControl){

    if (this.form.get('image') == fc){
      this.imgUpload = true;
    }

    else {
      this.imgUpload2 = true;
    }

    this.imageService.upload(file).subscribe(
      data =>fc.setValue(data.imagePath)
    )
  }

  preview(file: any, photo: AbstractControl){
    let reader = new FileReader;
    reader.onloadend = () => {
      photo.setValue(reader.result);
    }
    reader.readAsDataURL(file);
    this.imgUpload2 = false;
  }

  save(){
    this.photoService.createPhoto(this.form.value).subscribe(
      data=> this.router.navigateByUrl('hotel')
    )
     alert('SUCCESS');

  }



}
