import { Component, OnInit } from '@angular/core';

import { FlashMessagesService } from 'angular2-flash-messages'; //= npm module
import { ClientService } from '../../services/client.service'; // = connection with the database of firebase
import { Router, ActivatedRoute } from '@angular/router' // = the route to naviguate on the website to use "routerLink in html"

import { Client } from '../../models/Client'; // = export the interface of the clienton the models

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {
  id: string;
  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0,
  }
  disableBalanceOnEdit: boolean = true;

  constructor(
    private flashMessage: FlashMessagesService,
    private clientService: ClientService,// dependency
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    //Get id from url 
    this.id = this.route.snapshot.params['id'];
    //Get client
    this.clientService.getClient(this.id).subscribe(client => {
      this.client = client;
      // console.log(this.client)
    })
  }

  onSubmit({ value, valid }: { value: Client, valid: boolean }) {
    console.log(value, valid)
    //if all is ok
    if (!valid) {
      this.flashMessage.show('please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 4000
      });

    } else {
      //add id to client
      value.id= this.id;
      //update client // 
      this.clientService.updateClient(value); // use update to the balance
      this.flashMessage.show('client updated', {
        cssClass: 'alert-success', timeout: 4000
      });
      this.router.navigate(['/client/' + this.id]);
console.log(value, valid)
    }
  }
}

