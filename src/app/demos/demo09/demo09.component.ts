import { Component } from '@angular/core';

@Component({
  selector: 'app-demo09',
  templateUrl: './demo09.component.html',
  styleUrls: ['./demo09.component.scss']
})
export class Demo09Component {

  isToggled: boolean = false;
  list: string[] = ['pomme', 'poire', 'ananas', 'banane', 'cerise', 'pêche'];
  inputValue: string = '';

  toggle (): void {
    this.isToggled = !this.isToggled;
  }

}
