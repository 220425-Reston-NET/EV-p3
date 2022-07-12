import {
  Button,
  Col,
  Container,
  Nav,
  Navbar,
  NavLink,
  Row,
} from "react-bootstrap";
import { StoreItem } from "../../components/StoreItem";
import { useShoppingCart } from "../../context/ShopingCartContext";
// import storeItems from "../data/items.json";
// import StoreItem from "../component/StoreItem";
import storeItems from "../../data/items.json";
import "./Store.css";

export function Store() {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <>
      {/* sticky="top" so you can see cart as you browse   bg-secondary shadow-sm mb-3*/}
      <div></div>
      <label className="labelClass" htmlFor="site-search">
        <h4 className="h4-style">Search for your favorite Essential Oil:</h4>
      </label>
      <input type="search" id="site-search" name="q" placeholder="Lavender" className="search"></input>

      <button>Search</button>

      <Navbar
        className="justify-content-end "
        style={{ width: "100%" }}
        sticky="top"
      >
        {/* <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link> */}
        <Nav className="container-fluid"></Nav>
        <Nav className="container-fluid"></Nav>
        <Nav className="container-fluid"></Nav>
        <Nav className="container-fluid"></Nav>
        <Nav className="container-fluid"></Nav>
        <Nav className="container-fluid"></Nav>
        <Nav className="container-fluid"></Nav>
        <Nav className="container-fluid"></Nav>

        <Container>
          {cartQuantity > 0 && (
            <Button
              onClick={openCart}
              style={{ position: "relative" }}
              // style={{ position: "absolute" }}
              className="rounded-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 24 24"
              >
                <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
              </svg>

              {/* to show numbers in cart */}
              <div
                className=" rounded-circle bg-danger d-flex justify-content-center
          align-item-center"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(25%, 25%",
                }}
              >
                {cartQuantity}
              </div>
            </Button>
          )}
        </Container>
      </Navbar>

      <Row md={2} xs={1} lg={3} className=" g-3">
        {/* loop over items array */}
        {storeItems.map((item) => (
          // start rendering json like this {JSON.stringify(item)} between <Col>s
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
