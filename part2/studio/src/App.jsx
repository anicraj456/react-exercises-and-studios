import "./App.css";
import RateARecipe from "./components/RateARecipe";
import Button from "./components/Button";
import AuthorInfo from "./components/AuthorInfo";
import IngredientList from "./components/Ingredients";
import RecipeImage from "./components/RecipeImage";
import RecipeName from "./components/RecipeName";

export default function App() {
  const pin=recipedata.map(recipe =>{ 

  return (
    <div key = {recipe.name}>
      <RecipeImage recipe={recipe}/>
      <RecipeName recipe={recipe}/>
      <RateARecipe rating={3} />
      <Button saveButton={true} />
      <AuthorInfo recipe={recipe}/>
      <IngredientList recipe={recipe}/>
      </div>
  );
  });
    return(
      <>
      {pin}
      </>
    );
  
}
