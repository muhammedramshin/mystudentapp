import { Component, OnInit,Input } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  info = [];
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.info=this.data.resdata;
    
    console.log('home component'+this.info);
}
  

}