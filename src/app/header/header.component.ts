import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public log: boolean;

constructor(private data:DataService,private route:Router) { }

  ngOnInit(): void {
    this.data.getValue().subscribe((value) => {
      this.log = value;
    });
  }

  logout(){
  this.log=false;
  this.route.navigate(['/login'])
  } 
}
