import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReteEditorComponent } from './rete-editor.component';

describe('ReteEditorComponent', () => {
  let component: ReteEditorComponent;
  let fixture: ComponentFixture<ReteEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReteEditorComponent]
    });
    fixture = TestBed.createComponent(ReteEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
