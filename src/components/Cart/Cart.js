import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useContext } from "react";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const cartItems = cartContext.items.map((item) => (
    <li key={item.id}>{item.name}</li>
  ));
  return (
    <Modal onCloseModal={props.onHideCart}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount: </span>
        <span>{cartContext.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Cancel
        </button>
        <button className={classes["button"]}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
