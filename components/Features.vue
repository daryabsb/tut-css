<template>
  <section class="section-features">
    <div class="row">
      <div class="col-1-of-4">
        <div class="feature-box">
          <i class="feature-box__icon icon-basic-world"></i>
          <h3 class="heading-tertiary u-margin-bottom-small">Eplore the world</h3>
          <p
            class="feature-box__text"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi eum culpa harum ullam accusantium recusandae sapiente molestias dignissimos architecto!</p>
        </div>
      </div>
      <div class="col-1-of-4">
        <div class="feature-box">
          <i class="feature-box__icon icon-basic-compass"></i>
          <h3 class="heading-tertiary u-margin-bottom-small">Meet nature</h3>
          <p
            class="feature-box__text"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi eum culpa harum ullam accusantium recusandae sapiente molestias dignissimos architecto!</p>
        </div>
      </div>
      <div class="col-1-of-4">
        <div class="feature-box">
          <i class="feature-box__icon icon-basic-map"></i>
          <h3 class="heading-tertiary u-margin-bottom-small">Find your way</h3>
          <p
            class="feature-box__text"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi eum culpa harum ullam accusantium recusandae sapiente molestias dignissimos architecto!</p>
        </div>
      </div>
      <div class="col-1-of-4">
        <div class="feature-box">
          <i class="feature-box__icon icon-basic-heart"></i>
          <h3 class="heading-tertiary u-margin-bottom-small">Live a healthier life</h3>
          <p
            class="feature-box__text"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi eum culpa harum ullam accusantium recusandae sapiente molestias dignissimos architecto!</p>
        </div>
      </div>
    </div>
  </section>
</template>
style.<style lang="scss">
.section-features {
  padding: 20rem 0;
  background-image: linear-gradient(
      to right bottom,
      rgba($color-secondary, 0.8),
      rgba($color-primary-dark, 0.8)
    ),
    url(~assets/img/nat-4.jpg);
  background-size: cover;

  transform: skewY(-7deg);
  margin-top: -11.3rem;

  & > * {
    transform: skewY(7deg);
  }
}
</style>