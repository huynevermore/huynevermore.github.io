import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const listItem = [
    { name: "cam", price: 20 },
    { name: "quyt", price: 25 },
    { name: "thanh long", price: 30 },
    { name: "buoi", price: 15 },
    { name: "xoai", price: 50 },
  ];

  const [listItemInCart, setListItemInCart] = useState([]);
  // const [quantity, setQuantity] = useState(1);
  const [itemInCart, setitemInCart] = useState({});
  const [totalCart, setTotalCart] = useState(0);

  const addToCart = (item,quantity) => () => {
    setListItemInCart((previousState) => {
      if (previousState.findIndex((el) => el.name === item.name) === -1) {//Nếu chưa có item
        return [...previousState, { ...item, quantity: quantity }];//Thêm sản phẩm vào list
      } else {
        const newList = previousState.map((el) => {
          if (el.name === item.name) {
            return {
              ...el,
              quantity: parseInt(quantity) + parseInt(el.quantity),
            };
          }
          return el;
        });
        return newList;
      }
    });
  };
  const totalPrice =
    listItemInCart.length === 0
      ? 0
      : listItemInCart.reduce(
          (total, el) => total + parseFloat(el.quantity) * parseFloat(el.price),
          0
        );



  const deleteItem = (item) => () => {
    setListItemInCart((previousState) => {
      return previousState.filter((el) => el.name !== item.name);
    });
  };

  const deleteAllItem = () => {
    setListItemInCart((previousState) => (previousState = []));
  };

  
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {listItem.map((item) => {
          return (
            <>
              <Item name={item.name} price={item.price} quantity={quantity} />
              <button style={{ marginTop: "20px" }} onClick={addToCart(item,quantity)}>
                {" "}
                Thêm vào giỏ hàng
              </button>
            </>
          );
        })}
      </div>

      <div style={{ width: "50%" }}>
        <h1 style={{ textAlign: "center" }}>Giỏ hàng</h1>
        {listItemInCart.length > 0 &&
          listItemInCart.map((el) => {
            return (
              <div key={`${el.name}+1`}>
                <h1>Tên sản phẩm: {el.name}</h1>
                <p>Giá sản phẩm: {el.price}</p>
                <p>Số lượng sản phẩm: {el.quantity}</p>
                <button onClick={deleteItem(el)}>Xóa sản phẩm</button>
              </div>
            );
          })}
        {listItemInCart.length > 0 && (
          <h2 style={{ marginTop: "40px" }}>
            Tổng giá trị đơn hàng {totalPrice}
          </h2>
        )}
        {listItemInCart.length > 0 && (
          <button onClick={deleteAllItem} style={{ marginTop: "40px" }}>
            Xóa tất cả sản phẩm
          </button>
        )}
        <h2></h2>
      </div>
    </div>
  );
}

function Item({item,quantity}) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div key={item.name} style={{ padding: "20px", border: "1px solid #ddd" }}>
      <p>Tên sản phẩm :{item.name}</p>
      <p>Giá sản phẩm : {item.price}</p>
      <div>
        <button onClick={()=>{setQuantity(quantity-1)}}>-</button>
        <input
          type="number"
          id=""
          name=""
          placeholder=""
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
        />
        <button onClick={()=>{setQuantity(quantity+1)}}>+</button>

      </div>
    </div>
  );
}
export default App;
