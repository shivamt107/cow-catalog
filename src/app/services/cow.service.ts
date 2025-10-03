import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cow, CowEvent, CowFilters, CowSex, CowStatus, EventType } from '../models/cow.model';

@Injectable({
  providedIn: 'root'
})
export class CowService {
  private readonly STORAGE_KEY = 'cow-catalog-data';
  private cowsSubject = new BehaviorSubject<Cow[]>([]);
  private filtersSubject = new BehaviorSubject<CowFilters>({});

  cows$ = this.cowsSubject.asObservable();
  filters$ = this.filtersSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadCows();
  }

  private loadCows(): void {
    const data = localStorage.getItem(this.STORAGE_KEY);
    if (data) {
      const cows = JSON.parse(data).map((cow: any) => ({
        ...cow,
        createdDate: new Date(cow.createdDate),
        lastEventDate: new Date(cow.lastEventDate),
        events: cow.events.map((event: any) => ({
          ...event,
          date: new Date(event.date)
        }))
      }));
      this.cowsSubject.next(cows);
    } else {
      this.loadInitialDataFromJson();
    }
  }

  private loadInitialDataFromJson(): void {
    this.http.get<{cows: any[]}>('/assets/data/cows-dataset.json').subscribe({
      next: (data) => {
        const cows = data.cows.map((cow: any) => ({
          ...cow,
          createdDate: new Date(cow.createdDate),
          lastEventDate: new Date(cow.lastEventDate),
          events: cow.events.map((event: any) => ({
            ...event,
            date: new Date(event.date)
          }))
        }));
        this.cowsSubject.next(cows);
        this.saveCows();
      },
      error: (error) => {
        console.error('Failed to load initial cow data:', error);
        // Fallback to empty array if JSON loading fails
        this.cowsSubject.next([]);
      }
    });
  }

  private saveCows(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.cowsSubject.value));
  }



  getCows(): Observable<Cow[]> {
    return this.cows$;
  }

  getCowById(id: string): Cow | undefined {
    return this.cowsSubject.value.find(cow => cow.id === id);
  }

  getCowByEarTag(earTag: string): Cow | undefined {
    return this.cowsSubject.value.find(cow => cow.earTag === earTag);
  }

  addCow(cowData: Omit<Cow, 'id' | 'createdDate' | 'lastEventDate' | 'events'>): Cow {
    const now = new Date();
    const cowId = `cow-${Date.now()}`;
    
    const newCow: Cow = {
      ...cowData,
      id: cowId,
      createdDate: now,
      lastEventDate: now,
      events: [{
        id: `${cowId}-created`,
        cowId,
        type: EventType.Created,
        date: now,
        description: 'Cow added to catalog'
      }]
    };

    const cows = [...this.cowsSubject.value, newCow];
    this.cowsSubject.next(cows);
    this.saveCows();
    
    return newCow;
  }

  getFilteredCows(filters: CowFilters): Cow[] {
    let filtered = this.cowsSubject.value;

    if (filters.searchTag) {
      filtered = filtered.filter(cow => 
        cow.earTag.toLowerCase().includes(filters.searchTag!.toLowerCase())
      );
    }

    if (filters.status) {
      filtered = filtered.filter(cow => cow.status === filters.status);
    }

    if (filters.pen) {
      filtered = filtered.filter(cow => cow.pen === filters.pen);
    }

    return filtered;
  }

  setFilters(filters: CowFilters): void {
    this.filtersSubject.next(filters);
  }

  getFilters(): CowFilters {
    return this.filtersSubject.value;
  }

  getPens(): string[] {
    const pens = this.cowsSubject.value.map(cow => cow.pen);
    return [...new Set(pens)].sort();
  }

  isEarTagUnique(earTag: string, excludeId?: string): boolean {
    return !this.cowsSubject.value.some(cow => 
      cow.earTag.toLowerCase() === earTag.toLowerCase() && cow.id !== excludeId
    );
  }

  getDailyWeightGain(cow: Cow): number | null {
    const weightEvents = cow.events
      .filter(event => event.weight !== undefined)
      .sort((a, b) => a.date.getTime() - b.date.getTime());

    if (weightEvents.length < 2) return null;

    const latest = weightEvents[weightEvents.length - 1];
    const previous = weightEvents[weightEvents.length - 2];
    
    const daysDiff = (latest.date.getTime() - previous.date.getTime()) / (1000 * 60 * 60 * 24);
    const weightDiff = latest.weight! - previous.weight!;

    return daysDiff > 0 ? weightDiff / daysDiff : 0;
  }
}