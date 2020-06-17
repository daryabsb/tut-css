<template>
  <main>
    <section class="section-about">
      <div class="u-center-text u-margin-bottom-large">
        <h2 class="heading-secondary">Exciting tour for adventurer people</h2>
      </div>
      <div class="row">
        <div class="col-1-of-2">
          <h3
            class="heading-tertiary u-margin-bottom-small"
          >You're going to fall in love with nature!</h3>
          <p
            class="paragraph"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi vel cum laudantium voluptatem necessitatibus provident itaque voluptate. Laudantium neque ducimus id asperiores quo qui numquam reiciendis. Placeat, aspernatur totam.</p>
          <h3
            class="heading-tertiary u-margin-bottom-small"
          >Live adventure like you never have before!</h3>
          <p
            class="paragraph"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi vel cum laudantium voluptatem necessitatibus provident itaque voluptate. Laudantium neque ducimus id asperiores quo qui numquam reiciendis. Placeat, aspernatur totam.</p>
          <a href="#" class="btn-text">Learn More &rarr;</a>
        </div>
        <div class="col-1-of-2">
          <div class="composition">
            <img
              src="/img/nat-1-large.jpg"
              alt="photo 1"
              class="composition__photo composition__photo--p1"
            />
            <img
              src="/img/nat-2-large.jpg"
              alt="photo 3"
              class="composition__photo composition__photo--p2"
            />
            <img
              src="/img/nat-3-large.jpg"
              alt="photo 3"
              class="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
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
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss">
.section-about {
  background-color: $color-grey-light-1;
  padding: 25rem 0;
  margin-top: -20vh;
}
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
