import { Component } from '@angular/core';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent {

  constructor (private cs: CategorieService) {

  }

  categories:any

  // ajouté ds l'import en haut
  ngOnInit(): void {
    this.categories = this.cs.readCategories();

  }
  
}
