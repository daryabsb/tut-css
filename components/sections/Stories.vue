<template>
  <section class="section-stories">
    <div class="bg-video">
      <video class="bg-video__content" autoplay muted loop>
        <source src="/img/video.mp4" type="video/mp4" />
        <source src="/img/video.webm" type="video/webm" />Your browser is not supported!
      </video>
    </div>
    <div class="u-center-text u-margin-bottom-large">
      <h2 class="heading-secondary">We make people genuinetly happy</h2>
    </div>
    <div class="row">
      <div class="story">
        <figure class="story__shape">
          <img class="story__img" src="/img/nat-8.jpg" alt="Person on a tour" />
          <figcaption class="story__caption">Mary Smith</figcaption>
        </figure>
        <div class="story__text">
          <h3 class="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet deleniti praesentium, neque esse rem qui odit accusamus ut quia quod nesciunt atque tempora, aut, assumenda reiciendis. Ipsam dignissimos ex suscipit. Eveniet deleniti praesentium, neque esse rem qui odit accusamus ut quia quod nesciunt.</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="story">
        <figure class="story__shape">
          <img class="story__img" src="/img/nat-9.jpg" alt="Person on a tour" />
          <figcaption class="story__caption">Jake Wilson</figcaption>
        </figure>
        <div class="story__text">
          <h3
            class="heading-tertiary u-margin-bottom-small"
          >Wow! My life is completely different now!</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet deleniti praesentium, neque esse rem qui odit accusamus ut quia quod nesciunt atque tempora, aut, assumenda reiciendis. Ipsam dignissimos ex suscipit. Eveniet deleniti praesentium, neque esse rem qui odit accusamus ut quia quod nesciunt.</p>
        </div>
      </div>
    </div>
    <div class="u-center-text u-margin-top-huge">
      <a href="#" class="btn-text">Read all stories</a>
    </div>
  </section>
</template>
<style lang="scss">
.section-stories {
  position: relative;
  padding: 15rem 0;
  // background-color: $color-grey-light-1;
}
</style>