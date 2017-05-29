import { Component } from '@angular/core';
import { NoteApi } from '../../../shared/sdk/services/custom/Note';
import { Note } from '../../../shared/sdk/models/Note';
import { UiService } from '../../../ui/ui.service';

@Component({
  selector: 'fire-note-list',
  template: `
    <fire-note-form (create)="create($event)"></fire-note-form>
    <ul *ngIf="notes.length" class="list-unstyled mb-0 mt-3 px-3">
      <li *ngFor="let note of notes">
        <fire-note-list-item
          (update)="update($event)"
          (remove)="remove($event)" [note]="note"></fire-note-list-item>
      </li>
    </ul>
  `,
})
export class ListComponent {

  public notes: Note[] = [];

  constructor(
    public noteApi: NoteApi,
    public uiService: UiService,
  ) {
    this.find();
  }

  find(): void {
    this.noteApi
      .find()
      .subscribe((res: Note[]) => this.notes = res);
  }

  create(note: Note): void {
    this.noteApi
      .create(note)
      .subscribe(
      success => this.handleSuccess('Create', success),
      error => this.handleError('Create', error)
      );
  }

  update(note: Note): void {
    this.noteApi
      .upsert(note)
      .subscribe(
      success => this.handleSuccess('Update', success),
      error => this.handleError('Update', error)
      );
  }

  remove(note: Note): void {
    this.noteApi
      .deleteById(note.id)
      .subscribe(
      success => this.handleSuccess('Delete', success),
      error => this.handleError('Delete', error),
    );
  }

  handleSuccess(action, success) {
    this.uiService.toastSuccess(`Note ${action} Success`, '');
    this.find();
  }

  handleError(action, error) {
    this.uiService.toastError(`Note ${action} Error`, error.message);
  }

}
