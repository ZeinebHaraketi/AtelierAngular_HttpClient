import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invoice } from '../Model/Invoice.model';

@Injectable(
  
  {providedIn: 'root'
  }
)
export class InvoiceService {
  url = "http://localhost:3000/api/invoices";

  constructor(private http: HttpClient) { }

  getAllInvoices(){
    return this.http.get<Invoice[]>(this.url);
  }

  getInvoiceById(idFacture: Number){
    return this.http.get<Invoice>(this.url+'/'+idFacture);
  }

  addInvoice(invoice:Invoice){
    return this.http.post(this.url,invoice);
  }

  deleteInvoice(idFacture:Number){
    return this.http.delete(this.url+'/'+idFacture);
  }

  updateInvoice(idFacture:Number,invoice:Invoice){
    return this.http.put<Invoice>(this.url+'/'+idFacture, invoice);
  }

}
