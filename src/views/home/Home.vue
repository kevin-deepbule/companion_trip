<template>
<div class="home">
  <HomeNavBanner></HomeNavBanner>
  <div class="banner">
    <img src="@/assets/img/home/banner.webp" alt="" >
  </div>
  <div class="location">
    <div class="city">上海</div>
    <div class="position">
      <span class="text">我的位置</span>
      <img src="@/assets/img/home/icon_location.png" alt="">
    </div>
  </div>
</div>
</template>

<script setup>
import HomeNavBanner from "./components/HomeNavBanner.vue"
</script>

<style lang='less' scoped>
.home {
  .banner{
    img {
      width: 100%;
    }
  }
  .location {
    display: flex;
    padding: 2px 12px;
    align-items: center;
    justify-content: center;
    .city{
      flex: 1;
    }
    .position {
      display: flex;
      width: 90px;
      img {
        margin-left: 5px;
        width: 18px;
        height: 18px;
      }
    }
  }
}
</style>
