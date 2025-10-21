import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './item-lista';

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {
  item: string = "";
  lista: ItemLista[] = [];

  adicionarItemLista() {
    let itemLista = new ItemLista();
    itemLista.nome = this.item;
    itemLista.id = this.lista.length + 1;

    this.lista.push(itemLista);
    this.item = "";
  }

  riscarItem(itemLista: ItemLista) {
    itemLista.isComprado = !itemLista.isComprado;
  }

  limparLista() {
    this.lista = [];
  }
}
