import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DatabankComponent } from './components/databank/databank.component';
import { TacticalGuideComponent } from './components/tactical-guide/tactical-guide.component';
import { HomeComponent } from './components/home/home.component';
import { EntryComponent } from './components/entry/entry.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'databank', component: DatabankComponent },
  { path: 'tacticalGuide', component: TacticalGuideComponent },
  { path: 'entry/:id', component: EntryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
