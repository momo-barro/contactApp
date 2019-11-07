import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/Contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
  @Input() contact:Contact
  @Output() deleteContact:EventEmitter<Contact> = new EventEmitter()

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onToggle(contact:Contact){
    return this.router.navigate([`/details`, {id:`${contact.id}`}])
  }
  onEdit(contact:Contact){
    return this.router.navigate([`/edit`, {id:`${contact.id}`}])
  }

  onDelete(contact:Contact) {
    this.deleteContact.emit(contact)
  }

  onAdd() {
    return this.router.navigateByUrl(`/add`)
  }

}
