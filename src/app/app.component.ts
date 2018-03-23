import { Component } from '@angular/core';
import { LoaderService } from './shared/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  HttpActivity: boolean
  constructor(private loader: LoaderService){
    loader.getHtttpStatus().subscribe(
      (status:boolean)=>{
        this.HttpActivity = status
        console.log(status)
      }
    )
  }
}
