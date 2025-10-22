import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Cliente } from './cliente';

@Component({
  selector: 'app-cadastro',
  imports: [
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit {
  cliente: Cliente = Cliente.newCliente();
  atualizando: boolean = false;

  constructor(
    private service: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((query: any) => {
      const params = query['params'];
      const id = params['id'];
      if (id) {
        let clienteEncontrado = this.service.buscarClientePorId(id);

        if (clienteEncontrado) {
          this.atualizando = true;
          this.cliente = this.service.buscarClientePorId(id) || Cliente.newCliente();
        }
      }
    })
  }

  salvar() {
    if (!this.atualizando) {
      this.service.salvar(this.cliente);
      this.cliente = Cliente.newCliente();
    } else {
      this.service.atualizar(this.cliente);
      this.router.navigate(['/consulta'])
    }
  }
}
