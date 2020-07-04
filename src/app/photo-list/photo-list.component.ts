  import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PhotoService} from '../photo-service/photo.service';
import {FormArray, FormBuilder, FormControl, FormGroup, NgModel, Validators} from '@angular/forms';
import {ImageService} from '../image-service/image.service';
import {Photo} from '../photo.model';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  constructor(private router:Router,
              private photoServie:PhotoService,
              private fb:FormBuilder,
              private imageService:ImageService,
              private modalService: NgModel
              ) { }

 photoList:Photo[];

  form:FormGroup;
  title='Photography';
  imageUrl: string;

  ngOnInit(): void {
    this.photoServie.findAllPhoto().subscribe(
      data=>this.photoList = data
    )
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required, Validators.minLength(3)]],
      image: ['', Validators.required],
      uploadTime: ['', [Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      // packages: this.fb.array([])
    });
    this.addPackage();

  }

  save(){
    location.reload();
    this.photoServie.createPhoto(this.form.value).subscribe(
      data=>this.router.navigateByUrl('photo')
    )
  }

  addPackage(){
    let props = this.form.get('packages')as FormArray
    props.push(this.fb.group({
      packageName: ['', [Validators.required,Validators.minLength(3)]],
      description: ['', Validators.required,Validators.minLength(4)],
      info: ['', [Validators.required,Validators.minLength(50)]],
      packageImage: ['', Validators.required]
    }))
  }

  removePackageProperty(index: any){
    let props = this.form.get('packages') as FormArray;
    props.removeAt(index);
  }

  imgUpload = false;
  imgUpload2  = false;



  upload(file : File, fc:FormControl){

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

  preview(file: any, photo:FormControl){
    let reader = new FileReader;
    reader.onloadend = () => {
      photo.setValue(reader.result);
    }
    reader.readAsDataURL(file);
    this.imgUpload2 = false;
  }

  //Pop-up

  // closeResult: string;
  //
  // open(content) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }
  //
  // private getDismissReason(reason: any): string {
  //   if (reason === .ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }




  goDetails(name){
    this.router.navigate(['detail' , name]);
  }

}
