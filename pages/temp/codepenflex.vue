<template>
  <div class="container">
    <div class="item">1</div>
    <div class="item i2">2</div>
    <div class="item">3</div>
    <div class="item i4">4</div>
    <div class="item">5</div>
  </div>
</template>
<style>
.container {
  background-color: #ccc;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: strretch;
}
.item {
  background-color: #f1425d;
  padding: 30px;
  margin: 30px;
  color: #fff;
  font-size: 40px;
}
.i2 {
  height: 200px;
}
.i4 {
  font-size: 70px;
}
</style>