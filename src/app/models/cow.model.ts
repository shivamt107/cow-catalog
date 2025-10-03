export enum CowSex {
  Male = 'Male',
  Female = 'Female'
}

export enum CowStatus {
  Active = 'Active',
  InTreatment = 'In Treatment',
  Deceased = 'Deceased'
}

export enum EventType {
  WeightCheck = 'Weight Check',
  Treatment = 'Treatment',
  PenChange = 'Pen Change',
  Death = 'Death',
  Created = 'Created'
}

export interface CowEvent {
  id: string;
  cowId: string;
  type: EventType;
  date: Date;
  description: string;
  weight?: number;
  previousPen?: string;
  newPen?: string;
}

export interface Cow {
  id: string;
  earTag: string;
  sex: CowSex;
  pen: string;
  status: CowStatus;
  weight?: number;
  createdDate: Date;
  lastEventDate: Date;
  events: CowEvent[];
}

export interface CowFilters {
  searchTag?: string;
  status?: CowStatus;
  pen?: string;
}