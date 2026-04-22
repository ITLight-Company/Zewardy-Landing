import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoLandingComponent } from './seo-landing.component';

describe('SeoLandingComponent', () => {
  let component: SeoLandingComponent;
  let fixture: ComponentFixture<SeoLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeoLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeoLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
