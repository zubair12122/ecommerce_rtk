const [superCoins, setSuperCoins] = useState(second);

const cartItems = useSelector((state) => state.cart.cartItems);

const totalAmount = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);
useEffect(() => {
  if (totalAmount >= 100 && totalAmount < 200) {
    setSuperCoins(10);
  } else if (totalAmount >= 200 && totalAmount < 300) {
    setSuperCoins(20);
  } else if (totalAmount >= 300) {
    setSuperCoins(30);
  } else {
    setSuperCoins(0);
  }
}, [totalAmount]);
