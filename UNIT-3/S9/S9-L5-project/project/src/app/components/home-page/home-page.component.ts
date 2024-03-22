import { Component } from '@angular/core';
import { Car } from 'src/models/car.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  cars!: Car[];

  constructor() {
    this.getCars().then((res) => (this.cars = res));
  }

  async getCars(): Promise<Car[]> {
    const response = await fetch('../../../assets/db.json');
    const data = (await response.json()) as Car[];
    return this.shuffleArray(data).slice(0, 2);
  }

  shuffleArray(array: Car[]): Car[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
