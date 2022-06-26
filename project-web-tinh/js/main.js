let header = `<nav class="navbar navbar-expand-lg navbar-light cus-padding-0">
<div class="container-md ">
  <a class="navbar-brand p-0 m-0" href="#">
    <img src="img/about us/logo.png" alt="" width="80" />
  </a>
  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse nav-header" id="navbarSupportedContent">
    <ul class="navbar-nav mb-2 mb-lg-0 cus-margin-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">Trang chủ</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Sản phẩm</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Chúng tôi</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Liên hệ</a>
      </li>
    </ul>
    <ul class="navbar-nav mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link" href="#">
          <div class="nav-search">
            <img src="img/icon/search.png" alt="">
          </div>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <div class="nav-user">
            <img src="img/icon/user.png" alt="">
            
          </div>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <div class="nav-cart">
            <img src="img/icon/cart.png" alt="">
            <span>2</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</div>
</nav>`

document.querySelector('#header').innerHTML=header;