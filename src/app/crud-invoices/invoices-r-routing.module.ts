import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { InvoiceComponent } from './update-invoice/invoice.component';

const routes: Routes = [
  {path:'', component:InvoiceListComponent},
  {path:'updateI/:param', component:InvoiceComponent},
  {path: 'addI', component:MainInvoiceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRRoutingModule { }
