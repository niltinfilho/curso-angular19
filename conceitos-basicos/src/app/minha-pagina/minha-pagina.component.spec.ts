import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaPaginaComponent } from './minha-pagina.component';

describe('MinhaPaginaComponent', () => {
  let component: MinhaPaginaComponent;
  let fixture: ComponentFixture<MinhaPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinhaPaginaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinhaPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
