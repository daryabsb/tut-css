<template>
  <div class="realtors">
    <h3 class="heading-3">TOP 3 REALTORS</h3>
    <div class="realtors__list">
      <template v-for="realtor in realtorsList">
        <img class="realtors__img" :src="realtor.img" alt="realtor img" />
        <div class="realtors__details">
          <h4 class="heading-4 heading-4--light">{{realtor.name}}</h4>
          <p class="realtors__sold">{{realtor.sold}} Houses Sold</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      realtorsList: [
        {
          id: 1,
          img: "/img/realtor-1.jpeg",
          name: "Erik Feinman",
          sold: "250"
        },
        {
          id: 2,
          img: "/img/realtor-2.jpeg",
          name: "Kim Brown",
          sold: "212"
        },
        {
          id: 3,
          img: "/img/realtor-3.jpeg",
          name: "Toby Ramsey",
          sold: "198"
        }
      ]
    };
  }
};
</script>