import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceService } from 'src/app/Core/Services/invoice.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  Id=0;
  inv:any;

  constructor(private actR: ActivatedRoute, private R:Router,private invS: InvoiceService, private fb: FormBuilder) { }


  updatedForm= this.fb.group({
    idFacture:[''],
    montantFacture:[''],
    montantRemise:[''],
    dateFacture:[''],
    active:['']
  })

  ngOnInit(): void {
    this.actR.paramMap.subscribe(data => this.Id = Number(data.get('param')));
    console.log(this.Id);

    this.invS.getInvoiceById(this.Id).subscribe(data=>{
      this.inv=data

    
      this.updatedForm.setValue({idFacture: this.inv.idFacture, 
        montantFacture: this.inv.montantFacture,
        montantRemise: this.inv.montantRemise,
        dateFacture: this.inv.dateFacture,
        active: this.inv.active
      })
    });

  }


  updateI(){
    this.invS.updateInvoice(this.updatedForm.value).subscribe(
      ()=> this.R.navigate(['invoice'])
    )
  }
  

}
