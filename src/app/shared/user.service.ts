import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import {catchError, map, take} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44316/api';
  readonly burl = "http://localhost:27004/api/CalculateNetWorth/netWorth?portFolioId="

  /*formModel = this.fb.group({
    UserName: ['', Validators.required],
    Email: ['', Validators.email],
    FullName: [''],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })

  });*/

 
  

  login(formData: any) {
    return this.http.post(this.BaseURI + '/Authenticate/login', formData);
  }

  getUserProfile() {
    return this.http.get(this.BaseURI + '/UserProfile');
  }
  getNetWorth(){
     
    var id = localStorage.getItem("portfolioId");
    console.log(id);
    return this.http.get(`${this.burl}${id}`);


  }
  s:any=[];
 sellStocks(s: any){
   
    
    return this.http.post('http://localhost:27004/api/CalculateNetWorth/sellAsset',s);

  }
  sellMutual(s: any){
   
    
    return this.http.post('http://localhost:27004/api/CalculateNetWorth/sellAsset',s);

  }
}

