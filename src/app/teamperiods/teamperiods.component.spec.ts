import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPeriodsComponent } from './teamperiods.component';
import { RouterTestingModule } from '@angular/router/testing';
import { OkrStorageService } from '../okrstorage.service';

describe('TeamPeriodsComponent', () => {
  let component: TeamPeriodsComponent;
  let fixture: ComponentFixture<TeamPeriodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamPeriodsComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        OkrStorageService,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPeriodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});