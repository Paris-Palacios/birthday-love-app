import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-name-input',
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './name-input.component.html',
  styleUrl: './name-input.component.css'
})
export class NameInputComponent {
  name = '';
  errorMessage = '';
  validNames = ['atena', 'arduizur', 'miku', 'mikum', 'mikulito', 'santos', 'torres']
  invalidNamesMessages = [
    "Ui no, esa no eres tú",
    "Mmm no kreo...",
    "una mas y te voy a tener que besuquear",
    "Eso suena a alguien muuuy diferente",
    "Esa no es mi bebe hermosa preciosa",
    "Ese no es mikulito que pedo",
    "Apoco si muy verguda y olvidadiza que pedo?",
    "No mames ya adivinale 😋",
    "Te estas ganando unos madrazos",
    "Esa no es mi miku bebe preciosa",
    "Ya wey que pedo, adivinale atinale",
  ];

  @Output() validName = new EventEmitter<void>();

  verifyName() {
    const inputName = this.name.trim().toLowerCase();
    if(this.validNames.includes(inputName)) {
      this.validName.emit();
    } else {
      const random = Math.floor(
        Math.random()*(this.invalidNamesMessages.length));
      console.log(random + " " + this.invalidNamesMessages[random]);
      this.errorMessage =
        this.invalidNamesMessages[random];
    }
  }
}
