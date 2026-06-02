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
      icon: 'devicon-angularjs-plain colored',
      category: 'Front-end'
    },
    {
      name: 'TypeScript',
      icon: 'devicon-typescript-plain colored',
      category: 'Front-end'
    }, {
      name: 'HTML5',
      icon: 'devicon-html5-plain colored',
      category: 'Front-end'
    }, {
      name: 'CSS3',
      icon: 'devicon-css3-plain colored',
      category: 'Front-end'
    }, {
      name: 'Bootstrap',
      icon: 'devicon-bootstrap-plain colored',
      category: 'Front-end'
    }, {
      name: 'C#',
      icon: 'devicon-csharp-plain colored',
      category: 'Back-end'
    }, {
      name: '.NET',
      icon: 'devicon-dot-net-plain-wordmark colored',
      category: 'Back-end'
    }, {
      name: 'ASP.NET Core',
      icon: 'devicon-dotnetcore-plain colored',
      category: 'Back-end'
    }, {
      name: 'Entity Framework Core',
      icon: 'devicon-entityframeworkcore-plain colored',
      category: 'Back-end'
    }, {
      name: 'REST APIs',
      icon: 'devicon-swagger-plain colored',
      category: 'Back-end'
    }, {
      name: 'JWT Authentication',
      icon: 'devicon-oauth-plain colored',
      category: 'Back-end'
    }, {
      name: 'SQL Server',
      icon: 'devicon-microsoftsqlserver-plain-wordmark colored',
      category: 'Banco de dados'
    }, {
      name: 'Git',
      icon: 'devicon-git-plain colored',
      category: 'Ferramentas'
    }, {
      name: 'GitHub',
      icon: 'devicon-github-original',
      category: 'Ferramentas'
    },
    {
      name: 'VS Code',
      icon: 'devicon-vscode-plain colored',
      category: 'Ferramentas'
    }
  ];

  ngOnInit(): void {
    AOS.init();
  }
}
