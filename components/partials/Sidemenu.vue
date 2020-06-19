<template>
  <div class="navigation">
    <input class="navigation__checkbox" type="checkbox" id="navi-toggle" name="nav" />
    <label for="navi-toggle" class="navigation__button">MENU</label>
    <div class="navigation__background">&nbsp;</div>
    <nav class="navigation__nav">
      <ul class="navigation__list">
        <li class="navigation__item">
          <a href="#" class="navigation__link">
            <span>01</span>About Natours
          </a>
        </li>
        <li class="navigation__item">
          <a href="#" class="navigation__link">
            <span>02</span>Your Benefits
          </a>
        </li>
        <li class="navigation__item">
          <a href="#" class="navigation__link">
            <span>03</span>Popular Tours
          </a>
        </li>
        <li class="navigation__item">
          <a href="#" class="navigation__link">
            <span>04</span>Stories
          </a>
        </li>
        <li class="navigation__item">
          <a href="#" class="navigation__link">
            <span>05</span>Book Now
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
.navigation {
  &__checkbox {
    display: none;
  }
  &__button {
    background-color: $color-white;
    height: 7rem;
    width: 7rem;
    position: fixed;
    top: 6rem;
    right: 6rem;
    // transform: translate(-50%, -50%);
    border-radius: 50%;
    z-index: 1010;
    box-shadow: 0 1rem 3rem rgba($color-black, 0.1);
  }
  &__background {
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    position: fixed;
    top: 6.5rem;
    right: 6.5rem;
    background-image: radial-gradient($color-primary, $color-secondary);
    z-index: 1000;
    transition: transform 0.6s cubic-bezier(0.83, 0, 0.17, 1);

    // transform: scale(80);
  }
  &__nav {
    height: 100vh;
    // width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1005;
    opacity: 0;
    width: 0;
    transition: all 0.6s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }
  &__list {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;
    width: 100%;
  }
  &__item {
    margin: 1rem;
  }
  &__link {
    &:link,
    &:visited {
      display: inline-block;
      font-size: 3rem;
      font-weight: 300;
      padding: 1rem 2rem;
      color: $color-white;
      text-decoration: none;
      text-transform: uppercase;
      background-image: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        $color-white 50%
      );
      background-size: 220%;
      transition: all 0.6s;
    }

    span {
      margin-right: 1.5rem;
      display: inline-block;
    }

    &:hover,
    &:active {
      background-position: 100%;
      color: $color-primary;
      transform: translateX(1rem);
    }
  }
  &__checkbox:checked ~ &__background {
    transform: scale(80);
  }
  &__checkbox:checked ~ &__nav {
    opacity: 1;
    width: 100%;
  }
}
</style>