function renderCheckOut() {
  let cartCheckOut = document.querySelector("#check-out .list-items-order");
  let content = cart.map((item) => {
    return `<div class="item-order">
        <div class="wrap-item-order-info">
          <div class="item-order-img">
            <img
              src="${item.img}"
              alt=""
              width="100%"
            />
          </div>
          <div class="item-order-info">
            <div class="item-order-name bold">${item.name}</div>
            <div class="item-order-unit-price">
              <span>Đơn giá: </span><span${parseFloat(
                item.price * (1 - item.sale / 100)
              ).toFixed(2)}$</span>
            </div>
            <div class="item-order-weight">
              <span>Khối lượng:</span> <span>${item.weight}kg</span>
            </div>
          </div>
        </div>
        <div class="remove-item-order">
          <i class="fa-solid fa-trash-can"></i>
        </div>
      </div>`;
  });

  cartCheckOut.innerHTML += content.join("");
}

renderCheckOut();

let listItemCheckOut = document.querySelectorAll("#check-out .item-order");
let listBtnRemoveCheckOut = document.querySelectorAll(
  "#check-out .remove-item-order"
);

listBtnRemoveCheckOut.forEach((btn, index) => {
  let item = listItemCheckOut[index];
  btn.addEventListener("click", () => {
    item.remove();
    let nameItem = item.querySelector(
      ".item-order .item-order-name "
    ).textContent;
    console.log(nameItem)
    // Lấy index của item
    let indexItem = cart.findIndex((item) => {
      return nameItem == item.name;
    });
    if (indexItem >= 0) {
      cart.splice(indexItem, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    document.querySelector(".header .nav-cart span").textContent = cart.length;
  });
});
