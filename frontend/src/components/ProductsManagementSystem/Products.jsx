import "./Products.scss";
import ProductsTabelle from "./ProductsTabelle";

export default function Products() {


  return (
    <div className="productsManagement">
      <h1 className="crud">Product Management System</h1>
     <ProductsTabelle/>
    </div>
  );
}
