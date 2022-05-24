function clickAdd() {
  let currentResult = parseInt(result.value) + 1;
  result.value = currentResult;
}
function clickMinus() {
  let currentResult = parseInt(result.value) - 1;
  if (currentResult < 0) {
    result.value = 0;
  } else {
    result.value = currentResult;
  }
}
cong.addEventListener("click", clickAdd);
tru.addEventListener("click", clickMinus);

for (let i = 0; i < $(".img-mini img").length; i++) {
  $($(".img-mini img")[i]).click(function () {
    let src = $(this).attr("src");
    $("#preview-product").attr("src", src);
  });
}

let cartCount = $("#cart-count");
let add = $("#cart-add");
let minus = $("#cart-minus");
let currentPrice = $("#current-price").text();

add.on("click", function add() {
  let cart = JSON.parse(window.localStorage.getItem("cartItem")) || [];
  let currentCount = parseInt(cartCount.text()) + 1;
  cartCount.text(currentCount);
  $("#cartItem").text(currentCount);
  cart[0].qty = currentCount;
  window.localStorage.setItem("cartItem", JSON.stringify(cart));
  total();
});

minus.on("click", function minus() {
  let cart = JSON.parse(window.localStorage.getItem("cartItem")) || [];
  let currentCount = parseInt(cartCount.text()) - 1;
  if (currentCount > 0) {
    cartCount.text(currentCount);
  }
  $("#cartItem").text(currentCount);
  cart[0].qty = currentCount;
  window.localStorage.setItem("cartItem", JSON.stringify(cart));
  total();
});
function total() {
  let x =
    parseInt(currentPrice.replace("Rp ", "").replaceAll(".", "")) *
    parseInt(cartCount.text());
  $("#total-cart").text("RP " + x);
}
total();

$(document).ready(function () {
  let cart = JSON.parse(window.localStorage.getItem("cartItem")) || [];

  // $('#cartItem').text(cart[0].qty)

  function addToCart() {
    console.log("init cart", cart);
    let currentProduct = {
      id: 2,
      name: "product 2",
      prices: 200000,
    };
    let numOfItem = parseInt($("#result").val());
    let countCartItem = parseInt($("#cartItem").text());

    if (cart.findIndex((product) => product.id == currentProduct.id) == -1) // Duyet mảng 
    // Loop cart kiểm tra xem có id nào trung với id của product moi thêm vào k 
    {
      // Nếu k có thì add to cart
      console.log("add item to cart");
      currentProduct.qty = numOfItem; // Thêm vào oject sản phẩm
      cart.push(currentProduct); // Thêm vào cart
      window.localStorage.setItem("cartItem", JSON.stringify(cart)); //Luu vao LS
    } else {
      console.log("exist item in cart");
      //update qty cart
      let newCart = cart.map((o) => {
        if (o.id == currentProduct.id) {
          o.qty += numOfItem;
        }
      });
      window.localStorage.setItem("cartItem", JSON.stringify(cart)); //Luu vao LS
    }
    console.log("cart", cart);
    $("#cartItem").text(cart[0].qty);
    $("#cart-count").text(cart[0].qty);
  }
  $("#addToCart").click(addToCart);

  window.onload = addToCart();
});
