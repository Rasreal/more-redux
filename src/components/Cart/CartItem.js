import classes from './CartItem.module.css';
import {useDispatch} from "react-redux";
import {cartActions} from "../../store/cart-slice";

const CartItem = (props) => {
    const {title, quantity, total, price, id} = props.item;

    const dispatch = useDispatch();
    const increaseItem = () => {
        dispatch(cartActions.addItemToCart({id, quantity, totalPrice: total, price}));
    }
    const decreaseItem = () => {
        dispatch(cartActions.removeItemFromCart(id));
    }
    return (
        <li className={classes.item}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    {total.toFixed(2)}{' KZT  '}
                    <span className={classes.itemprice}>({price.toFixed(2)}tg/item)</span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={decreaseItem}>-</button>
                    <button onClick={increaseItem}>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
