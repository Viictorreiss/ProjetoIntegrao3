import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CrudService } from '../cadastro-condominio/crud.service';
import { CondominioRegistry } from './condominio-registry';

@Component({
  selector: 'app-condominio-registry',
  templateUrl: './condominio-registry.component.html',
  styleUrls: ['./condominio-registry.component.css']
})
export class CondominioRegistryComponent extends CrudService<CondominioRegistry> implements OnInit {

  private _url : string = `${environment.backendBaseUri}/condominio`;
  condominios: any[];
  model: any = {};
  
  constructor(protected http: HttpClient, protected router: Router) {
    super(http, `${environment.backendBaseUri}/condominio`);
  }

  ngOnInit(): void {
  }

  public register() {
    let user = this.criarObjeto();
    this.create(user).subscribe(data => {
      console.log('sucesso');
      this.router.navigate([`/condominio/${data[0].insertId}/link`]);
    });
  }

  criarObjeto() : any {
    return new CondominioRegistry(this.model.nome, this.model.cep, this.model.uf, this.model.cidade, this.model.bairro, this.model.rua, this.model.numero);
  }
}
