import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Usuario } from '../shared/model.module';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  cadastroUsuario: FormGroup;
  btDisabled: boolean = false; // for button

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router,  private activRoute: ActivatedRoute) { }

  get f() {
    return this.cadastroUsuario.controls;
  }

  ngOnInit(): void {
    this.emptyForm();
  }

  private emptyForm() {
    this.cadastroUsuario = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      telefone: ['', [Validators.required, Validators.minLength(10)]],
      logradouro: ['', [Validators.required, Validators.minLength(8)]],
      numero: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.minLength(5)]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      senhaConfirma: ['', [Validators.required, Validators.minLength(6)]],
      complemento: [''],
      bairro: ['', [Validators.required, Validators.minLength(3)]],
      cidade: ['', [Validators.required, Validators.minLength(3)]],
      estado: ['', [Validators.required, Validators.minLength(2)]]

   })
  }

  restart(): void {
    this.cadastroUsuario.reset();
 }

   private createForm(user: any) {
    this.cadastroUsuario = this.fb.group({
      nome: [user.nome, [Validators.required, Validators.minLength(3)]],
      telefone: [user.telefone, [Validators.required, Validators.minLength(3)]],
      logradouro: [user.logradouro, [Validators.required, Validators.minLength(8)]],
      email: [user.email, [Validators.required, Validators.minLength(5)]],
      senha: [user.senha, [Validators.required, Validators.minLength(6)]],
      senhaConfirma: [user.senhaConfirma, [Validators.required, Validators.minLength(6)]],
      numero: [user.numero, [Validators.required, Validators.minLength(1)]],
      complemento: [user.complemento],
      bairro: [user.bairro, [Validators.required, Validators.minLength(3)]],
      cidade: [user.cidade, [Validators.required, Validators.minLength(3)]],
      estado: [user.estado, [Validators.required, Validators.minLength(2)]]
    })
  }

  async submit(): Promise<void> {
    this.cadastroUsuario.markAllAsTouched();
    if (this.cadastroUsuario.invalid) {
      return;
    } else {
<<<<<<< HEAD
      this.btDisabled = true;

=======
>>>>>>> 214a0b424a45f445754f28dc6d8549afb99d9a3d
      const userRaw = this.cadastroUsuario.getRawValue();
      delete userRaw['senhaConfirma'];

      let user = new Usuario();
      user = {...userRaw, tp_usuario: 'CLIENTE'};

<<<<<<< HEAD
      console.log(user);
      
      this.authService.cadastrar(user);

      this.btDisabled = false;
      }
      
=======
      this.authService.cadastrar(user);
>>>>>>> 214a0b424a45f445754f28dc6d8549afb99d9a3d
    }
      
  }

}
