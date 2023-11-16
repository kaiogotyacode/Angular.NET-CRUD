import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/models/Pessoa/Pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [FormsModule]
})

export class ListarComponent implements OnInit {

constructor(private pessoaService : PessoaService, private router: Router){}

totalPagina? : number;
totalToArray : number[] = [];

alterarPessoa(idPessoa?: number) {
  this.router.navigate([`/editar/${idPessoa}`]);
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
  page : number = 0;
  take : number = 10;
  pagShow!: number;

  ngOnInit(): void {
    this.pessoaService.GetPessoas(this.page, this.take).subscribe(response => {
      this.pessoas = response.pessoas;
      this.totalPagina = Math.ceil(response.total!/this.take) ;
      for(let i = 1; i <= this.totalPagina!; i++){
        this.totalToArray.push(i);
      }
    });
  }

  AtualizarLista(page: number, take: number) {
    this.pessoaService.GetPessoas(page, take).subscribe(response => {
      this.pessoas = response.pessoas;
    });
  }


}
