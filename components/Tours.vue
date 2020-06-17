<template>
  <section class="section-tours">
    <div class="u-center-text u-margin-bottom-large">
      <h2 class="heading-secondary">Most popular Tours</h2>
    </div>
    <div class="row">
      <div class="col-1-of-3">
        <div class="card-tours">
          <div class="card-tours__side card-tours__side--front">
            <div class="card-tours__picture card-tours__picture--1">img</div>
            <div class="card-tours__heading"></div>
            <div class="card-tours__detail"></div>
          </div>
          <div class="card-tours__side card-tours__side--back card-tours__side--back--1">BACK</div>
        </div>
      </div>
      <div class="col-1-of-3">
        <div class="card-tours">
          <div class="card-tours__side card-tours__side--front"></div>
          <div class="card-tours__side card-tours__side--back card-tours__side--back--2">BACK</div>
        </div>
      </div>
      <div class="col-1-of-3">
        <div class="card-tours">
          <div class="card-tours__side card-tours__side--front">FRONT</div>
          <div class="card-tours__side card-tours__side--back card-tours__side--back--3">BACK</div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.section-tours {
  background-color: $color-grey-light-1;
  padding: 25rem 0 50rem 0;
  margin-top: -10rem;
}
</style>