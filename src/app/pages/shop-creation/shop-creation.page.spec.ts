import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopCreationPage } from './shop-creation.page';

describe('ShopCreationPage', () => {
  let component: ShopCreationPage;
  let fixture: ComponentFixture<ShopCreationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopCreationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopCreationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
