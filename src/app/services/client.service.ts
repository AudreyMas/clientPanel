import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore' // = fetch and Doc = 1client
import { Observable } from 'rxjs'; // to return client

//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';



import { Client } from '../models/Client'; //import the interface

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clientsCollection: AngularFirestoreCollection<Client>;
  clientDoc: AngularFirestoreDocument<Client>; //type= cllient
  clients: Observable<Client[]>; // = array for the list of the clients
  client: Observable<Client>; // a client alone

  constructor(private afs: AngularFirestore) {
    //set
    this.clientsCollection = this.afs.collection('clients',
      ref => ref.orderBy('lastName', 'asc'));
    //order by last Name

  }

  //Methods Functions
  getClients(): Observable<Client[]> {
    // Get cleints with the id
    this.clients = this.clientsCollection.snapshotChanges().pipe(map(changes => {
          return changes.map(action => {
            const data = action.payload.doc.data() as Client;
            data.id = action.payload.doc.id;
            return data;
          });
        }));
        return this.clients;
  }
 
  newClient(client: Client){
    this.clientsCollection.add(client);
  }


}
