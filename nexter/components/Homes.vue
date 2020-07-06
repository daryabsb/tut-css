<template>
  <section class="homes">
    <div class="home" v-for="home in homes" :key="home.id">
      <img :src="home.img" alt="house 1" class="home__img" />
      <svg class="home__like">
        <use xlink:href="/img/sprite.svg#icon-heart-full" />
      </svg>
      <h5 class="home__name">{{home.name}}</h5>
      <div class="home__location">
        <svg>
          <use xlink:href="/img/sprite.svg#icon-map-pin" />
        </svg>
        <p>{{home.location}}</p>
      </div>
      <div class="home__rooms">
        <svg>
          <use xlink:href="/img/sprite.svg#icon-profile-male" />
        </svg>
        <p>{{home.rooms}}</p>
      </div>
      <div class="home__area">
        <svg>
          <use xlink:href="/img/sprite.svg#icon-expand" />
        </svg>
        <p>
          {{home.sqm}}m
          <sup>2</sup>
        </p>
      </div>
      <div class="home__price">
        <svg>
          <use xlink:href="/img/sprite.svg#icon-key" />
        </svg>
        <p>${{home.price}}</p>
      </div>
      <button class="btn home__btn">Contact Realtor</button>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      homes: [
        {
          id: 1,
          img: "/img/house-1.jpeg",
          name: "Beautiful Family House",
          location: "USA",
          rooms: "5 rooms",
          sqm: "325",
          price: "1,200,000"
        },
        {
          id: 2,
          img: "/img/house-2.jpeg",
          name: "Modern Glass Villa",
          location: "Canada",
          rooms: "4 rooms",
          sqm: "460",
          price: "2,750,000"
        },
        {
          id: 3,
          img: "/img/house-3.jpeg",
          name: "Cozy Country House",
          location: "UK",
          rooms: "3 rooms",
          sqm: "250",
          price: "860,000"
        },
        {
          id: 4,
          img: "/img/house-4.jpeg",
          name: "Large Rustical villa",
          location: "Portugal",
          rooms: "6 rooms",
          sqm: "480",
          price: "1,950,000"
        },
        {
          id: 5,
          img: "/img/house-5.jpeg",
          name: "Majestic Palace House",
          location: "Germany",
          rooms: "18 rooms",
          sqm: "4230",
          price: "9,500,000"
        },
        {
          id: 6,
          img: "/img/house-6.jpeg",
          name: "Modern Family Apartment",
          location: "Italy",
          rooms: "3 rooms",
          sqm: "180",
          price: "600,000"
        }
      ]
    };
  }
};
</script>