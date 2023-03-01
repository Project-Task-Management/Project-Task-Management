import "./Products.scss";
import { useReducer } from "react";
const initState = {
  title: "",
  price: "",
  taxes: "",
  ads: "",
  discount: "",
  count: "",
  category: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "updateTitle":
      state = {
        ...state,
        title: action.payload,
      };
      return state;
    case "updatePrice":
      state = {
        ...state,
        price: action.payload,
      };
      return state;
    case "updateTaxes":
      state = {
        ...state,
        price: action.payload,
      };
      return state;
    case "updateAds":
      state = {
        ...state,
        price: action.payload,
      };
      return state;
    case "updateDiscount":
      state = {
        ...state,
        price: action.payload,
      };
      return state;
  }
}
export default function ProductsTabelle() {
  const [state, dispatch] = useReducer(reducer, initState);
  console.log(state);
  const total = state.price + state.taxes + state.taxes - state.discount;
  return (
    <>
      <div className="products-tabelle">
        <input
          placeholder="Title"
          className="title"
          type="text"
          name="title"
          value={state.title}
          onChange={(e) =>
            dispatch({
              type: "updateTitle",
              payload: e.target.value,
            })
          }
        />
        <div className="product-angabe">
          <input
            placeholder="Price"
            type="number"
            name="Price"
            value={state.price}
            onChange={(e) =>
              dispatch({
                type: "updatePrice",
                payload: e.target.value,
              })
            }
          />
          <input
            type="number"
            name="taxes"
            placeholder="Taxes"
            value={state.taxes}
            onChange={(e) =>
              dispatch({
                type: "updateTaxes",
                payload: e.target.value,
              })
            }
          />
          <input
            type="number"
            name="ads"
            placeholder="Ads"
            value={state.ads}
            onChange={(e) =>
              dispatch({
                type: "updateAds",
                payload: e.target.value,
              })
            }
          />
          <input
            type="number"
            placeholder="Discount"
            name="discount"
            value={state.discount}
            onChange={(e) =>
              dispatch({
                type: "updateDiscount",
                payload: e.target.value,
              })
            }
          />
          <p className="total">Total:{total}€</p>
        </div>
        <input
          type="number"
          placeholder="Count"
          name="count"
          value={state.count}
          onChange={(e) =>
            dispatch({
              type: "updateCount",
              payload: e.target.value,
            })
          }
        />
        <input
          type="name"
          placeholder="Category"
          name="category"
          value={state.value}
          onChange={(e) =>
            dispatch({
              type: "updateCategory",
              payload: e.target.value,
            })
          }
        />
      </div>
      <button className="create">Create</button>
    </>
  );
}
