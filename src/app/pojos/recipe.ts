export interface RecipeGlobal {
    q:     string;
    hits:  Hit[];
}

export interface Hit {
    recipe:     Recipe;
}

export interface Recipe {
    label:           string;
    url:             string;
    image:           string;
}
