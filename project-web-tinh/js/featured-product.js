let listItems = document.querySelectorAll(".featured-product .col-sm-6");
let listBtnAddToCart = document.querySelectorAll(".featured-product button.add-to-cart");
listItems.forEach((item)=>{
  item.addEventListener('click',()=>{
    window.location.href='detail.html'
  })
})
listBtnAddToCart.forEach((btn, index) => {
  let product = listItems[index];
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
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
