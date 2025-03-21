import {Component, OnInit} from '@angular/core';
import {ISourceOptions} from "@tsparticles/engine";
import {loadSlim} from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import {NgParticlesService, NgxParticlesModule} from "@tsparticles/angular";
import {MimarteButtonComponent} from '../mimarte-button/mimarte-button.component';

@Component({
  selector: 'app-birthday-animation',
  imports: [NgxParticlesModule, MimarteButtonComponent],
  templateUrl: './birthday-animation.component.html',
  styleUrl: './birthday-animation.component.css'
})
export class BirthdayAnimationComponent implements OnInit {
  showMimateButton = false;
  id = "tsparticles";

  /* or the classic JavaScript object */
  particlesOptions: ISourceOptions = {
    background: {
      color: {
        value: 'transparent'
      }
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: 'push' },
        onHover: { enable: true, mode: 'bubble' }
      },
      modes: {
        push: { quantity: 5 },
        bubble: {
          distance: 100,
          duration: 1,
          size: 10,
          opacity: 1
        }
      }
    },
    particles: {
      number: {
        value: 200,
        density: { enable: true, width: 800, height: 800 }
      },
      color: {
        value: ['#ff69b4', '#fbc2eb', '#ffffff', '#87cefa']
      },
      shape: {
        type: ['circle', 'star']
      },
      opacity: {
        value: {
          min: 0.5,
          max: 1
        }
      },
      size: {
        value: {
          min: 4,
          max: 12
        }
      },
      move: {
        enable: true,
        speed: 15,
        direction: 'top',
        random: true,
        straight: false,
        outModes: {
          default: 'out'
        }
      }
    },
    detectRetina: true
  };

  constructor(private readonly ngParticlesService: NgParticlesService) {}

  ngOnInit(): void {
    this.ngParticlesService.init(async (engine) => {
      await loadSlim(engine);
    })
  }
}
