import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  joke = 'Kattints a gombra egy véletlenszerű viccért!';


	fetchJoke() {
		fetch('http://localhost:8081/joke')
			.then(response => response.json())
			.then(data => {
				this.joke = data.joke;
			})
			.catch(error => {
				console.error('Hiba történt:', error);
				this.joke = 'Nem sikerült betölteni a viccet.';
			});
	}
}