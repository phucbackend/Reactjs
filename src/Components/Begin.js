import "../Styles/Begin.css";
import { Link } from "react-router-dom";
export default function Begin() {
  return (
    <div className="wrapper">
      <section>
        <div className="container banner">
          <div className="name1">
            <h1 className="banner-name">GOOD PIZZA,</h1>
          </div>
          <div className="name1">
            <h1 className="banner-name1">GREAT PIZZA</h1>
          </div>
          <div className="banner-buttons">
            <Link className="btn" to="/homepage">
              Start Order
            </Link>
          </div>
          <img src="/img/banner.png" alt="" className="image-banner" />
        </div>
      </section>
    </div>
  );
}
