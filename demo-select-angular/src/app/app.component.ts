import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  uf: string;
  ibge: string;

  estados: any[] = [];
  cidades: any[] = [];

  constructor(private service: AppService) {

  }

  ngOnInit() {
    this.service.buscarEstados().subscribe(result => this.estados = result);
  }

  buscarCidades() {
    this.service.buscarCidadePorUF(this.uf).subscribe(result => this.cidades = result);
  }
}
