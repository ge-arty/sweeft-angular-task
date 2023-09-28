import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './containers/header/header.component';
import { FooterComponent } from './containers/footer/footer.component';
import { HomeComponent } from './containers/home/home.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { InfiniteScrollDirective } from './directives/infinite-scroll.directive';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { FriendsTableComponent } from './containers/friends-table/friends-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UserComponent,
    UserDetailsComponent,
    InfiniteScrollDirective,
    UserProfileComponent,
    FriendsTableComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
