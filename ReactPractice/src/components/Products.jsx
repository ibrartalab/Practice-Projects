import { useDispatch } from "react-redux";
import {
  increaseAmount,
  decreaseAmount,
  removeProducts,
} from "../features/cartSlice";

function Products({ name, price, amount }) {
  const dispatch = useDispatch();
  return (
    <div
      style={{ display: "flex", gap: "10px", justifyContent: "space-between" }}
    >
      <p>{name}</p>
      <button
        style={{ color: "red" }}
        onClick={() => dispatch(removeProducts({ name }))}
      >
        Remove
      </button>
      <p>{price}</p>
      <div>
        <span>Qty: </span>
        <button
          onClick={() => {
            if (amount === 1) {
              dispatch(removeProducts({ name }));
              return;
            }
            dispatch(decreaseAmount({ name }));
          }}
        >
          -
        </button>
        {amount}
        <button
          onClick={() => {
            dispatch(increaseAmount({ name }));
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Products;
