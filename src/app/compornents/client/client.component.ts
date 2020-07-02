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

  constructor( private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe(clients => console.log(clients)); // return an Observable so we need to subscribe
  }

}
