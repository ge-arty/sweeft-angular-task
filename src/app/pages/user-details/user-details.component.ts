import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  @Input() user: User;
  userId: string | null;

  constructor(
    private route: ActivatedRoute,
    private _userService: UserService,
    private router: Router
  ) {
    this.userId = this.route.snapshot.paramMap.get('id');
  }

  getUsers = (start: number, end: number) => {
    return this._userService.getUsers(start, end);
  };

  onFriendSelected(userId: number) {
    this.loadUser(userId);

    this.router.navigate(['/user', userId]);
  }

  ngOnInit(): void {
    if (this.userId) {
      const userId = +this.userId;

      this.loadUser(userId);
    }
  }

  loadUser(userId: number) {
    this._userService.getUserById(userId).subscribe((user) => {
      this.user = user;
    });
  }
}
