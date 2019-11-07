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
    })
  }

  deleteContact(contact:Contact) {
    console.log('delete')
    //console.log(this.contacts)
    this.contactService.deleteContact(contact.id).subscribe(
      data => {
        this.ngOnInit()
      // const dataArray = Object.keys(data).map(i => data[i])
      // const singleDataArray = Object.keys(dataArray[0]).map(i => dataArray[0][i])
      // this.contacts = singleDataArray
      // console.log(this.contacts)
      //this.contacts = this.contacts.filter(c => c.id !== contact.id)
      console.log(data)
    })
  }

}
