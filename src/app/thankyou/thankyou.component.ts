import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  goHome(){
    this.route.navigate(['admin/products'])
  }

}
