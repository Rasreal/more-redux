import ProductItem from './ProductItem';
import classes from './Products.module.css';


const DUMMY_PRODUCTS = [
    {
        id: "p1",
        price: 15000,
        title: "Kitap",
        description: "7 Zharğy"
    },
    {
        id: "p2",
        price: 25000,
        title: "Qulaqqap",
        description: "Sony X34 Pro"
    },
    {
        id: "p3",
        price: 135000,
        title: "Teledidar",
        description: "Samsung 72PIX3z Lite"
    },


]


const Products = (props) => {
    return (<section className={classes.products}>
        <h2>Buy your favorite products</h2>
        <ul>
            {DUMMY_PRODUCTS.map(item => (
                <ProductItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                />
            ))}
        </ul>
    </section>);
};

export default Products;
