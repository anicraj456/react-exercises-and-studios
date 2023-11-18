import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.yummytummyaarthi.com/paneer-butter-masala/";
   let authorPhoto = "https://www.yummytummyaarthi.com/wp-content/uploads/2022/09/IMG_9382.jpg";
   let authorName = "Aarthi";

   return (
      <div>
         <img src={authorPhoto} alt = "" 
         style={{objectFit: "contain", borderRadius: "50%", width : "200px" }} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ['Butter',
      'Paneer',
      'Cumin Seeds',
      'Onion',
      'Ginger Garlic Paste',
      'Tomato',
      'Garam Masala Powder',
      'Salt to taste',
      'Sugar',
      'Fresh Cream'
      ];
      let ingItems = ingredients.map((ingredient,idx) =>{
         return <li key={idx}>{ingredient}</li>;
      });
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
           {ingItems}
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>PANEER BUTTER MASALA</h1>
            <p>Creamy and flavourful butter paneer is so easy to make at home. You can serve it with naan, roti, pulao or jeera pulao.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.yummytummyaarthi.com/wp-content/uploads/2021/12/1.jpg" 
      alt="" className="imageUpdates"
      height="450px"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
