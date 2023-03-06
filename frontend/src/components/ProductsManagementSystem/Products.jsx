import "./Products.scss";
import ProductsTabelle from "./ProductsTabelle";

export default function Products() {


  return (
    <div className="productsManagement">
      <h1 className="crud">CRUD</h1>
     <ProductsTabelle/>
    </div>
  );
}
