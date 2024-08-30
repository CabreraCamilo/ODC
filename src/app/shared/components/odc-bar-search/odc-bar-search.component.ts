import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'odc-bar-search',
  templateUrl: './odc-bar-search.component.html',
  styleUrls: ['./odc-bar-search.component.scss']
})
export class OdcBarSearchComponent implements OnInit, OnDestroy {
  @Output() search = new EventEmitter<string | undefined>();
  @Input() placeholder = '';
  searchControl = new FormControl('');

  isLoading = false;

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.setupSearchSubscription();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private setupSearchSubscription(): void {
    this.searchControl.valueChanges.pipe(
      tap(() => this.isLoading = true),
      debounceTime(500),
      distinctUntilChanged(),
      map(term => term ? term.trim(): ''),
      filter(term => term.length > 2 || term.length === 0),
      tap(term => {
        this.search.emit(term);
        this.isLoading = false;
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }
}
