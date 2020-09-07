import { Component, OnInit } from '@angular/core';

import {FormBuilder,Validators,FormGroup} from '@angular/forms'
import {DataService} from '../service/data.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;

  resTkn;
  constructor(private fb:FormBuilder,private data:DataService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group(
      {
        email:['',[Validators.required,Validators.pattern("^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
        password: ['',[Validators.required,Validators.minLength(8)]]
      });

    }
      
  onSubmit(){
   
    this.data.login(this.loginForm.value);
   
  
  }

  
  

}
