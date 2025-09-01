let searchForm=document.querySelector('.search-form')
document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active')
    shoppingCart.classList.remove('active')
    account.classList.remove('active')
    navbar.classList.remove('active')
}
let shoppingCart=document.querySelector('.shopping-cart')
document.querySelector('#cart-btn').onclick=()=>{
    shoppingCart.classList.toggle('active')
    searchForm.classList.remove('active')
    account.classList.remove('active')
    navbar.classList.remove('active')

}
let account=document.querySelector('.login-form')
document.querySelector('#login-btn').onclick=()=>{
    account.classList.toggle('active')
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    navbar.classList.remove('active')

}
let navbar=document.querySelector('.navbar')
document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('active')
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    account.classList.remove('active')
}

window.onscroll =()=>{
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    account.classList.remove('active')
    navbar.classList.remove('active')
}
var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 4
      },
    },
  });
var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 4
      },
    },
  });


  
  const cartContainer = document.querySelector('.shopping-cart');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
      const productBox = this.closest('.box');
      const imgSrc = productBox.querySelector('img').src;
      const title = productBox.querySelector('h3').innerText;
      const price = productBox.querySelector('.price').innerText;

      // Create cart item
      const cartItem = document.createElement('div');
      cartItem.classList.add('box');
      cartItem.innerHTML = `
        <i class="fas fa-trash"></i>
        <img src="${imgSrc}" alt="">
        <div class="content">
          <h3>${title}</h3>
          <span class="price">${price}</span>
          <span class="quantity">Qty: 1</span>
        </div>
      `;
      cartContainer.insertBefore(cartItem, cartContainer.querySelector('.total'));
      
      updateTotal();
    });
  });

  // Calculate total function
  function updateTotal() {
    const prices = cartContainer.querySelectorAll('.box .price');
    let total = 0;
    prices.forEach(p => {
      const number = parseFloat(p.innerText.replace(/[^\d.]/g, ''));
      total += number;
    });

    const totalBox = cartContainer.querySelector('.total');
    if (totalBox) {
      totalBox.innerText = `Total: ₹ ${total}/-`;
    }
  }


cartContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('fa-trash')) {
    e.target.parentElement.remove();
    updateTotal();
  }
});
