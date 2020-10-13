import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatBePage } from './cat-be.page';

describe('CatBePage', () => {
  let component: CatBePage;
  let fixture: ComponentFixture<CatBePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatBePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatBePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
