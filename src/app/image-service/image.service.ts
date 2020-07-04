import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UPLOAD_ENDPOINT} from '../Constanat';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http:HttpClient) { }

  upload(file:File):Observable<any>{
    let data = new FormData();
    data.append('file',file);
    return this.http.post<any>(UPLOAD_ENDPOINT,data);
  }
}
