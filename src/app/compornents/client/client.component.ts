import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service'
import {Client} from '../../models/Client'

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  clients: Client[];
  totalOwed: number;


  constructor( private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
      this.getTotalOwed();
    
    }); // return an Observable so we need to subscribe to
  }

  getTotalOwed(){ //to get all the client
    this.totalOwed = this.clients.reduce((total, client)=>{
      return total + client.balance;
    }, 0);
  }

}
