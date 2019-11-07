import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/Contact';
import { ActivatedRoute } from '@angular/router';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  singleContact:Contact[]
  dataLoaded:boolean = false
  //url:Object
  idParam:any

  // private router:Router
  constructor(private contactService:ContactService, private route:ActivatedRoute) { 
    //this.url = this.router.getCurrentNavigation()
    this.idParam = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit() {
    // console.log(this.idParam)
    // console.log(this.singleContact)
    this.contactService.getSingleContact(this.idParam).subscribe(data => {
      const dataArray = Object.keys(data).map(i => data[i])
      this.singleContact = dataArray[0]
      this.dataLoaded =true
      // console.log(typeof this.singleContact)
      // console.log(this.singleContact)
    })
  }

}
