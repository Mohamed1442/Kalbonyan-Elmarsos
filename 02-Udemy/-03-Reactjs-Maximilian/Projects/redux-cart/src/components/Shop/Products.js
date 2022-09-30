import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_DATA = [
  {
    id: "p1",
    price: 1,
    title: "My first data",
    describtion: "This is my first data",
  },
  {
    id: "p2",
    price: 2,
    title: "My Second data",
    describtion: "This is my Second data",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((product) => {
          return (
            <ProductItem
              id={product.id}
              key={product.id}
              title={product.title}
              price={product.price}
              description={product.describtion}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
