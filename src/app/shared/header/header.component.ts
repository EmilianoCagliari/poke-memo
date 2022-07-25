import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  path: string = "";
  

  constructor( private router: Router ) { 
    // this.path = this.router.config;
    // console.log(this.router.config);
   

  }

  ngOnInit(): void {
  }

}
