import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NativePluginsTestPage } from './native-plugins-test.page';

describe('NativePluginsTestPage', () => {
  let component: NativePluginsTestPage;
  let fixture: ComponentFixture<NativePluginsTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativePluginsTestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NativePluginsTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
