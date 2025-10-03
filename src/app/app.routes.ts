import { Routes } from '@angular/router';
import { CowListComponent } from './cow-list/cow-list.component';
import { AddCowComponent } from './add-cow/add-cow.component';
import { CowDetailComponent } from './cow-detail/cow-detail.component';

export const routes: Routes = [
  { path: '', component: CowListComponent },
  { path: 'add-cow', component: AddCowComponent },
  { path: 'cow/:id', component: CowDetailComponent },
  { path: '**', redirectTo: '' }
];
