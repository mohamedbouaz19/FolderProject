import { Component } from '@angular/core';
import { MenuComponent } from "./menu/menu.component";
import { ListeComponent } from "./liste/liste.component";

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [MenuComponent, ListeComponent],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

}
