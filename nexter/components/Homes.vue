<template>
  <section class="homes">
    <div class="home">
      <img src="/img/house-1.jpeg" alt="house 1" class="home__img" />
      <svg class="home__like">
        <use xlink:href="/img/sprite.svg#icon-heart-full" />
      </svg>
      <h5 class="home__name">Beautiful Family House</h5>
      <div class="home__location">
        <svg>
          <use xlink:href="/img/sprite.svg#icon-map-pin" />
        </svg>
        <p>USA</p>
      </div>
      <div class="home__rooms">
        <svg>
          <use xlink:href="/img/sprite.svg#icon-profile-male" />
        </svg>
        <p>5 rooms</p>
      </div>
      <div class="home__area">
        <svg>
          <use xlink:href="/img/sprite.svg#icon-expand" />
        </svg>
        <p>
          325 m
          <sup>2</sup>
        </p>
      </div>
      <div class="home__price">
        <svg>
          <use xlink:href="/img/sprite.svg#icon-key" />
        </svg>
        <p>$1,200,000</p>
      </div>
      <button class="cta">Contact Realtor</button>
    </div>
    <div class="home">Home Card 2</div>
    <div class="home">Home Card 3</div>
    <div class="home">Home Card 4</div>
    <div class="home">Home Card 5</div>
    <div class="home">Home Card 6</div>
  </section>
</template>