/* eslint-disable react/prop-types */
import {
  ShoppingOutlined,
  InstagramOutlined,
  FacebookOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  GooglePlusOutlined,
  TwitterOutlined,
  SendOutlined,
  MailOutlined,
} from "@ant-design/icons";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { selectCartItemsCount } from "../../store/shoppingSlice";
import "./layout.css";

export const Layout = ({ children }) => {
  const totalItemsInCart = selectCartItemsCount();

  return (
    <>
      <header>
        <Link to="/">
          <div className="logoWrap">
            <img className="logo" src={logo} alt="picture" />
          </div>
        </Link>

        <div className="layoutLink">
          <div className="layoutLink_Blok1">
            <NavLink
              exact
              to="/"
              className="foo"
              activeClassName="layoutLinkColor"
            >
              Home
            </NavLink>
          </div>
          <div className="layoutLink_Blok2">
            <NavLink
              to="/products"
              className="foo"
              activeClassName="layoutLinkColor"
            >
              Products
            </NavLink>
          </div>

          <div
            onClick={() => window.scrollTo(0, 0)}
            className="carton_Icon_blok"
          >
            <Link to="/shoppingCart">
              <ShoppingOutlined style={{ fontSize: "50px" }} />
              <span>({totalItemsInCart})</span>
            </Link>
          </div>
        </div>
      </header>
      {children}

      <footer className="footer-container">
        <div className="container-foter-all-item">
          <div className="about-blok">
            <h3>ABOUT</h3>
            <p>
              The development of the Internet today provides new opportunities
              for creating and support for businesses of all sizes, from
              self-employed to large enterprises, and with the help of our
              online store Spop_Pay you can quickly find and buy the goods you
              need!
            </p>
          </div>
          <div className="container-contact-blok">
            <h4>CONTACT US</h4>
            <div className="contact-wrap">
              <div className="blok-contact-item">
                <div className="contact-item">
                  <div className="img-contact-logo">
                    <EnvironmentOutlined />
                  </div>
                  <div>
                    <span>5419 josepf Mountains</span>
                    <br />
                    <span>Apt.716</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="img-contact-logo">
                    <PhoneOutlined />
                  </div>
                  <div>
                    <span>+380 98 759 4589</span>
                    <br />
                    <span>+380 68 759 1246</span>
                  </div>
                </div>
              </div>
              <div className="blok-contact-item">
                <div className="contact-item">
                  <div className="img-contact-logo">
                    <MailOutlined />
                  </div>
                  <span>shop_pay.info@gmail.com</span>
                </div>
                <div className="contact-item-planet">
                  <div className="img-contact-logo">
                    <SendOutlined />
                  </div>
                  <span>www.shop_pay.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="logogo">
          <div>
            <InstagramOutlined />
          </div>
          <div>
            <TwitterOutlined />
          </div>
          <div>
            <FacebookOutlined />
          </div>
          <div>
            <GooglePlusOutlined />
          </div>
        </div>

        <div className="foot-end">
          <div className="foot-text">Copyright C 2016-2024 Shop-Pay</div>
        </div>
      </footer>
    </>
  );
};
