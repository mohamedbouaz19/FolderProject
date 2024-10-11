import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent {
students =[
  {"id":1,"nom":"HARIII","note":18},
  {"id":2,"nom":"Annass","note":14},
  {"id":3,"nom":"HHHmed","note":20},


]
}
