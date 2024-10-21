import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.scss',
})
export class VerifyComponent {
  public verifyForm: FormGroup;
  constructor(private fb: FormBuilder, public authService: AuthService) {
    this.verifyForm = this.fb.group({
      code: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(4),
          Validators.pattern(/^\d{4}$/),
        ],
      ],
    });
  }

  onSubmit() {
    if (this.verifyForm.valid) {
      const { code } = this.verifyForm.value;
      this.authService.verify(code).subscribe(
        (response) => {
          console.log('Verification successful', response);
        },
        (error) => {
          console.error('Verification failed', error);
        }
      );
    }
  }
}
