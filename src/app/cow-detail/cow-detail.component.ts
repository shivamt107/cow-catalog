import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { TimelineModule } from 'primeng/timeline';
import { MessageModule } from 'primeng/message';
import { CowService } from '../services/cow.service';
import { Cow, CowEvent, CowStatus } from '../models/cow.model';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'app-cow-detail',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ButtonModule,
    CardModule,
    TagModule,
    TimelineModule,
    MessageModule
  ],
  templateUrl: './cow-detail.component.html',
  styleUrl: './cow-detail.component.scss'
})
export class CowDetailComponent implements OnInit {
  cow: Cow | null = null;
  dailyWeightGain: number | null = null;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cowService: CowService
  ) {}

  ngOnInit(): void {
    const cowId = this.route.snapshot.paramMap.get('id');
    if (cowId) {
      this.loadCow(cowId);
    }
  }

  private loadCow(id: string): void {
    this.cow = this.cowService.getCowById(id) || null;
    if (this.cow) {
      this.dailyWeightGain = this.cowService.getDailyWeightGain(this.cow);
    }
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


  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  formatDateTime(date: Date): string {
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  getCurrentWeight(): number | null {
    if (!this.cow || !this.cow.events.length) return null;
    
    const weightEvents = this.cow.events.filter(e => e.weight !== undefined);
    if (weightEvents.length === 0) return this.cow.weight || null;
    
    const latestWeightEvent = weightEvents.sort((a, b) => b.date.getTime() - a.date.getTime())[0];
    return latestWeightEvent.weight || null;
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}