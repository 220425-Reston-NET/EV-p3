import { type } from "@testing-library/user-event/dist/type";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShopingCartContext";
import { fomatCurrency } from "../utilities/fomatCurrency";
import { CartItem } from "./CartItem";
import StoreItems from "../data/items.json";

type ShoppingCartProviderProps = {
  open: boolean;
};

export function ShoppingCart({ open }: ShoppingCartProviderProps) {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <>
      <Offcanvas show={open} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3}>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            {/* display total in cart */}
            <div className="ms-auto fw-bold fs-5">
              Total{" "}
              {fomatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = StoreItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </div>
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
