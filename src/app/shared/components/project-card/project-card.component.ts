import { CommonModule } from '@angular/common';
import { Component, inject, Input, TemplateRef, ViewChild } from '@angular/core';
import { Project } from '../../models/project';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CarouselConfig, CarouselModule } from "ngx-bootstrap/carousel";

@Component({
  selector: 'app-project-card',
  imports: [CommonModule, CarouselModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input({ required: true })
  public project!: Project;

  @ViewChild('galleryModal')
  galleryModal!: TemplateRef<any>;

  private modalService = inject(BsModalService);

  public selectedProject?: Project;
  public modalRef?: BsModalRef;

  public openGallery(project: Project): void {
    this.selectedProject = project;
    this.modalRef = this.modalService.show(this.galleryModal, {
      class: 'modal-xl'
    });
  }
}
