import {Component, Input, OnInit} from '@angular/core';
import {Note} from 'src/app/models/note';

@Component({
  selector: 'subject-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
})
export class NoteListComponent implements OnInit {
  @Input() notes: Note[] = [];

  constructor() {
  }

  ngOnInit() {
    console.log(this.notes);
  }
}
