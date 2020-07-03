import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Client } from '../../models/Client';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  loggedInUser: string; // = user currently logged
  showRegister: boolean;


  constructor( // Dependencies
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
  ) { }


  ngOnInit(): void {

    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      }else{
        this.isLoggedIn = false;
      }
    })
  }

  onLogoutClick(){
this.authService.logout();
this.flashMessage.show('you are logged out',{
   cssClass:'alert-sucess', timeout:4000
  });
  this.router.navigate(['/login']);

  }

}
