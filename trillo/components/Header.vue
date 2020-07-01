<template>
  <header class="header">
    <img src="/img/logo.png" alt class="logo" />
    <form action="#" class="search">
      <input type="text" placeholder="Search Hotels" class="search__input" />
      <button class="search__button">
        <svg class="search__icon">
          <use xlink:href="/img/sprite.svg#icon-magnifying-glass" />
        </svg>
      </button>
    </form>
    <nav class="user-nav">
      <div class="user-nav__icon-box">
        <svg class="user-nav__icon">
          <use xlink:href="/img/sprite.svg#icon-bookmark" />
        </svg>
        <span class="user-nav__notification">7</span>
      </div>
      <div class="user-nav__icon-box">
        <svg class="user-nav__icon">
          <use xlink:href="/img/sprite.svg#icon-chat" />
        </svg>
        <span class="user-nav__notification">13</span>
      </div>
      <div class="nav-user__user">
        <img src="/img/user.jpg" alt="user photo" class="user-nav__user-photo" />
        <span class="user-nav__user-name">Darya</span>
      </div>
    </nav>
  </header>
</template>

