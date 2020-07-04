import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Photo} from '../photo.model';
import {PHOTO_ENDPOINT} from '../Constanat';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) {
  }
  private url:string = "http://localhost:8080/photo-site/rs/photo";

  public getAllPhoto():Observable<Photo[]>{
    return this.http.get<Photo[]>(this.url+'photos');
  }
  public getPhotos(id):Observable<Photo>{
    return this.http.get<Photo>(this.url+id);
  }

  createPhoto(photo: any): Observable<Photo> {
    return this.http.post<Photo>(PHOTO_ENDPOINT, photo);
  }

  findAllPhoto(): Observable<Photo[]> {
    return this.http.get<Photo[]>(PHOTO_ENDPOINT);
  }

  findPackage(name: any): Observable<Photo> {
    return this.http.get<Photo>(PHOTO_ENDPOINT + "/" + name);
  }

  editPhoto(name:any,photo:Photo):Observable<Photo>{
    return this.http.patch<Photo>(PHOTO_ENDPOINT + "/edit" + name, photo);
  }

  deletePhoto(id):Observable<any>{
    if(confirm("Are you sure want to delete?")){
      return this.http.delete(PHOTO_ENDPOINT + "/delete" + id);
    }
  }

}
