import {Component, Input} from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-sticky-notes',
  imports: [
    NgStyle
  ],
  templateUrl: './sticky-notes.component.html',
  styleUrl: './sticky-notes.component.css'
})
export class StickyNotesComponent {
  @Input() phrase: string = '';
  @Input() top: number = 100;
  @Input() left: number = 100;

  randomRotation = Math.floor(Math.random()*10 - 5);
}
