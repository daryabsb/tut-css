<template>
  <nav>
    <div class="top-bar">
      <ul>
        <li class="topbar__nav">
          <a href="#">Public</a>
        </li>
        <li class="topbar__nav">
          <a href="#">Private</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

body {
  font-family: sans-serif;
}

.top-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 25px;
  background-color: #696969;
}
.top-bar li {
  float: right;
}
.topbar__nav:link {
  display: inline-block;
}
.topbar__nav a {
  color: #fff;
  padding-left: 20px;
  padding-right: 20px;
}
.btn-top {
  text-transform: uppercase;
  text-align: center;
}
</style>