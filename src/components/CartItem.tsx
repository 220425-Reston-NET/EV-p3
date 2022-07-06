import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShopingCartContext";
import StoreItems from "../data/items.json";
import { fomatCurrency } from "../utilities/fomatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};
export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = StoreItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "120px", height: "75px", objectFit: "cover" }}
      />
      {/* div for item name and how much item if same product in cart */}
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".80rem" }}>
          {fomatCurrency(item.price)}
        </div>
        {/* getting total */}
        <div> {fomatCurrency(item.price * quantity)}</div>
        {/* little x to remove item */}
        <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>&times;</Button>
      </div>
    </Stack>
  );
}
