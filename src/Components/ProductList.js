import "../styles.css";
import Product from "./Product";

const data = () => {
  // TODO: ADD Item to Product List
  let yes = ["1"];
  return yes;
};
// TODO: Populate data dynamically
// Add onClick on every button
const ProductList = ({ text }) => {
  return (
    <div className="prod-list mt-4">
      <div className="prod-list-wrap">
        <h3 className="mb-0">
          <strong>Product List:</strong>
        </h3>
        <div className="listing prod-scroll">
          {/* Replace this with dynamic function */}
          <Product />
        </div>
      </div>
      <div className="total">
        <h3 className="mb-0 flex-grow-1 text-start">
          <strong>Total:</strong>
        </h3>
        {/* Total item prices */}
        <h3 className="mb-0 px-3 text-primary">
          <strong>{text}</strong>
        </h3>
      </div>
    </div>
  );
};

export default ProductList;
