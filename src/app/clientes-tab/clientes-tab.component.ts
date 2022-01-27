import { Component, Inject, OnInit } from '@angular/core';
import { clienteServiceProvider } from '../../ajs-upgraded-providers';
import { clienteServiceName } from '../../js/services/clienteService';
import { estadoServiceName } from '../../js/services/estadoService';
import { ClienteService } from '../clientes/cliente.service';
import { EstadoService } from '../estado/estado.service';

@Component({
  selector: 'app-clientes-tab',
  templateUrl: './clientes-tab.component.html',
  styleUrls: ['./clientes-tab.component.css'],
  providers: [
    clienteServiceProvider
  ]
})
export class ClientesTabComponent implements OnInit {
  search: string = ''
  showDetails = false;
  isNewCliente = false;
  clientes = [];
  estados = [];
  cidades = [];
  cliente: any = {
    telefones: [""]
  }

  tipoClientes = [
    { value: "PESSOA_FISICA", desc: "Pessoa Física" },
    { value: "PESSOA_JURIDICA", desc: "Pessoa Jurídica" }
  ]

  constructor(
    private clienteService: ClienteService,
    private estadoService: EstadoService
  ) {}

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.clienteService.findAll().subscribe((data: any) => {
      this.clientes = data;
    });
  }

  loadEstados() {
    this.estadoService.findAll().subscribe((data: any) => {
      this.estados = data;
    });
  }

  loadCidades() {
    const estadoId = this.cliente.estado;

    if (estadoId) {
      this.estadoService.findCidades(estadoId).subscribe((data: any) => {
        this.cidades = data;
      });
    } else {
      this.cidades = [];
    }
  }

  adicionarCliente() {
    this.cliente = {};
    this.cliente.telefones = [""];
    this.showDetails = true;
    this.isNewCliente = true;
    this.loadEstados();
  }

  editarCliente (cliente) {
    const clienteId = cliente.id;
    this.cliente = cliente;

    this.loadEstados();

    this.cliente = {
      ...this.cliente,
      ...this.cliente.endereco,
      cidadeId: this.cliente.endereco.cidade.id,
      estado: this.cliente.endereco.cidade.estado.id,
      id: clienteId
    }

    this.loadCidades();

    this.isNewCliente = false;
    this.showDetails = true;
  }

  salvarCliente (cliente) {
    delete cliente.estado;

    if (this.isNewCliente) {
      this.clienteService.add(cliente).subscribe((data: any) => {
        console.log(data);
        this.loadData();
        this.showDetails = false;
      });
    } else {
      this.clienteService.update(cliente).subscribe((data: any) => {
        this.loadData();
        this.showDetails = false;
      });
    }
  }

  cancel() {
    this.showDetails = false;
  }
}
