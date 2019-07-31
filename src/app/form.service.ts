import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor(private http: HttpClient) { 
    
  }
  addingUrl="http://mockbin.org/bin/e95892c6-289f-4ed5-90be-789cd413239f/view"
  formDetailsS=[{
    tournment:"",
    sports:"",
    events:"",
    records:"",
    recordHolder:"",
    date:"",
    championships:"",
    place:"",
    nationality:""
  }]
  

  addFormService(formDetails):Observable<any>{
    let headers = new HttpHeaders({
      'Accept':'application/json'
    });
    let options = { headers: headers };
    return this.http.post(this.addingUrl,formDetails,options);
  }
    //  addFormService(formDetails){
    //    this.formDetailsS.push(formDetails);
    //    localStorage.setItem('details',JSON.stringify(this.formDetailsS))
    //  }
  
}
