import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { CowService } from '../services/cow.service';
import { CowSex, CowStatus } from '../models/cow.model';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'app-add-cow',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    SelectModule,
    InputNumberModule,
    CardModule,
    MessageModule,
    HeaderComponent
  ],
  templateUrl: './add-cow.component.html',
  styleUrl: './add-cow.component.scss'
})
export class AddCowComponent implements OnInit {
  cowForm!: FormGroup;
  
  sexOptions = [
    { label: 'Male', value: CowSex.Male },
    { label: 'Female', value: CowSex.Female }
  ];
  
  statusOptions = [
    { label: 'Active', value: CowStatus.Active },
    { label: 'In Treatment', value: CowStatus.InTreatment },
    { label: 'Deceased', value: CowStatus.Deceased }
  ];
  
  penOptions: { label: string; value: string }[] = [];

  constructor(
    private fb: FormBuilder,
    private cowService: CowService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadPenOptions();
  }

  private initializeForm(): void {
    this.cowForm = this.fb.group({
      earTag: ['', [Validators.required, this.uniqueEarTagValidator.bind(this)]],
      sex: ['', Validators.required],
      pen: ['', Validators.required],
      status: [CowStatus.Active, Validators.required],
      weight: [null, [Validators.min(0.1)]]
    });
  }

  private loadPenOptions(): void {
    const defaultPens = ['Pen 1', 'Pen 2', 'Pen 3', 'Pen 4', 'Pen 5'];
    const allPens = defaultPens.sort();
    this.penOptions = allPens.map(pen => ({ label: pen, value: pen }));
  }

  private uniqueEarTagValidator(control: any) {
    if (!control.value) return null;

    const isUnique = this.cowService.isEarTagUnique(control.value);
    return isUnique ? null : { uniqueEarTag: true };
  }

  onSubmit(): void {
    if (this.cowForm.valid) {
      const formValue = this.cowForm.value;
      
      this.cowService.addCow({
        earTag: formValue.earTag,
        sex: formValue.sex,
        pen: formValue.pen,
        status: formValue.status,
        weight: formValue.weight || undefined
      });

      this.router.navigate(['/']);
    } else {
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched(): void {
    Object.keys(this.cowForm.controls).forEach(key => {
      const control = this.cowForm.get(key);
      control?.markAsTouched();
    });
  }


  goBack(): void {
    this.location.back();
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.cowForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  getFieldError(fieldName: string): string {
    const field = this.cowForm.get(fieldName);
    if (field && field.errors && field.touched) {
      if (field.errors['required']) {
        return `${this.getFieldLabel(fieldName)} is required`;
      }
      if (field.errors['uniqueEarTag']) {
        return 'This ear tag already exists';
      }
      if (field.errors['min']) {
        return 'Weight must be greater than 0';
      }
    }
    return '';
  }

  private getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      earTag: 'Ear Tag',
      sex: 'Sex',
      pen: 'Pen',
      status: 'Status',
      weight: 'Weight'
    };
    return labels[fieldName] || fieldName;
  }
}