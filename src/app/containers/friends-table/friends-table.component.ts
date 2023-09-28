import { Router } from '@angular/router';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';
import { InfiniteScrollDirective } from 'src/app/directives/infinite-scroll.directive';

@Component({
  selector: 'app-friends-table',
  templateUrl: './friends-table.component.html',
  styleUrls: ['./friends-table.component.css'],
})
export class FriendsTableComponent implements OnInit {
  friends: User[] = [];

  _user: User | undefined;

  set user(val: User) {
    if (this._user != val) {
      this._user = val;

      this.friends = [];

      setTimeout(() => {
        if (this._infiniteScroll) {
          this._infiniteScroll.reloadData();
        }
      });
    }
  }

  @Input() get user() {
    return this._user!;
  }

  @Output() friendSelected = new EventEmitter<number>();

  @ViewChild(InfiniteScrollDirective)
  _infiniteScroll: InfiniteScrollDirective;

  constructor(private _userService: UserService, private router: Router) {}

  getFriendsByUserId = (start: number, end: number) => {
    return this._userService.getFriendsByUserId(this.user!.id, start, end);
  };

  showMore(userId: number) {
    this.friendSelected.emit(userId);
  }

  ngOnInit(): void {}
}
