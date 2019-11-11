import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/Contact';
import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts:Contact[]

  constructor(private contactService:ContactService) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe(data => {
      const dataArray = Object.keys(data).map(i => data[i]) //convert data of type Object to an Array
      this.contacts = dataArray
      console.log(this.contacts)
      console.log('redirected')
    })
  }

  deleteContact(contact:Contact) {
    console.log('delete')
    //console.log(this.contacts)
    this.contactService.deleteContact(contact.id).subscribe(
      data => {
        this.ngOnInit()
      
        console.log(data)
    })
  }

}
