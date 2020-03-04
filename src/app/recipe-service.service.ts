import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators'
import { Component, OnInit, Input } from '@angular/core';
import {RecipeGlobal, Recipe} from './pojos/recipe'

@Injectable({
  providedIn: 'root'
})
export class SearchRecipeService {

  constructor(
    private http: HttpClient) {}

    private searchUrl = 'https://api.edamam.com/search?q=bandeja paisa&app_id=130c9f0a&app_key=9361107e5c6cff70960f150be425160e&from=0&to=3&calories=591-722&health=alcohol-free';

  getRecipeInfo(): Observable<RecipeGlobal>{
         return this.http.get<RecipeGlobal>(this.searchUrl);
  }
  

}