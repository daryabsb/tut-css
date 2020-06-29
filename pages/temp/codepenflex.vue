<template>
  <div class="container">
    <div class="item">1</div>
    <div class="item i2">2</div>
    <div class="item i3">3</div>
    <div class="item i4">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
    <div class="item i7">7</div>
    <div class="item i8">8</div>
    <div class="item i9">9</div>
    <div class="item">10</div>
  </div>
</template>
<script>
export default {
  layout: "none"
};
</script>
<style>
.container {
  overflow: auto;
  background-color: #ccc;
  padding: 10px;
  height: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
}
/* ::-webkit-scrollbar-thumb {
  background-color: red;
} */
.item {
  background-color: #f1425d;
  padding: 30px;
  margin: 5px;
  color: #fff;
  font-size: 40px;
  /* flex-grow: 1; */
}
.i2 {
  height: 200px;
  /* flex-grow: 3; */
  /* flex-basis: 300px;
  flex-shrink: 0; */
  flex: 0 1 300px;
}
.i3 {
  order: 1;
  flex: 1;
}
.i4 {
  /* font-size: 90px; */
  /* align-self: flex-end; */
  order: -1;
}
</style>