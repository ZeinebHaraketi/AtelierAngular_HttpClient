import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRRoutingModule } from './invoices-r-routing.module';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceService } from '../Core/Services/invoice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvoiceComponent } from './update-invoice/invoice.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';


@NgModule({
  declarations: [
    InvoiceComponent,
    MainInvoiceComponent,
    InvoiceListComponent
  ],
  providers:[InvoiceService],
  imports: [
    CommonModule,
    InvoicesRRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InvoicesRModule { }
