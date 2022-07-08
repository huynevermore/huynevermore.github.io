window.onload = function () {

};
renderCart()
let perPage = 12;
let currentPage = 1;
let start = 0;
let end = perPage;
let searchProduct = document.querySelector(`.form-search input[type="search"]`);


// function tim kiem
function onSearchProduct() {
  let x = searchProduct.value.toLowerCase();
  console.log(x);
  const content = products.map(function (e, index) {
    if (e.name.toLowerCase().includes(x)) {
      return `<div class="col-sm-6 col-lg-3">
                  <div class="product-item">
                    <div class="product-container">
                      <div class="discount">${e.sale}%</div>
                      <div class="product-img">
                        <img
                          src="${e.img}"
                          alt=""
                        />
                      </div>
                      <p class="product-name cus-margin-top-bot-8px">
                        ${e.name}
                      </p>
                      <div class="product-price cus-margin-top-bot-8px">
                        <span class="old-price">${e.price.toFixed(2)}$</span>
                        <span class="current-price">${parseFloat(
                          e.price * (1 - e.sale / 100)
                        ).toFixed(2)}$</span>
                      </div>
                      <p class="product-origin cus-margin-top-bot-8px">
                        <span class="bold">Xuất xứ:</span> ${e.origin}
                      </p>
                      <p class="product-type cus-margin-top-bot-8px">
                        <span class="bold"> Loại sản phẩm:</span> ${e.type}
                      </p>
                      <p class="product-weight cus-margin-top-bot-8px">
                        <span class="bold">Khối lượng:</span> ${e.weight} Kg
                      </p>
                    </div>
                    <button class="add-to-cart">
                      Add To Cart <i class="fa-solid fa-basket-shopping"></i>
                    </button>
                  </div>
                </div>`;
    }
  });
  document.querySelector("#product-category .category-main .row").innerHTML =
    content.join("");
}

searchProduct.addEventListener("keyup", onSearchProduct);

// function render product
function renderProduct(arr) {
  const content = arr.map(function (e, index) {
    return `<div class="col-sm-6 col-lg-3">
                  <div class="product-item">
                    <div class="product-container">
                      <div class="discount">${e.sale}%</div>
                      <div class="product-img">
                        <img
                          src="${e.img}"
                          alt=""
                        />
                      </div>
                      <p class="product-name cus-margin-top-bot-8px">
                        ${e.name}
                      </p>
                      <div class="product-price cus-margin-top-bot-8px">
                        <span class="old-price">${e.price.toFixed(2)}$</span>
                        <span class="current-price">${parseFloat(
                          e.price * (1 - e.sale / 100)
                        ).toFixed(2)}$</span>
                      </div>
                      <p class="product-origin cus-margin-top-bot-8px">
                        <span class="bold">Xuất xứ:</span> ${e.origin}
                      </p>
                      <p class="product-type cus-margin-top-bot-8px">
                        <span class="bold"> Loại sản phẩm:</span> <span>${e.type}</span>  
                      </p>
                      <p class="product-weight cus-margin-top-bot-8px">
                        <span class="bold">Khối lượng:</span> ${e.weight} Kg
                      </p>
                    </div>
                    <button class="add-to-cart">
                      Add To Cart <i class="fa-solid fa-basket-shopping"></i>
                    </button>
                  </div>
                </div>`;
  });
  document.querySelector("#product-category .category-main .row").innerHTML =
    content.join("");
}

renderProduct(products);
onSearchProduct();


function filterType(x){

    let arrFilter= products.filter((e)=>{
       return e.type.toLocaleLowerCase()==x;
    })
    renderProduct(arrFilter)

}

function filterOrigin1(x){
    let arrFilter= products.filter((e)=>{
        return e.origin.toLocaleLowerCase() == x;
     })
     renderProduct(arrFilter)
}

function filterOrigin2(x){
    let arrFilter= products.filter((e)=>{
        return e.origin.toLocaleLowerCase() != x;
     })
     renderProduct(arrFilter)
}

function sortPrice1(){
    let sortArr =[...products].sort((a,b)=>{return b.price-a.price})
    renderProduct(sortArr)
}

function sortPrice2(){
    let sortArr =[...products].sort((a,b)=>{return a.price-b.price})
    renderProduct(sortArr)
}

function filterPrice(x,y){
    let arrFilter= products.filter((e)=>{
        return e.price < x && e.price>=y;
    })
    renderProduct(arrFilter)

}

function filterPrice2(x){
    let arrFilter= products.filter((e)=>{
        return e.price < x 
    })
    renderProduct(arrFilter)

}
function filterPrice3(x){
    let arrFilter= products.filter((e)=>{
        return e.price >= x 
    })
    renderProduct(arrFilter)

}



