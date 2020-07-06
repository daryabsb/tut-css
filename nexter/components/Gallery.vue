<template>
  <section class="gallery">
    <figure v-for="id in 14" :key="id" :class="`gallery__item gallery__item--${id}`">
      <img :src="`/img/gal-${id}.jpeg`" :alt="`Gallery image ${id}`" class="gallery__img" />
    </figure>
  </section>
</template>

