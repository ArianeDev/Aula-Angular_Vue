import { Component, signal } from '@angular/core';
import { Header } from '../../Components/header/header';

@Component({
  selector: 'app-home',
  imports: [Header],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  produtos = signal([
    {
      nome: "O verão que mudou minha vida",
      preco: "R$ 49,90",
      img: "img/livro01.jpg",
    },
    {
      nome: "Manual de assassinato para boas garotas",
      preco: "R$ 49,90",
      img: "img/livro02.jpg",
    },
    {
      nome: "Tomar um poema e ler um café",
      preco: "R$ 49,90",
      img: "https://m.media-amazon.com/images/I/515Z7+HHQoL._SL1500_.jpg",
    },
  ])
}
