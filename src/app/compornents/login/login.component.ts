import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router, 
    private flashMessage : FlashMessagesService,
  ) { }

  ngOnInit(): void {
    this.authService.getAuth().subscribe(auth => {
      if(auth){
        this.router.navigate(['/'])
      }
    })
  }

  onSubmit(){
    this.authService.login(this.email, this.password)
    //beacause of promise 
    .then(res => {
      this.flashMessage.show('you are now logged in', {
        cssClass: 'alert-success', timeout: 4000
      });
        this.router.navigate(['/']);
    })
    .catch(err => {
      this.flashMessage.show(err.message, {
        cssClass: 'alert-danger', timeout: 4000
      });
      
    });
  }

}
