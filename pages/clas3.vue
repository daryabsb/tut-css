<template>
  <nav class="clas-header">
    <div class="top-nav-Section">
      <div class="top-nav-container">
        <div class="yCmsComponent site-country-dorpdown arrow-down">
          <div class="accNavComponent js-accNavComponent NAVcompONENT" data-title>
            <nav class="accNavComponent__child-wrap">
              <a href="https://www.clasohlson.com/se/" class="subMenuArrow" title="Sweden">
                <svg class="countrylocale icon sweden">
                  <use xlink:href="#icon-sweden" />
                </svg>Sweden
              </a>
              <ul class="countryLanguage">
                <li>
                  <a href="https://www.clasohlson.com/no/" class="subMenuArrow" title="Norway">
                    <svg class="countrylocale icon norway">
                      <use xlink:href="#icon-norway" />
                    </svg>Norway
                  </a>
                </li>
                <li>
                  <a href="https://www.clasohlson.com/fi/" class="subMenuArrow" title="Finland">
                    <svg class="countrylocale icon finland">
                      <use xlink:href="#icon-finland" />
                    </svg>Finland
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="yCmsComponent site-view">
          <nav
            class="navigation js_navigation--bottom js-enquire-offcanvas-navigation"
            role="navigation"
          >
            <div class="navigation__overflow">
              <ul class="nav__links nav__links--products js-offcanvas-links">
                <ul class="tabSelector">
                  <li class="active">
                    <span>
                      <a rel="nofollow" href="?SiteView=B2C">Privatkund</a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a rel="nofollow" href="?SiteView=B2B">Företagskund</a>
                    </span>
                  </li>
                </ul>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  layout: "clas",
  head: {
    bodyAttrs: {
      class: "clas-body"
    }
  }
};
</script>

<style lang="scss">
.clas-body {
  margin: 0;
  padding: 0;
}
.clas-header {
  background-color: #60afdc;
  margin: 0 0;

  padding: 3rem;
  position: relative;
  z-index: -1;
}

.clas-header .top-nav-Section {
  position: absolute;
  top: 0;
  left: 0;
  height: 3rem;
  color: #fff;
  background-color: #696969;
}
.top-nav-container {
  max-width: 992px;
  margin: 0 auto;
}
.top-nav-Section .site-country-dorpdown {
  float: left;
  padding: 7px;
  display: block;
  padding: 0;
  width: 117px;
  margin-left: -16px;
  font-size: 0.85rem;
  position: relative;
}
.navigation.main-header
  ul.nav__links--shop_info
  > li
  .nav__links--account
  .accNavComponent__child-wrap
  div {
  color: #fff;
  text-transform: none;
  font-weight: 700;
  padding: 0;
  display: flex;
}

nav.accNavComponent__child-wrap div:first-child {
  display: none;
}

.country-btn {
  padding: 3rem;
}
.top-nav-Section .top-nav-container:after {
  content: "";
  clear: both;
  display: block;
}

.top-nav-Section .top-nav-container a {
  color: inherit;
  text-decoration: inherit;
}

.top-nav-Section .site-country-dorpdown {
  float: left;
  padding: 7px;
  display: block;
  padding: 0;
  width: 117px;
  margin-left: -16px;
  font-size: 0.85rem;
  position: relative;
}

.top-nav-Section .site-country-dorpdown .countrylocale {
  width: 22.9px;
  height: 15px;
  margin-right: 12px;
  vertical-align: sub;
}

.top-nav-Section .site-country-dorpdown a {
  text-transform: capitalize;
  font-size: inherit;
  display: inline-block;
  width: 100%;
  padding: 6px 7px 6px 16px;
}

.top-nav-Section .site-country-dorpdown a img {
  width: 16px;
  height: 11px;
  margin-right: 12px;
}

.top-nav-Section .site-country-dorpdown:hover a ~ .countryLanguage {
  display: block;
}

.top-nav-Section .site-country-dorpdown:hover.arrow-down:before {
  content: "";
  display: block;
  width: 0;
  height: 0;
  border-top: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #fff4f4;
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
}

.top-nav-Section .site-country-dorpdown:hover.arrow-down:before {
  right: 0;
}

.top-nav-Section .site-country-dorpdown.arrow-down:before {
  right: 0;
}

.top-nav-Section .site-country-dorpdown .countryLanguage {
  top: 29px;
  min-width: 100%;
  left: 0;
  display: none;
  position: absolute;
  background: #696969;
  z-index: 9;
}

.top-nav-Section .site-country-dorpdown .countryLanguage li {
  color: white;
}

.top-nav-Section .site-country-dorpdown .countryLanguage li a {
  padding: 7px 10px 7px 16px;
  display: inline-block;
  width: 100%;
}

.top-nav-Section .site-country-dorpdown .countryLanguage li a img {
  width: 16px;
  height: 11px;
  margin-right: 12px;
}

.top-nav-Section .site-country-dorpdown .countryLanguage li a:hover {
  background-color: #898989;
}

.top-nav-Section .terms-and-conditions {
  float: left;
  padding: 7px;
  display: block;
  font-size: 0.85rem;
}

.top-nav-Section .terms-and-conditions a {
  border-left: 1px solid white;
  padding: 2px 11px;
}

.top-nav-Section .finland-country-selector {
  float: left;
  padding: 7px;
  display: block;
  padding: 4px 7px;
}

.top-nav-Section
  .finland-country-selector
  > .navigation
  .nav__links--products
  li
  span {
  border-radius: 3px;
  display: inline-block;
}

.top-nav-Section
  .finland-country-selector
  > .navigation
  .nav__links--products
  li
  span
  a {
  padding: 1px 10px;
}

.top-nav-Section
  .finland-country-selector
  > .navigation
  .nav__links--products
  li.active
  span {
  background: white;
}

.top-nav-Section
  .finland-country-selector
  > .navigation
  .nav__links--products
  li.active
  span
  a {
  color: black;
}

.top-nav-Section .site-view {
  display: block;
  float: right;
  font-size: 1rem;
}

.top-nav-Section .site-view .nav__links::after {
  content: "";
  display: block;
  clear: both;
}

@media only screen and (max-width: 767px) {
  .top-nav-Section .site-view .nav__links:before {
    content: " ";
    display: table;
  }
}

.top-nav-Section .site-view .nav__links.nav__links--products {
  padding: 0;
  border-radius: 3px 3px 0 0;
}

.top-nav-Section .site-view .nav__links.nav__links--products li {
  float: left;
  list-style-type: none;
}

.top-nav-Section .site-view .nav__links.nav__links--products li.active {
  background: #60afdc;
  border-radius: 3px 3px 0 0;
  font-weight: 700;
}

.top-nav-Section .site-view .nav__links.nav__links--products li.active a {
  color: #fff;
}

.top-nav-Section .site-view .nav__links.nav__links--products li a {
  color: #fff;
}

.top-nav-Section .site-view > .navigation,
.top-nav-Section .finland-country-selector > .navigation {
  border-bottom: none;
  background: inherit;
}

.top-nav-Section .site-view > .navigation li,
.top-nav-Section .finland-country-selector > .navigation li {
  display: inline-block;
}

.top-nav-Section .site-view > .navigation li a,
.top-nav-Section .finland-country-selector > .navigation li a {
  padding: 5px 20px;
  display: inline-block;
}
</style>