import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { CowService } from '../services/cow.service';
import { Cow, CowFilters, CowStatus } from '../models/cow.model';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'app-cow-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    ButtonModule,
    InputTextModule,
    SelectModule,
    CardModule,
    TableModule,
    TagModule
  ],
  templateUrl: './cow-list.component.html',
  styleUrl: './cow-list.component.scss'
})
export class CowListComponent implements OnInit, OnDestroy {
  cows: Cow[] = [];
  filteredCows: Cow[] = [];
  filters: CowFilters = {};
  
  searchTag: string = '';
  selectedStatus: CowStatus | null = null;
  selectedPen: string | null = null;

  private subscriptions = new Subscription();
  
  statusOptions = [
    { label: 'All Statuses', value: null },
    { label: 'Active', value: CowStatus.Active },
    { label: 'In Treatment', value: CowStatus.InTreatment },
    { label: 'Deceased', value: CowStatus.Deceased }
  ];
  
  penOptions: { label: string; value: string | null }[] = [];

  constructor(
    private cowService: CowService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCows();
    this.loadFilters();
    this.loadPenOptions();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private loadCows(): void {
    const cowsSub = this.cowService.getCows().subscribe(cows => {
      this.cows = cows;
      // Apply current filters to the loaded cows
      this.filteredCows = this.cowService.getFilteredCows(this.filters);
    });
    this.subscriptions.add(cowsSub);
  }

  private loadFilters(): void {
    const filtersSub = this.cowService.filters$.subscribe(filters => {
      this.filters = filters;
      this.searchTag = filters.searchTag || '';
      this.selectedStatus = filters.status || null;
      this.selectedPen = filters.pen || null;
      // Only apply filters if we have cows loaded
      if (this.cows.length > 0) {
        this.filteredCows = this.cowService.getFilteredCows(this.filters);
      }
    });
    this.subscriptions.add(filtersSub);
  }

  private loadPenOptions(): void {
    const pens = this.cowService.getPens();
    this.penOptions = [
      { label: 'All Pens', value: null },
      ...pens.map(pen => ({ label: pen, value: pen }))
    ];
  }

  applyFilters(): void {
    this.filters = {
      searchTag: this.searchTag || undefined,
      status: this.selectedStatus || undefined,
      pen: this.selectedPen || undefined
    };

    this.cowService.setFilters(this.filters);
    this.filteredCows = this.cowService.getFilteredCows(this.filters);
  }

  clearFilters(): void {
    this.searchTag = '';
    this.selectedStatus = null;
    this.selectedPen = null;
    this.cowService.clearFilters();
    this.applyFilters();
  }

  getStatusSeverity(status: CowStatus): 'success' | 'info' | 'warn' | 'danger' {
    switch (status) {
      case CowStatus.Active:
        return 'success';
      case CowStatus.InTreatment:
        return 'warn';
      case CowStatus.Deceased:
        return 'danger';
      default:
        return 'info';
    }
  }

  viewCowDetail(cow: Cow): void {
    this.router.navigate(['/cow', cow.id]);
  }

  addNewCow(): void {
    this.router.navigate(['/add-cow']);
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString();
  }
}