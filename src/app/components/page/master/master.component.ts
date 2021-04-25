import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {
  username: string | null;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.username = sessionStorage.getItem("User");
  }

  logout() {
    sessionStorage.removeItem("User");
    this.router.navigate(['']);
  }

}
