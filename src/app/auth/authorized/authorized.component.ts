import { TokenService } from '../../services/token.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  styleUrls: ['./authorized.component.css']
})
export class AuthorizedComponent implements OnInit {

  code = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe( data => {
      localStorage.setItem("isLoggedIn","true")
      this.code = data['code'];
      const code_verifier = this.tokenService.getVerifier();
      setTimeout(()=>this.tokenService.deleteVerifier(),1000);
      this.getToken(this.code, code_verifier);
    });
  }

  getToken(code: string, code_verifier: string): void {
    this.authService.getToken(code, code_verifier).subscribe(
      data => {
        console.log("test get token");
       this.tokenService.setTokens(data.access_token, data.refresh_token);
       console.log(data.access_token+" \n REFERSH_TOKEN :"+data.refresh_token);
       this.router.navigate(['']);
      },
      err => {
        console.log(err);
      }
    );
  }

}