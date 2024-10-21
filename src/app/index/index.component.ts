import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-index',
  standalone: true,
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  imports: [CommonModule, RouterModule, FormsModule]
})
export class IndexComponent {
  menuItems = [
    { label: 'Inicio', route: '/' },
    { label: 'Búsqueda formulario', route: 'forms/:id' },
    { label: 'Guardar formulario', route: '/responses' },
  ];

  formId: string = '';
  searchedLabel: string = '';
  showInput: boolean = false;

  constructor(private router: Router) { }

  toggleInput(): void {
    this.showInput = !this.showInput;
  }

  searchForm(): void {
    if (this.formId) {
      this.searchedLabel = `Buscando formulario con ID: ${this.formId}`;
      this.router.navigate([`/forms/${this.formId}`]).then(() => {
        window.location.reload();
      });
      this.showInput = false;
      this.formId = '';
    }
  }
}