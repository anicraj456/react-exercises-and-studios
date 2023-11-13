import ClickedButton from "./ClickedButton";
import SaveButton from "./SaveButton";
import "./styling.css"

function Button(props) {

  return props ? <SaveButton /> : <ClickedButton />;
}

export default Button;

//need to import SaveButton and ClickedButton
//create conditional for these buttons
//import styling