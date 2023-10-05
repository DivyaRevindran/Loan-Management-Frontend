import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer} from '../models/customer';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  //declare variables--- global variable
  formCustomerData: Customer = new Customer();


  //list of customers
  customers: Customer[];

  constructor(private httpClient: HttpClient) { }
  //Insert
  insertCustomer(customer:Customer): Observable<any>{
    return this.httpClient.post(environment.apiUrl + '/api/customers',customer);
}

  
}
