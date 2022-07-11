function renderCartMain() {
  let cartContent = document.querySelector(
    ".cart-content .product-list-in-cart"
  );
  let content = cart.map((item) => {
    return `<div class="product-in-cart">
        <div class="product-info">
          <div class="product-img">
            <img
              src="${item.img}"
              alt=""
            />
          </div>
          <div class="product-info-right">
            <div class="product-name">${item.name}</div>
            <span>Giảm giá: </span><span class="sale-off">${item.sale}%</span>
            <div class="product-price">
              <span> Đơn giá: </span><span class="old-price">${
                item.price
              }$</span>
              <span class="current-price"> ${parseFloat(
                item.price * (1 - item.sale / 100)
              ).toFixed(2)}$ </span>
            </div>
          </div>
        </div>
        <div class="quantity-product-weight-group">
          <button class="minus-quantity-detail-product">-</button>
          <input
            type="text"
            class="quantity-product-weight"
            value="${item.weight}"
          />
          <button class="plus-quantity-detail-product">+</button>
        </div>
        <div class="remove-product">
          <i class="fa-solid fa-trash-can"></i>
        </div>
      </div>`;
  });
  cartContent.innerHTML = content.join("");
}
renderCartMain();
const  listQuantityProductWeight = document.querySelectorAll(
  ".cart-content .quantity-product-weight"
);
const  listBtnAdd = document.querySelectorAll(
  ".cart-content .product-in-cart .plus-quantity-detail-product"
);
const  listBtnMinus = document.querySelectorAll(
  ".cart-content .product-in-cart .minus-quantity-detail-product"
);
const  listItemInCartMain = document.querySelectorAll(
  ".cart-content .product-in-cart"
);
const  listRemoveProduct = document.querySelectorAll(
  ".product-in-cart .remove-product"
);

// btn add cart cap nhat cart
listBtnAdd.forEach((item, index) => {
  let cartItem = listItemInCartMain[index];
  let quantityProductWeight = cartItem.querySelector(
    ".quantity-product-weight"
  );
  item.addEventListener("click", () => {
    let currentValue = parseFloat(quantityProductWeight.value) + 1;
    quantityProductWeight.value = currentValue;
  });

  item.addEventListener("click", () => {
    let nameProduct = cartItem.querySelector(".product-name").textContent;

    cart.forEach((element) => {
      if (element.name == nameProduct) {
        element.weight = parseFloat(quantityProductWeight.value);
      }
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  });
});

//btn minus cap nhat cart
listBtnMinus.forEach((item, index) => {
  let cartItem = listItemInCartMain[index];
  let quantityProductWeight = cartItem.querySelector(
    ".quantity-product-weight"
  );
  item.addEventListener("click", () => {
    let currentValue = parseFloat(quantityProductWeight.value) - 1;
    if (currentValue < 0) {
      quantityProductWeight.value = 0;
    } else {
      quantityProductWeight.value = currentValue;
    }
  });

  item.addEventListener("click", () => {
    let nameProduct = cartItem.querySelector(".product-name").textContent;

    cart.forEach((element) => {
      if (element.name == nameProduct) {
        element.weight = parseFloat(quantityProductWeight.value);
      }
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  });
});

// Thay doi input cap nhap lai Cart
listQuantityProductWeight.forEach((input, index) => {
  let cartItem = listItemInCartMain[index];
  input.addEventListener("change", () => {
    let nameProduct = cartItem.querySelector(".product-name").textContent;

    cart.forEach((element) => {
      if (element.name == nameProduct) {
        element.weight = parseFloat(input.value);
      }
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  });
});

listRemoveProduct.forEach((btn, index) => {
  let cartItem = listItemInCartMain[index];
  btn.addEventListener("click", () => {
    cartItem.remove();
    let nameItem = cartItem.querySelector(".product-in-cart .product-name").textContent;
    // Lấy index của item
    let indexItem = cart.findIndex((item) => {
      return nameItem == item.name;
    });
    if (indexItem >= 0) {
      cart.splice(indexItem, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    document.querySelector(".header .nav-cart span").textContent =
      cart.length;
  });
});