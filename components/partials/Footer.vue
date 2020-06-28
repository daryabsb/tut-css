<template>
  <footer class="footer">
    <div class="footer__logo-box">
      <picture class="footer__logo">
        <source
          srcset="/img/logo-green-small-1x.png 1x, /img/logo-green-small-2x.png 2x"
          media="(max-width: 37.5em)"
          src="/img/logo-green-small-2x.png"
        />
        <img
          srcset="/img/logo-green-1x.png 1x, /img/logo-green-2x.png 2x"
          alt="full logo"
          src="/img/logo-green-2x.png"
        />
      </picture>
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
          <a href="#" class="footer__link">Darya Ibrahim</a> advanced
          combination of nuxt.js and my own css/html library without using
          external css frameworks such as bootstrap!
          <br />Copyright &copy; by
          Darya Ibrahim
        </p>
      </div>
    </div>
  </footer>
</template>
