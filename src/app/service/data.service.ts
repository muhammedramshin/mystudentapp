import { Injectable, EventEmitter } from '@angular/core';
import{HttpClient, HttpHeaders} from "@angular/common/http"
import { Router } from "@angular/router";
import {BehaviorSubject, Observable} from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class DataService {
resTkn;
resdata=[];
private islogin: BehaviorSubject<boolean>;


 private Url="https://maths-guru.com/";
  constructor(private http:HttpClient,private route:Router,private toastr: ToastrService) {
    this.islogin = new BehaviorSubject<boolean>(false);
   }
   setValue(newValue): void {
    this.islogin.next(newValue);
  }
  getValue(): Observable<boolean> {
    return this.islogin.asObservable();
  }
  
  login(userData){
    return this.http.post<any>(this.Url+'api/auth/login',userData).subscribe(
      response => {console.log('success',response); this.resTkn = response.accessToken;
    console.log(" out taken is : "+ this.resTkn);
    this.list(this.resTkn);
    this.setValue(true);
    this.toastr.success('Login Granded');
   },
    error =>{console.error('error',error);
    this.toastr.error('wrong credentials', 'Login Failed');
    
   } );

  }


  list(authtoken){
  
   const httpOptions = {
     headers: new HttpHeaders({
     
       Authorization :`Token ${authtoken}`
     })
    };
      this.http.get<any>(this.Url+'api/package/app',httpOptions)
      .subscribe(
        res=>{
          console.log('success',res);
          this.resdata =res;
          this.route.navigate(['/home'])
        },
        error =>console.error('error',error)  
      );
  }



}
