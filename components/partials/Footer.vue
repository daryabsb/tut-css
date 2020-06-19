<template>
  <footer class="footer">
    <div class="footer__logo-box">
      <img src="/img/logo-green-2x.png" alt="full logo" class="footer__logo" />
    </div>
    <div class="row">
      <div class="col-1-of-2">
        <div class="footer__navigation">
          <ul class="footer__list">
            <li class="footer__item">
              <a href="#" class="footer__link">Company</a>
            </li>
            <li class="footer__item">
              <a href="#" class="footer__link">Contact Us</a>
            </li>
            <li class="footer__item">
              <a href="#" class="footer__link">Careers</a>
            </li>
            <li class="footer__item">
              <a href="#" class="footer__link">Privacy Policy</a>
            </li>
            <li class="footer__item">
              <a href="#" class="footer__link">Terms</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-1-of-2">
        <p class="footer__copyright">
          Built my
          <a href="#" class="footer__link">Darya Ibrahim</a> advanced combination of nuxt.js and my own css/html library without using external css frameworks such as bootstrap!
          <br />Copyright &copy; by Darya Ibrahim
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  background-color: $color-grey-light-3;
  padding: 10rem 0;

  font-size: 1.4rem;

  &__logo-box {
    text-align: center;
    margin-bottom: 8rem;
  }
  &__logo {
    width: 15rem;
    height: auto;
  }
  &__navigation {
    border-top: 1px solid $color-grey-light-2;
    padding-top: 2rem;
    display: inline-block;
  }
  &__list {
    list-style: none;
  }
  &__item {
    display: inline-block;
    &:not(:last-child) {
      margin-right: 2.5rem;
    }
  }

  &__link {
    &:link,
    &:visited {
      color: $color-grey-light-1;
      background-color: $color-grey-light-3;
      text-decoration: none;
      text-transform: uppercase;
      display: inline-block;
      transition: all 0.2s;
    }
    &:hover,
    &:active {
      color: $color-primary;
      box-shadow: 0 1rem 2rem rgba($color-black, 0.4);
      transform: rotate(5deg) scale(1.3);
    }
  }
  &__copyright {
    color: $color-grey-light-2;
    border-top: 1px solid $color-grey-light-2;
    padding-top: 2rem;
    width: 92%;
    float: right;
  }
}
</style>