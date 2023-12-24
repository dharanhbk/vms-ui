// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthServiceService } from '../services/auth-service.service';


// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.scss'
// })
// export class LoginComponent {
//   constructor(private _router:Router,
//     private _authService:AuthServiceService){}
//   ngOnInit(){
//     // this._authService.authorize().subscribe(resp=>{
//     //   console.log(resp)
//     // })
//     localStorage.removeItem("isUserLoggedIn")
//     setTimeout(()=>this.login(),5000)
//   }
//   navigateToSIgnUp(){
//     this._router.navigate(['sign-up'])
//   }
//   login(){
//     console.log("Came to login method")
//     let payload={
//       username: 'gokul',
//       password: 'test'
//     }
//     // window.location.href="http://localhost:9000/login"
//     this._authService.authorize().subscribe(resp=>{
//       console.log("In resppppppp....")
//     },error=>{
//       window.location.href=error.url
//     })

//   }
// }
