<template>
<div class="container">
  <RouterLink class="cross" to="/one-creator"><svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.2678 26.8033L43 46.5355L46.5355 43L26.8033 23.2678L46.5355 3.53555L43 1.33792e-05L23.2678 19.7322L3.53553 0L0 3.53553L19.7322 23.2678L0 43L3.53553 46.5356L23.2678 26.8033Z" fill="black"/></svg></RouterLink>
  <div class="images-container">
    <div class="img"></div>
    <div class="dots-img">
      <button class="dot active"></button>
      <button class="dot"></button>
      <button class="dot"></button>
      <button class="dot"></button>
    </div>
  </div>
  <div class="description">
    <h1 class="text-2xl uppercase mb-5">Creation name complete</h1>
    <p class="text-lg">Don’t miss out on the art that inspires you! Subscribe to our newsletter to stay informed about new drops and exclusive partnerships. Stay connected to creativity.</p>
    <div class="order-container">
      <div class="price text-xl">CHF 1’000.-</div>
      <div class="flex">
        <button class="basket"><svg width="23" height="21" viewBox="0 0 23 21" xmlns="http://www.w3.org/2000/svg"><path d="M4 0.5C4.42969 0.5 4.82031 0.851562 4.89844 1.28125L4.97656 1.75H21.3828C22.2031 1.75 22.8281 2.57031 22.5938 3.35156L20.4844 10.8516C20.3281 11.3984 19.8594 11.75 19.2734 11.75H6.89062L7.24219 13.625H19.3125C19.8203 13.625 20.25 14.0547 20.25 14.5625C20.25 15.1094 19.8203 15.5 19.3125 15.5H6.46094C6.03125 15.5 5.64062 15.1875 5.5625 14.7578L3.21875 2.375H1.1875C0.640625 2.375 0.25 1.98438 0.25 1.4375C0.25 0.929688 0.640625 0.5 1.1875 0.5H4ZM10.875 7.53125H12.5938V9.25C12.5938 9.67969 12.9062 10.0312 13.375 10.0312C13.8047 10.0312 14.1562 9.67969 14.1562 9.25V7.53125H15.875C16.3047 7.53125 16.6562 7.17969 16.6562 6.75C16.6562 6.32031 16.3047 5.96875 15.875 5.96875H14.1562V4.25C14.1562 3.82031 13.8047 3.46875 13.375 3.46875C12.9062 3.46875 12.5938 3.82031 12.5938 4.25V5.96875H10.875C10.4062 5.96875 10.0938 6.32031 10.0938 6.75C10.0938 7.17969 10.4062 7.53125 10.875 7.53125ZM5.25 18.625C5.25 17.6094 6.07031 16.75 7.125 16.75C8.14062 16.75 9 17.6094 9 18.625C9 19.6797 8.14062 20.5 7.125 20.5C6.07031 20.5 5.25 19.6797 5.25 18.625ZM20.25 18.625C20.25 19.6797 19.3906 20.5 18.375 20.5C17.3203 20.5 16.5 19.6797 16.5 18.625C16.5 17.6094 17.3203 16.75 18.375 16.75C19.3906 16.75 20.25 17.6094 20.25 18.625Z"/></svg></button>
        <button class="order">Commander ce produit</button>
      </div>
    </div>
    <div class="text-carousel">Variantes</div>
    <div class="carousel-variants">
      <div class="variant"></div>
      <div class="variant"></div>
      <div class="variant"></div>
      <div class="variant"></div>
      <div class="variant"></div>
    </div>
    <div class="dots-variants">
      <button class="dot active"></button>
      <button class="dot"></button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CreationView' 
}
</script>

<style>
.container {
  z-index: 2;
  padding: 7rem 3rem 0 3rem;
  height: 100vh;
  display: flex;
  justify-content: space-between;
}

.images-container {
  width: 50%;
  height: 50vh;
  position: relative;
  display: flex;
  align-items: center;
}

.description {
  width: 46%;
  height: 50vh;
}

.img {
  background-image: url(../assets/hipppo.webp);
  width: 93%;
  height: 22rem;
}

.dots-img {
  position: absolute;
  right: -.5rem;
  display: flex;
  flex-direction: column;
}

.dot {
  background-color: #000;
  width: 1.85rem;
  height: .4rem;
  margin: .5rem;
  position: relative;
  left: 0;
  transition: all .3s ;
}

.dot:hover {
  left: .1rem;
}

.dot.active {
  border-radius: 100%;
  height: auto;
  aspect-ratio: 1/1;
}

.dots-variants .dot:hover {
  left: 0;
}
¨
.dots-variants .dot {
  width: .4rem;
  height: 1.85rem;
  background-color: aqua;
}

.cross {
  position: absolute;
  top: 2rem;
  right: 2rem;
  transition: all .5s;
}

.cross:hover {
  background: none;
  opacity: .6;
}

p {
  line-height: 34px;
}

.price {
  font-weight: 600;
  font-style: italic;
}

.order-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 4.5rem;
}

.basket {
  aspect-ratio: 1/1;
  border: 3px solid #000;
  width: 2.85rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .4s;
  margin-right: .5rem;
}

.basket:hover {
  aspect-ratio: 1/1;
  border: 3px solid #000;
  background-color: #000;
}

.basket svg{
  transition: all .3s;
}
.basket:hover svg{
  fill: #fff;
}

.order {
  text-transform: uppercase;
  font-weight: 578;
  color: #fff;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.85rem;
  padding: 0 1.2rem;
  transition: all .4s;
  border: 3px solid #000;
}

.order:hover {
  background-color: #fff;
  color: #000;
}
/* 
.carousel-variants {
  position: absolute;
  width: 100%;
  display: flex;
  overflow: hidden;
}

.variant {
  background-image: url(../assets/hipppo.webp);
  margin-right: 2rem;
  height: 14rem;
  aspect-ratio: 3/4;
  position: relative;
} */

</style>