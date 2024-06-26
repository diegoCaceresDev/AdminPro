import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotpagefoundComponent } from './notpagefound/notpagefound.component';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

const routes: Routes = [
  // path : '/dashboard' PagesRoutingModule
  // path: '/auth' AuthRoutingModule
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NotpagefoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
