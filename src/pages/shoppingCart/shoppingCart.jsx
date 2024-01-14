import { Button } from "antd";
import { useShoppingSelector } from "../../store/shoppingSlice";
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  decreaseQty,
  increaseQty,
} from "../../store/shoppingSlice";
import "./shoppingCart.css";

export const ShoppingCart = () => {
  const cartItems = useShoppingSelector();
  const dispatch = useDispatch();

  const handleDelete = (item) => {
    dispatch(deleteProduct(item));
  };

  return (
    <div>
      <div className="content_Cart">
        <h2>Shopping Cart</h2>
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className="li_content_Cart">
                  <div>
                    <img src={item.image} alt="img" />
                  </div>
                  <div className="content_Cart_img">
                    <p>Brand: {item.title}</p>
                    <div className="divider" />
                    <p>Description: {item.description}</p>
                    <div className="divider" />
                    <p>Price:{Math.floor(item.price * item.qty)} $</p>
                    <p className="qty">
                      Qty: {item.qty}
                      <Button
                        className="btn_Increase"
                        onClick={() => dispatch(increaseQty(item))}
                      >
                        +
                      </Button>
                      <Button
                        className="btn_Decrease"
                        onClick={() => dispatch(decreaseQty(item))}
                      >
                        -
                      </Button>
                    </p>

                    <div className="content_Cart_Content">
                      <Button
                        type="primary"
                        danger
                        onClick={() => handleDelete(item)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty_Cart">Your cart is empty!!</p>
        )}
      </div>
    </div>
  );
};
