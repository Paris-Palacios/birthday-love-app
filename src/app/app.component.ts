import {Component} from '@angular/core';
import {NameInputComponent} from './components/name-input/name-input.component';
import {BirthdayAnimationComponent} from './components/birthday-animation/birthday-animation.component';
import {NgIf} from '@angular/common';
import {Phase} from './enums/enum';


@Component({
  selector: 'app-root',
  imports: [NameInputComponent, BirthdayAnimationComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'birthday-gift';
  currentPhase: Phase = Phase.NAME;
  changePhaseToBirthday() {
    this.currentPhase = Phase.BIRTHDAY;
    console.log(this.currentPhase);
  }

  protected readonly Phase = Phase;
}
