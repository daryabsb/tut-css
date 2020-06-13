<template>
  <div>
    <Header />
    <nuxt />
  </div>
</template>
<script>
import Header from "~/components/Header";
export default {
  components: {
    Header
  }
};
</script>
<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Lato", sans-serif !important;
  font-weight: 400;
  /* font-size: 16px; */
  line-height: 1.7;
  color: #777;
  padding: 3rem;

  box-sizing: border-box;
}
</style>
