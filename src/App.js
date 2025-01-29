import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch, useSelector} from "react-redux";
import {Fragment, useEffect} from "react";
import {uiActions} from "./store/ui-slice";
import Notification from "./components/UI/Notification";


let isInitial = true;

function App() {
    const dispatch = useDispatch();
    const birBaleShow = useSelector(state => state.ui.cartIsVisible);
    const cart = useSelector(state => state.cart);
    const notification = useSelector(state => state.ui.notification);

    useEffect(() => {

        const sendCartData = async () => {
            dispatch(uiActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data...'
            }))
            const response = await fetch("https://react-redux-c91e5-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
                {
                    method: "PUT",
                    body: JSON.stringify(cart)
                });

            if(!response.ok) {

                throw new Error("Failed to upload cart Data.");
            }


            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success',
                message: 'Cart data sent'
            }));


        }

        if(isInitial) {
            isInitial = false;
            return;
        }

        sendCartData().catch((err) => {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Failed',
                message: 'Cart data was failed'
            }));
        });

    }, [cart, dispatch]);


    return (
        <Fragment>
            {notification && <Notification status={notification.status}
                                           title={notification.title}
                                           message={notification.message}/>}
            <Layout>
                {birBaleShow && <Cart/>}
                <Products/>
            </Layout>
        </Fragment>

    );
}

export default App;
