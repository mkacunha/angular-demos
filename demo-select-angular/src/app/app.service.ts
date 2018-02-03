import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';


@Injectable()
export class AppService {

  constructor(private http: Http) { }

  buscarEstados(): Observable<any> {
    return Observable.of([
      {
        uf: 'PR',
        nome: 'Paraná'
      },
      {
        uf: 'SP',
        nome: 'São Paulo'
      }
    ]);
  }

  buscarCidadePorUF(uf: string): Observable<any> {
    return this.http.get('').map(res => res.json());
    if (uf === 'PR') {
      return Observable.of([
        {
          ibge: '975',
          nome: 'Curitiba'
        },
        {
          ibge: '900',
          nome: 'Maringá'
        }
      ]);
    }

    return Observable.of([
      {
        ibge: '991',
        nome: 'São Paulo'
      },
      {
        ibge: '999',
        nome: 'Diadema'
      }
    ]).map(res => res.json());
  }

}
