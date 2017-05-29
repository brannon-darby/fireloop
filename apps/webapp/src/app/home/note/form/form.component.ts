import { Component, EventEmitter, Output } from '@angular/core';
import { Note } from '../../../shared/sdk/models/Note'

@Component({
  selector: 'fire-note-form',
  template: `
    <form (submit)="submit()">
      <div class="input-group">
        <input class="form-control" required name="note" type="text" [(ngModel)]="note.title" placeholder="Add Note" />
        <span class="input-group-btn">
          <button class="btn btn-primary">
            <i class="fa fa-fw fa-plus"></i>&nbsp; Add Note
          </button>
        </span>
      </div>
    </form>
  `,
})
export class FormComponent {

  public note: Note = new Note();

  submit() {
    this.create.emit(this.note);
    this.note = new Note();
  }

  @Output() create = new EventEmitter();
}
