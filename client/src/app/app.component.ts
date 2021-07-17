import { Component } from '@angular/core';
import {RestService} from './rest.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Client';

  constructor(private post:RestService)
  {

    this.post.getdata().subscribe(data=>{
      console.table(data);
    })
  }

}
