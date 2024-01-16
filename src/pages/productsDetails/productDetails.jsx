import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "antd";
import { fetchProductById, selectProduct, selectProductLoading } from "../../store/productsSlice";
import { ThreeDots } from "react-loader-spinner";
import { addProduct } from "../../store/shoppingSlice";
import { Link } from "react-router-dom";
import "./productsDetails.css";

export const ProductDetails = () => {
  const dispatch = useDispatch();
  const product = selectProduct();
  const { id } = useParams();
  const loading = selectProductLoading()

   useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addProduct(product));
    }
  };
  
  if (loading) {
    return (
      <div className="loaderWrap">
        <ThreeDots width={100} height={100} color="black" />
      </div>
    );
  }


  return (
    <>
      <div className="text_Pr_Details">Products Details</div>
      <div className="wrapProductsDetails">
        <div className="blokProductsDetailsImg">
          <img src={product.image} alt="img" />
        </div>
        <div className="discriptions_Products">
          <p>
            {product.category}: <span>{product.title}</span>
          </p>
          <p>Description: {product.description}</p>

          <p className="price_text">Price: {product.price} $</p>
          <hr />
          <hr />

          <div onClick={() => window.scrollTo(0, 0)} className="divBtn">
            <Button onClick={handleAddToCart}>add to Cart</Button>
            <Link to="/shoppingCart">
              <Button type="primary">Show Cart</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
