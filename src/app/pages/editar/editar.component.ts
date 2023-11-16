import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from 'src/app/models/Pessoa/Pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
 
  formAtualizaPessoa!: FormGroup;
  pessoa? : Pessoa;

  constructor(private pessoaService: PessoaService, private router : Router, private route : ActivatedRoute) { }
  
  ngOnInit(): void {
    const idPessoa = Number(this.route.snapshot.paramMap.get('idPessoa'));

    this.pessoaService.GetPessoaByID(idPessoa).subscribe(x =>{
      this.pessoa  = x;
            
      this.formAtualizaPessoa = new FormGroup({
        idPessoa: new FormControl(x.idPessoa),
        nome: new FormControl(x.nome, [Validators.required]),
        email: new FormControl(x.email, [Validators.required, Validators.email])
      });
    });
    
  }

  EditPessoa() {
    this.pessoaService.EditPessoa(this.formAtualizaPessoa.value).subscribe(()=>{
      this.router.navigate(['/listar']);
    });
  }


}
