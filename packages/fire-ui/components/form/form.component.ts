import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'fire-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  form: FormGroup = new FormGroup({});
  @Input() config;
  @Input() item;
  @Output() action = new EventEmitter();

}
