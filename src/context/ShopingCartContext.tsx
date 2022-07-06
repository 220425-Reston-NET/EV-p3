import { createContext, ReactNode, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

// type for useState to have items
type CartItem = {
  id: number;
  quantity: number;
};

type ShopingCartContext = {
  // now we mess with cart to view it and you know
  openCart: () => void; //opening cart
  closeCart: () => void; //close Cart
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
};
const ShoppingCartContext = createContext({} as ShopingCartContext);
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}
// props to give to children

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  // saving cart items ==> give useState type <CartItem[]>
  const [open, setOpen] = useState(false);
//   change useState here to our local stroge hooks
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart", []);

  //   carts item function and quantitu
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => setOpen(true);
  const closeCart = () => setOpen(false);

  // get item fucntion from ShopingCartContext
  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  }
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        openCart,
        closeCart,
      }}
    >
      {children}
      {/* shoping cart component here */}
      <ShoppingCart open={open}/>  
    </ShoppingCartContext.Provider>
  );
}
