import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { FormViewComponent } from './form-view/form-view.component';
import { FormResponsesComponent } from './form-responses/form-responses.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'forms/:id', component: FormViewComponent },
  { path: 'responses', component: FormResponsesComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes), HttpClientModule],
    exports: [RouterModule],
    providers: [FormResponsesComponent, FormViewComponent]
  })
  export class AppRoutingModule {}