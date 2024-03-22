import { Component } from '@angular/core';
import { Car } from 'src/models/car.interface';

@Component({
  selector: 'app-fiat-page',
  templateUrl: './fiat-page.component.html',
  styleUrls: ['./fiat-page.component.scss'],
})
export class FiatPageComponent {
  cars!: Car[];

  constructor() {
    this.getFiatCars().then((res) => (this.cars = res));
  }

  async getFiatCars(): Promise<Car[]> {
    const response = await fetch('../../../assets/db.json');
    const data = (await response.json()) as Car[];
    return this.shuffleArray(data.filter((car) => car.brand === 'Fiat')).slice(
      0,
      2
    );
  }

  shuffleArray(array: Car[]): Car[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
