import { Component } from '@angular/core';
import { MenuComponent } from "./menu/menu.component";
import { ListeComponent } from "./liste/liste.component";
import { FormComponent } from "./form/form.component";

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [MenuComponent, ListeComponent, FormComponent],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

}
