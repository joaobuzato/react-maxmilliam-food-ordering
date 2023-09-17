import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);
  const itemCount = cartContext.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);
  const [btnIsHighlighted, setBtnIsHightLighted] = useState(false);
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;
  const { items } = cartContext;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHightLighted(true);
    const timer = setTimeout(() => {
      setBtnIsHightLighted(false);
    }, 300);

    //essa função roda após executar o useEffect
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button onClick={props.onClick} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{itemCount}</span>
    </button>
  );
};

export default HeaderCartButton;
