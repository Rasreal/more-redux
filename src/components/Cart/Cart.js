import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from "react-redux";

const Cart = (props) => {

    const items = useSelector(state => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
          {items.map(product => (
              <CartItem
                  key= {product.id}
                  item={{
                      id: product.id,
                      title: product.name,
                      quantity: product.quantity,
                      total: product.totalPrice,
                      price: product.price }}
              />
          ))}
      </ul>
    </Card>
  );
};

export default Cart;
