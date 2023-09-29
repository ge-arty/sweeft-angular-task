import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Observable } from 'rxjs';

// ------------ Creating reusable directive to define  Infinite Scroll Logic.
@Directive({ selector: '[appInfiniteScroll]' })
export class InfiniteScrollDirective {
  @Input() amountPerLoad = 20;
  @Input() data: any[] = [];
  @Input() dataSource: (start: number, end: number) => Observable<any[]>;

  reloadData() {
    this.start = 0;
    this.end = this.amountPerLoad;

    this.loadMoreData();
  }

  start: number = 0;
  end: number = this.amountPerLoad;

  constructor(private el: ElementRef) {}

  @HostListener('scroll', ['$event'])
  onScroll(event: Event): void {
    const element = event.target as HTMLElement;
    // ------- Defining the height where scroll should call the function
    if (element.scrollTop + element.clientHeight >= element.scrollHeight) {
      this.loadMoreData();
    }
  }

  // ------ Main logic to load more data by defining start and end for scroll
  private loadMoreData() {
    this.dataSource(this.start, this.end).subscribe((newItems) => {
      newItems.forEach((i) => this.data.push(i));
      this.start = this.end;
      this.end += this.amountPerLoad;
    });
  }
}
