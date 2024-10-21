import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-responses',
  standalone: true,
  imports: [],
  templateUrl: './form-responses.component.html',
  styleUrl: './form-responses.component.scss'
})
export class FormResponsesComponent implements OnInit{
  formId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log("Llegue al view");
    this.route.paramMap.subscribe(params => {
      this.formId = params.get('id');
    });
    console.log("el id es: ", this.formId);
  }
}
