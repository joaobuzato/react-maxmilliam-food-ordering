import { useContext } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
  const cartContext = useContext(CartContext);

  const AddItem = (e) => {
    e.preventDefault();
    //dá pra fazer com o useRefs
    const amount = document.getElementById("amount_" + props.item.id);
    cartContext.addItem({ ...props.item, amount: Number(amount.value) });
  };
  return (
    <form onSubmit={AddItem} className={classes.form}>
      <Input
        label="Amout"
        input={{
          id: "amount_" + props.item.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
