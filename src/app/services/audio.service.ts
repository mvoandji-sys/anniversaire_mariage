import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audio: HTMLAudioElement;
  private isPlaying = new BehaviorSubject<boolean>(false);
  public isPlaying$ = this.isPlaying.asObservable();

  constructor() {
    this.audio = new Audio();
    this.audio.src = 'https://www.soundjay.com/misc/sounds/magic-chime-02.wav';
    this.audio.loop = true;
    this.audio.volume = 0.3;
  }

  toggleAudio(): void {
    if (this.isPlaying.value) {
      this.pause();
    } else {
      this.play();
    }
  }

  play(): void {
    this.audio.play().then(() => {
      this.isPlaying.next(true);
    }).catch(error => {
      console.log('Audio play failed:', error);
    });
  }

  pause(): void {
    this.audio.pause();
    this.isPlaying.next(false);
  }

  setVolume(volume: number): void {
    this.audio.volume = Math.max(0, Math.min(1, volume));
  }
}