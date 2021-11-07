import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gynacform',
  templateUrl: './gynacform.component.html',
  styleUrls: ['./gynacform.component.scss']
})
export class GynacformComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigatee(str){
    console.log(str)
    this.router.navigate(['/appointments'])
  }

}
