import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormService } from './../services/form.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-view',
  standalone: true,
  templateUrl: './form-view.component.html',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  styleUrl: './form-view.component.scss'
})
export class FormViewComponent implements OnInit {
  formId: string | null = null;
  formServiceResponse: any;
  formGroup: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private formService: FormService,
    private fb: FormBuilder
  ) {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.formId = params.get('id');
    });

    this.getFormData(this.formId);
  }

  createForm(formData: any) {
    return this.fb.group({
      name: [formData?.name, []]
    });
  }

  onSubmit(): void {
    console.log("onsubmit form ->");
  }

  getFormData(id: any): void {
    this.formService.getForm(this.formId).subscribe(
      (response) => {
        this.formServiceResponse = response;
        this.errorMessage = null;
        console.log('ERROR MENSAJE1 ', this.errorMessage)
      },
      (error) => {
        console.log('ERROR MENSAJE1 ', this.errorMessage)
        this.errorMessage = 'Form not found or an error occurred.';
      }
    );
  }

  getField(obj: any): string[] {
    return Object.keys(obj);
  }
}
