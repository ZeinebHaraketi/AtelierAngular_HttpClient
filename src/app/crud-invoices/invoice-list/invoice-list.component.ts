import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Invoice } from '../../Core/Model/Invoice.model';
import { InvoiceService } from '../../Core/Services/invoice.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {
  listI: Invoice[]= [];
  filter!:string;


  constructor( private route:Router, private invoiceS: InvoiceService) { }

  ngOnInit(): void {
    this.getInvoices();
  }

  getInvoices(){
    this.invoiceS.getAllInvoices().subscribe(data=> this.listI= data);
   }

   deleteInvoice(idFacture:any){
    //  this.user7.deleteUser(Number(id)).subscribe( () =>this.getUsers() );
    this.invoiceS.deleteInvoice(Number(idFacture)).subscribe(
      ()=> this.getInvoices()
    );
   }

}
