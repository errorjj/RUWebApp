import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public hide: boolean = true;
  users: User[];
  user: User | undefined;
  email: string;
  senha: string;

  constructor(
    public accountService: AccountService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  login() {
    this.users = this.accountService.getUsers();
    console.log(this.users);
    this.user = this.users.find(a => a.email === this.email);
    console.log(this.user);
    if (this.user === undefined) {
      console.log('Email não cadastrado');
    }
    else {
      if (this.user.senha === this.senha) {
        console.log('Login realizado');
        sessionStorage.setItem("User", this.user.nome);
        this.router.navigate(['home']);
      }
      else {
        console.log('Senha Incorreta');
      }
    }
  }

}
