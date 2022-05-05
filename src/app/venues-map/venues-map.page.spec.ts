import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VenuesMapPage } from './venues-map.page';

describe('VenuesMapPage', () => {
  let component: VenuesMapPage;
  let fixture: ComponentFixture<VenuesMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VenuesMapPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VenuesMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
