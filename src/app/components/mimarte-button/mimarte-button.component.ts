import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {StickyNotesComponent} from '../sticky-notes/sticky-notes.component';

@Component({
  selector: 'app-mimarte-button',
  imports: [
    NgIf,
    StickyNotesComponent,
    NgForOf
  ],
  templateUrl: './mimarte-button.component.html',
  styleUrl: './mimarte-button.component.css'
})
export class MimarteButtonComponent implements OnInit {

  showMimateButton = false;
  showFinalComponent = false;
  currentPhraseIndex = 0;
  gifUrl = 'assets/catlove.gif';
  phrases = [
    "pinche niña preciosa",
    "una de lol?",
    "cosita bella",
    "niña hermosa",
    "mi solecito precioso",
    "mikulito",
    "mi ternurina",
    "mi LOLERA favorita",
    "mi bebe atascadota",
    "a poco si mucho pinche amor",
    "niña de mis ojos",
    "mikulin",
    "mikum",
    "te como toda",
    "a poco si muy verguda",
    "nos agarramos a vergazos como la vez",
    "me como tu trompita",
    "te manoseo toda",
    "me encantas",
    "pinche hermosa estupida preciosa"
  ];

  stickyNotes: { phrase: string; top: number; left: number }[] = [];
  funnyText: string = "Ya wey no son pinches enchiladas, ten un pinche feliz cumpleaños y alaverga.... es bromi" +
    " TE AMOOOOOO!!!";

  addStickyNote() {
    if(this.currentPhraseIndex >= this.phrases.length) {
      this.showFinalComponent = true;
    } else {
      const phrase = this.phrases[this.currentPhraseIndex++];
      const top = Math.floor(Math.random() * (window.innerHeight - 160));
      const left = Math.floor(Math.random() * (window.innerWidth - 180));
      this.stickyNotes.push({phrase, top, left});
    }

  }
  ngOnInit() {
      setTimeout(() => {
        this.showMimateButton = true;
      }, 5000);
    }
}
