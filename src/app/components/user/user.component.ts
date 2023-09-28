import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input() user: User;

  constructor(private router: Router) {
    this.user = {} as User;
  }

  showMore(userId: number) {
    this.router.navigate(['/user', userId]);
  }
}
