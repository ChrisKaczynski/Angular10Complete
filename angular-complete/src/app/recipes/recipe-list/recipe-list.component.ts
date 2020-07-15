import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', "https://static.polityka.pl/_resource/res/path/22/99/229904bf-a6ef-4889-bcab-cd16647d25ed_f1400x900"),
    new Recipe('A test recipe', 'This is simply a test', "https://static.polityka.pl/_resource/res/path/22/99/229904bf-a6ef-4889-bcab-cd16647d25ed_f1400x900")
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
