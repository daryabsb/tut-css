<template>
  <nav class="clas-header">
    <div class="clas-header__top-nav">
      <div class="clas-header__country float-right">
        <label class="clas-header__cont-label">en</label>
      </div>
      <div class="clas-header__btn-container float-right">
        <div class="clas-header__btn">
          <a href="#" class="clas-header__link"></a>
        </div>
        <div class="clas-header__btn">
          <a href="#" class="clas-header__link"></a>
        </div>
      </div>
    </div>
    <div class="clas-header__middle-nav">
      <div class="clas-header__logo-box">
        <img src="~assets/img/logo-white.png" alt="logo" class="clas-header__logo" />
      </div>
      <div class="clas-header__search">input:what?</div>
    </div>
    <div class="clas-header__menu-bar">
      <ul class="clas-header__list">
        <li class="clas-header__item">
          <a href="#" class="clas-header__menu-link">Category</a>
        </li>
        <li class="clas-header__item">
          <a href="#" class="clas-header__menu-link">Home</a>
        </li>
        <li class="clas-header__item">
          <a href="#" class="clas-header__menu-link">Contact</a>
        </li>
        <li class="clas-header__item">
          <a href="#" class="clas-header__menu-link">Skrew</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  layout: "clas",
  head: {
    bodyAttrs: {
      class: "clas-body"
    }
  }
};
</script>

<style lang="scss">
.clas-body {
  margin: 0;
  padding: 0;
}
.clas-header {
  background-color: #60afdc;
  margin: 0 0;

  padding: 3rem;
  position: relative;

  &__top-nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 3rem;
    color: #fff;
    background-color: #696969;
  }
  &__middle-nav {
    background-color: inherit;
    position: absolute;
    top: 3rem;
    left: 0;
    height: 12rem;
    width: 100%;
    text-align: center;
  }

  &__logo-box {
    position: absolute;
    top: 4rem;
    left: 4rem;
  }
  &__logo {
    display: block;
    height: 6rem;
  }
}
</style>