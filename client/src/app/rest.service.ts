import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }

    getdata(){
    let url = "https://my-json-server.typicode.com/typicode/demo/posts";
    return this.http.get(url);
    }
}
