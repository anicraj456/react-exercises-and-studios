let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {
  function GiveRating(){
    return <h3>{stars[props.rating - 1]}</h3>;
  }
  const vaildRating = props.rating > 0 && props.rating <=5;
  return  vaildRating ? <GiveRating /> : null;
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js  