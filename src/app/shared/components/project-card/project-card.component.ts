import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input({ required: true })
  project!: Project;
}
