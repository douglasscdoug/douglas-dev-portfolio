import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { Project } from '../../shared/models/project';
import { ProjectCardComponent } from "../../shared/components/project-card/project-card.component";

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit{
  public projects: Project[] = [
    {
      title: 'Sistema administrativo empresarial',
      description: 'Sistema administrativo web com login, cadastro de empresas e usuários.',
      imageUrl: 'assets/images/projects/empresas.webp',
      technologies: ['angular', '.NET', 'SQLite', 'JWT', 'Ef Core'],
      githubUrl: 'https://github.com/douglasscdoug/Sistema-Administrativo-de-Empresas',
      featured: true
    },
    {
      title: 'ProEventos',
      description: 'Sistema web com login, cadastro de eventos com gerenciamento de participantes, local, lote e redes sociais.',
      imageUrl: 'assets/images/projects/eventos.webp',
      technologies: ['angular', '.NET API', 'SQLite', 'JWT', 'Ef Core'],
      githubUrl: 'https://github.com/douglasscdoug/ProEventos'
    },
    {
      title: 'Portfolio Pessoal',
      description: 'Portfólio desenvolvido em Angular com Bootstrap, animações AOS e layout responsivo.',
      imageUrl: 'assets/images/projects/portfolio.webp',
      technologies: ['angular', 'TypeScript', 'SCSS', 'Bootstrap', 'AOS'],
      githubUrl: 'https://github.com/douglasscdoug/douglas-dev-portfolio'
    }
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  AOS.init({
    once: true,
    duration: 700
  });
}
}
