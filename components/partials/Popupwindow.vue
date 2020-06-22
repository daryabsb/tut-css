<template>
  <div class="popup" id="popup">
    <div class="popup__content">
      <div class="popup__left">
        <img src="/img/nat-8.jpg" class="popup__img" alt="Tour Photo" />
        <img src="/img/nat-9.jpg" class="popup__img" alt="Tour Photo" />
      </div>
      <div class="popup__right">
        <a href="/" class="popup__close">&times;</a>
        <h2 class="heading-secondary u-margin-bottom-small">Start booking now</h2>
        <h3
          class="heading-tertiary u-margin-bottom-small"
        >Important &ndash; Please read these terms before booking</h3>
        <p
          class="popup__text"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec dui nunc mattis enim ut tellus elementum sagittis. Dolor sed viverra ipsum nunc aliquet bibendum. Lorem ipsum dolor sit amet. Amet porttitor eget dolor morbi non arcu risus quis. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Est lorem ipsum dolor sit amet consectetur adipiscing elit. Quis lectus nulla at volutpat diam ut. Ridiculus mus mauris vitae ultricies. Mattis molestie a iaculis at erat. Faucibus ornare suspendisse sed nisi. Erat pellentesque adipiscing commodo elit at. Tristique senectus et netus et malesuada fames. Blandit aliquam etiam erat velit scelerisque. Pretium fusce id velit ut tortor pretium viverra. Tellus mauris a diam maecenas sed enim ut sem viverra. Tincidunt dui ut ornare lectus sit amet est placerat. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Lorem ipsum dolor sit amet.</p>
        <a href="#" class="btn btn--green">Book Now</a>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.popup {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba($color-black, 0.8);
  z-index: 5000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;

  &__content {
    @include absCenter;

    width: 75%;
    // height: 50rem;
    background-color: $color-white;
    box-shadow: 0 2rem 4rem rgba($color-black, 0.2);
    border-radius: 3px;
    display: table;
    overflow: hidden;
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.5);
    transition: all 0.4s 0.2s;
  }

  &__left {
    width: 33.3333333%;
    display: table-cell;

    // float: left;
  }
  &__right {
    width: 66.666667%;
    display: table-cell;
    vertical-align: middle;
    padding: 3rem 5rem;
    // float: right;
  }
  &__img {
    display: block;
    width: 100%;
  }
  &__text {
    font-size: 1.4rem;
    margin-bottom: 4rem;

    // add -moz- -webkit- and -ms- to columns

    column-count: 2;
    column-gap: 4rem; //1em = 14px - el font size
    column-rule: 1px solid $color-grey-light-2;

    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
  }

  // Open states
  &:target {
    opacity: 1;
    visibility: visible;
  }

  &:target &__content {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }

  &__close {
    &:link,
    &:visited {
      color: color-grey-dark;
      position: absolute;
      top: 2.5rem;
      right: 2.5rem;
      font-size: 3rem;
      text-decoration: none;
      display: inline-block;
      transition: all 0.1s;
      line-height: 1;

      &:hover {
        color: $color-primary;
      }
    }
  }
}
</style>