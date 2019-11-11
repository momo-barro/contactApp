import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/Contact';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  idparam:any

  dataLoaded:boolean = false

  contact:any

  first_name:string
  last_name:string
  email:string
  job_title:string
  city:string
  country:string

  constructor(private contactService:ContactService, private route:ActivatedRoute, private router:Router) { 
    this.idparam = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit() {
    this.contact = {}
    this.contactService.getSingleContact(this.idparam).subscribe(data => {
      const dataArray = Object.keys(data).map(i => data[i])
      this.contact = dataArray[0]

      this.first_name = this.contact.first_name
      this.last_name = this.contact.last_name
      this.email = this.contact.email
      this.job_title = this.contact.job_title
      this.city = this.contact.city
      this.country = this.contact.country
    })
  }

  onSubmit() {
    console.log('Add a new contact')
    this.contact = {}
    this.contact.contact_id = parseInt(this.idparam)
    this.contact.first_name = this.first_name
    this.contact.last_name = this.last_name
    this.contact.email = this.email
    this.contact.job_title = this.job_title
    this.contact.city = this.city
    this.contact.country = this.country

    console.log(this.contact)

    this.contactService.updateContact(this.contact).subscribe(data =>{
      const dataArray = Object.keys(data).map(i => data[i])
      this.contact = dataArray
      this.contact.push(dataArray)
      
      this.router.navigateByUrl('')
    })    
  }

}
