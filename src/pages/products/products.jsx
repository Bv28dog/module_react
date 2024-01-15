import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import {
  fetchProducts,
  selectProducts,
  fetchCategories,
  selectCategories,
  selectLoading,
} from "../../store/productsSlice";
import "./products.css";
import { addProduct } from "../../store/shoppingSlice";

export const Products = () => {
  const dispatch = useDispatch();
  const products = selectProducts();
  const categories = selectCategories();
  const loading = selectLoading();
  const [searchValue, setSearchValue] = useState("");
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="loaderWrap">
        <ThreeDots width={100} height={100} color="black" />
      </div>
    );
  }

  const filterdProducts = products.filter((product) =>
    product.title.toUpperCase().includes(searchValue.toUpperCase())
  );
  return (
    <div>
      <div className="catedoties_Products_Wrap">
        <p>CATEGORY :</p>
        <div
          className={`caregory ${
            activeCategory === "all categories" || !activeCategory
              ? "activeCategory"
              : ""
          }`}
          onClick={() => {
            dispatch(fetchProducts());
            setActiveCategory("all categories");
          }}
        >
          all categories
        </div>
        {categories.map((category) => (
          <div
            className={`caregory ${
              activeCategory === category ? "activeCategory" : ""
            }`}
            key={category}
            onClick={() => {
              dispatch(fetchProducts(category));
              setActiveCategory(category);
            }}
          >
            {category}
          </div>
        ))}
        <div className="searchWrap">
          <Input
            addonBefore={<SearchOutlined />}
            placeholder="Search productss"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>

      <div className="productsWrap">
        {/* {!filterdProducts.lenght  && <div><p style={{fontWeight:'800'}}>There is no such product!!!</p></div>} */}
        {filterdProducts.map((product) => (
          <div key={product.id}>
           <div onClick={() => window.scrollTo(0, 0)}>
           <Link to={`/productDetails/${product.id}`}>
              <div className="product_Item">
                <p className="productTitle"> {product.title}</p>
                <div className="prouctImgWrap">
                  <img className="productImg" src={product.image} alt="" />
                </div>
                <p className="price">Price: {product.price} $</p>
              </div>
            </Link>
           </div>

            <Button
              className="btn_Products_Add"
              onClick={() => dispatch(addProduct(product))}
            >
              Add to cart
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
