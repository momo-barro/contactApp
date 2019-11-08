import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  contact:any

  first_name: string
  last_name: string
  email: string
  job_title: string
  city: string
  country: string

  constructor(private contactService:ContactService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Add a new contact')
    this.contact = {}
    this.contact.first_name = this.first_name
    this.contact.last_name = this.last_name
    this.contact.email = this.email
    this.contact.job_title = this.job_title
    this.contact.city = this.city
    this.contact.country = this.country

    console.log( this.contact)

    this.contactService.addContact(this.contact).subscribe(data => {
      const dataArray = Object.keys(data).map(i => data[i])
      this.contact = dataArray
      this.contact.push(dataArray)
      
      this.router.navigateByUrl('')
    })
  }

}
