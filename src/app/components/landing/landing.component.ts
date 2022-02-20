import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private route: Router, private authService: AuthService) { }

  _onSubmit(): void {
    this.authService.loginUser('JOSE').subscribe(
      data => {
        console.log('data', data);
      }, error => {
        console.log('error', error);
      }
    )
  }

  ngOnInit(): void {
  }

}
