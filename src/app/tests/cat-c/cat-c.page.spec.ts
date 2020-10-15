import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatCPage } from './cat-c.page';

describe('CatCPage', () => {
  let component: CatCPage;
  let fixture: ComponentFixture<CatCPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatCPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
