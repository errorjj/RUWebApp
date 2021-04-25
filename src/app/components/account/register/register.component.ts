import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AccountService } from 'src/app/services/account.service';
import { IbgeService } from 'src/app/services/ibge.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public hide: boolean = true;
  registerForm: FormGroup;
  user: User;
  users: User[];
  estados: any[];
  cidades: any[];

  constructor(
    private fb: FormBuilder,
    public accountService: AccountService,
    public ibgeService: IbgeService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.registerValidation();
    this.ibgeService.getAllStates().subscribe((data) => {
      this.estados = data;
    });
  }

  registerValidation() {
    this.registerForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      estado: ['', Validators.required],
      cidade: ['', Validators.required],
    });
  }

  register() {
    this.user = Object.assign({}, this.registerForm.value);
    //console.log(this.user);
    this.accountService.postUser(this.user);
    this.router.navigate(['']);
  }

  changeState(id: number) {
    this.ibgeService.getCitysByUF(id).subscribe((data) => {
      this.cidades = data;
    });
  }
}
