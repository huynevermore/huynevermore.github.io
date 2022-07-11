let listItems = document.querySelectorAll(".featured-product .col-sm-6");
let listBtnAddToCart = document.querySelectorAll("button.add-to-cart");

listBtnAddToCart.forEach((btn, index) => {
  let product = listItems[index];
  btn.addEventListener("click", () => {
    let nameProduct = product.querySelector(".product-name").innerText;
    products.forEach((element) => {
      if (element.name.toLocaleLowerCase() == nameProduct.toLowerCase()) {
        checkItem(element);
      }
    });
    document.querySelector(".header .nav-cart span").textContent = cart.length;
    if (cart.length) {
      renderCart();
      totalModal();
    }

    alert(" may da them vao gio hang");
  });
});
