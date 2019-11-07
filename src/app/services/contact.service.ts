import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../models/Contact'
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // endpoint to get all the contacts
  getEndpoint:string ='http://localhost:8000/api/contacts'
  contactsLimit:string ='?_limit=5'

  // endpoint to get a single contact
  getSingleContactEndpoint:string ='http://localhost:8000/api/contact'

  constructor(private http:HttpClient) { }

  //Get Contacts
  getContacts():Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.getEndpoint}${this.contactsLimit}`)
  }

  getSingleContact(contact_id):Observable<Contact[]> {
    return this.http.get<Contact[]>(this.getSingleContactEndpoint+"/"+contact_id)
  }

  deleteContact(contact_id):Observable<Contact[]>{
    return this.http.delete<Contact[]>(this.getSingleContactEndpoint+"/"+contact_id, httpOptions)
  }
}
