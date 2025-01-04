import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 10,
    title: "A random book",
    description: "Just a very cool book",
  },
  {
    id: "p2",
    price: 15,
    title: "A random CD",
    description: "Just a very cool CD",
  },
  {
    id: "p3",
    price: 8,
    title: "A random Controller",
    description: "Just a very cool Controller",
  },
  {
    id: "p4",
    price: 12.5,
    title: "A random Picture",
    description: "Just a very cool picture",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
