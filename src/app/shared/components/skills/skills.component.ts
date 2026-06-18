import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models/skill';
import AOS from 'aos'

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {
  public skills: Skill[] = [
    {
      name: 'Angular',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg',
      category: 'Front-end'
    },
    {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      category: 'Front-end'
    }, {
      name: 'HTML5',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg',
      category: 'Front-end'
    }, {
      name: 'CSS3',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg',
      category: 'Front-end'
    }, {
      name: 'Bootstrap',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg',
      category: 'Front-end'
    }, {
      name: 'C#',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
      category: 'Back-end'
    }, {
      name: '.NET',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original-wordmark.svg',
      category: 'Back-end'
    }, {
      name: 'ASP.NET Core',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg',
      category: 'Back-end'
    }, {
      name: 'EF Core',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/entityframeworkcore/entityframeworkcore-original.svg',
      category: 'Back-end'
    }, {
      name: 'REST APIs',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg',
      category: 'Back-end'
    }, {
      name: 'JWT Authentication',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-original.svg',
      category: 'Back-end'
    }, {
      name: 'SQL Server',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg',
      category: 'Banco de dados'
    }, {
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
      category: 'Ferramentas'
    }, {
      name: 'GitHub',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
      category: 'Ferramentas'
    },
    {
      name: 'VS Code',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
      category: 'Ferramentas'
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
