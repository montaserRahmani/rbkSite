import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

	  firstName  : String;
    lastName   : String;
    email      : String;
    conEmail   : String;
    password   : String;
    conPassword: String;

  constructor( private authService : AuthService , private router:Router) { }

  ngOnInit() {}

  addNewUser(){ // function to add new user to DB ...

  	const user={ //to store data that come from HTML Page ...
  	       firstName  : this.firstName,
           lastName   : this.lastName,
           email      : this.email,
           password   : this.password
  	      }

  	 this.authService.signup({user:user}).subscribe(data => {

      if(data){
         console.log(data);
        
         } else {
          this.router.navigate(['/signup']);
         }
      });
    
  }//end of signup function ...

}//end of the class ...
