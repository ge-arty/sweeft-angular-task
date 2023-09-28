import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user/:id', component: UserDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
