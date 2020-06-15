<template>
  <header class="header">
    <div class="header__logo-box">
      <img src="~assets/img/logo-white.png" alt="logo" class="header__logo" />
    </div>
    <div class="header__text-box">
      <h1 class="heading-primary">
        <span class="heading-primary--main">Outdoors</span>
        <span class="heading-primary--sub">is where life happens</span>
      </h1>
      <a href="#" class="btn btn--white btn--animated">Discover our tours</a>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  height: 95vh;
  background-image: linear-gradient(
      to right bottom,
      rgba($color-secondary, 0.8),
      rgba($color-primary-dark, 0.8)
    ),
    url(~assets/img/hero.jpg);
  background-size: cover;
  background-position: top;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);

  &__logo-box {
    position: absolute;
    top: 4rem;
    left: 4rem;
  }

  &__logo {
    height: 3.5rem;
  }

  &__text-box {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
}

/* .logo:hover {
  animation: moveInLeft 1s ease-out;
} */

.btn {
  &:link,
  &:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 4rem;
    display: inline-block;
    border-radius: 10rem;
    transition: all 0.2s;
    position: relative;
    font-size: 1.6rem;
  }

  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0 1rem 1rem rgba($color-black, 0.2);

    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }
  &:active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.6rem 0.1rem rgba($color-black, 0.05);
  }
  &--white {
    background-color: $color-white;
    color: $color-grey-dark;

    &::after {
      background-color: $color-white;
    }
  }
  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }

  &--animated {
    animation: moveInTop 0.5s ease-out 0.75s;
    animation-fill-mode: backwards;
  }
}
</style>