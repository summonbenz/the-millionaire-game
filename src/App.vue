<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
@font-face {
    font-family: 'Maledpan';
    src: url('./assets/webfonts/maledpan-regular-webfont.eot');
    src: url('./assets/webfonts/maledpan-regular-webfont.eot?#iefix') format('embedded-opentype'),
         url('./assets/webfonts/maledpan-regular-webfont.woff2') format('woff2'),
         url('./assets/webfonts/maledpan-regular-webfont.woff') format('woff'),
         url('./assets/webfonts/maledpan-regular-webfont.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
}
</style>
<style lang="scss">
  @import "./style.scss";
</style>