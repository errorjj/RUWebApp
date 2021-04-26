import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const ELEMENT_DATA: any = [
  { name: 'X-Tudo', description: 'Comida gostosa hummmm', preco: 'R$10,00', tipo: 'Sanduiche', disponibilidade: 'Disponivel' },
  { name: 'Macarrão', description: 'Comida gostosa hummmm', preco: 'R$20,00', tipo: 'Refeição', disponibilidade: 'Disponivel' },
  { name: 'Sushi', description: 'Comida gostosa hummmm', preco: 'R$30,00', tipo: 'Refeição', disponibilidade: 'Disponivel'},
  { name: 'Feijoada', description: 'Comida gostosa hummmm', preco: 'R$40,00', tipo: 'Refeição', disponibilidade: 'Indisponivel' },
  { name: 'Parmegiana', description: 'Bife à parmegiana ou filé à parmegiana, um prato brasileiro, é um tipo de bife frito, composto por um pedaço de carne fatiado, empanado com farinha de trigo e ovos', preco: 'R$40,00', tipo: 'Refeição', disponibilidade: 'Disponivel' },
  { name: 'Frango Empanado', description: 'Frango empanado é um prato muito comum e apreciado no mundo todo. No Japão é chamado de chicken katsu. Consiste em filés de frango...', preco: 'R$10,00', tipo: 'Refeição', disponibilidade: 'Disponivel' },
  { name: 'Misto Quente', description: 'Um misto-quente, uma tosta-mista ou uma sandes mista é um sanduíche quente, preparado à base de queijo e presunto. Pode ser preparado em frigideira...', preco: 'R$20,00', tipo: 'Sanduiche', disponibilidade: 'Disponivel'},
  { name: 'Sanduíche de Frango', description: 'Um sanduíche de frango é um sanduíche que normalmente consiste em peito de frango desossado e sem pele servido entre fatias de pão.', preco: 'R$30,00', tipo: 'Sanduiche', disponibilidade: 'Indisponivel' },
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
