import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from "primeng/dialog";
import { DynamicDialogRef } from "primeng/dynamicdialog";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { AuthControllerService } from "../../api/example";
import { ToastService } from "../../services/toast.service";

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, DialogModule, InputTextModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  form = new FormGroup({
      username: new FormControl<string>('', [Validators.required]),
      email: new FormControl<string>('', [Validators.required]),
      password: new FormControl<string>('', [Validators.required]),
    }
  );

  constructor(
    private authControllerService: AuthControllerService,
    public ref: DynamicDialogRef,
    private toastService: ToastService
  ) {
  }

  register() {
    this.authControllerService.registerUser(
      {
        signUpRequest: {
          username: this.form.controls.username.value!,
          email: this.form.controls.email.value!,
          password: this.form.controls.password.value!
        }
      }
    ).subscribe((res) => {
      if(res){
        this.toastService.successToast("Kész")
      }
    });
    console.log(this.form.value);
  }
}
