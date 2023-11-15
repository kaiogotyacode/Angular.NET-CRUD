import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/models/Pessoa/Pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

constructor(private pessoaService : PessoaService, private router: Router){}

alterarPessoa(idPessoa?: number) {

}

deletePessoa(idPessoa: number) {
  this.pessoaService.DeletePessoa(idPessoa).subscribe(() => {
    window.location.reload();
  });
}

cadastrarNovo() {
  this.router.navigate(["/cadastrar"]);
}

  pessoas : Pessoa[] = [];


  ngOnInit(): void {
    this.pessoaService.GetPessoas().subscribe(x => {
      this.pessoas = x;
    });
  }

}
