import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const ELEMENT_DATA: any = [
  { name: 'X-Tudo', description: 'Comida gostosa hummmm', preco: 'R$10,00', tipo: 'Sanduiche', disponibilidade: 'Disponivel' },
  { name: 'Macarrão', description: 'Comida gostosa hummmm', preco: 'R$20,00', tipo: 'Refeição', disponibilidade: 'Disponivel' },
  { name: 'Sushi', description: 'Comida gostosa hummmm', preco: 'R$30,00', tipo: 'Refeição', disponibilidade: 'Disponivel'},
  { name: 'Feijoada', description: 'Comida gostosa hummmm', preco: 'R$40,00', tipo: 'Refeição', disponibilidade: 'Indisponivel' },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  contador: number = 0;
  username: string | null;
  cardapio: any[] = ELEMENT_DATA;
  data: any[];

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.username = sessionStorage.getItem("User");
    console.log(this.cardapio);
    this.data = this.cardapio;
  }

  logout() {
    sessionStorage.removeItem("User");
    this.router.navigate(['']);
  }

  filtroTipo(event: any) {
    this.cardapio = this.data;
    if (event != "") {
      this.cardapio = this.cardapio.filter(a => a.tipo === event)
    }
  }

  filtroPreco(event: any) {
    this.cardapio = this.data;
    if (event != "") {
      this.cardapio = this.cardapio.filter(a => a.preco === event)
    }
  }

  filtroDisponibilidade(event: any) {
    this.cardapio = this.data;
    if (event != "") {
      this.cardapio = this.cardapio.filter(a => a.disponibilidade === event)
    }
  }

  buy(){
    this.contador = this.contador + 1;
  }

}
