import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { InvoiceService } from '../../Core/Services/invoice.service';


@Component({
  selector: 'app-main-invoice',
  templateUrl: './main-invoice.component.html',
  styleUrls: ['./main-invoice.component.css']
})
export class MainInvoiceComponent implements OnInit {

  constructor(private fb: FormBuilder, private invoiceService: InvoiceService) { }

  rf= this.fb.group({
    discountAmount: ['', [Validators.required]],
    billAmount: ['', [Validators.required]],
    dateBill: [''],
    Status: ['']
  });

  ngOnInit(): void {
  }

  Add(){
    console.log(this.rf);
    let invoice = this.rf.getRawValue();
    console.log("invoice = ", invoice);
    
  }

}
