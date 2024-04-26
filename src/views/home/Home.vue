<template>
<div class="home">
  <HomeNavBanner></HomeNavBanner>
  <div class="banner">
    <img src="@/assets/img/home/banner.webp" alt="" >
  </div>
  <HomeSearchBox></HomeSearchBox>
</div>
</template>

<script setup>
import HomeNavBanner from "./components/HomeNavBanner.vue"
import HomeSearchBox from "./components/HomeSearchBox.vue"
</script>

<style lang='less' scoped>
.home {
  .banner{
    img {
      width: 100%;
    }
  }

}
</style>
