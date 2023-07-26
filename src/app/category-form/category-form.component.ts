import { Component, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategorieService } from '../services/categorie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent {

  constructor(private cs: CategorieService, private router: Router, private route: ActivatedRoute) { }

  // Ajout ? ou Modif ? -> :
  id: string | null = '0';
  categorie = {

    titre: '',

  };


  formulaire(form: NgForm, id: any) {

    console.log("id:", id, form.value);

    if (id == null) {

      // console.log("coucou");

      let test = this.cs.createCategorie(form.value);

    } else {

      this.cs.updateCategorie(form.value, id);

    }

  }



  // Capte le param en GET pour la modif :
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id != null) {

      this.categorie = this.cs.readOneCategorie(this.id)

    }

  }

}