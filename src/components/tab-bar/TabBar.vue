<template>
  <van-tabbar v-model="currentIndex" active-color="#ff9854">
    <template v-for="(item, index) in tabbarData">
      <van-tabbar-item replace :to=item.path @click="changeCurrent(index)"
      >
        <span> {{ item.text }}</span>
        <template v-slot:icon = "props">
          <img v-if="currentIndex==index" :src=getAssetUrl(item.imageActive)  alt="" srcset="">
      <img v-else :src=getAssetUrl(item.img)  alt="" srcset="">
        </template>
      </van-tabbar-item>
        
    </template>
    
    
  </van-tabbar>
</template>

<script setup>
import { ref } from "vue"
import tabbarData from "@/assets/data/tabbar.js"
import getAssetUrl from "@/utils/get_assets_img.js"
const currentIndex = ref(0)
const changeCurrent = (index)=> {
  currentIndex.value = index
}


</script>

<style lang='less' scoped>


    .text {
      font-size: 12px;
    }

    img {
      width: 36px;
      height: 30px;
    }


</style>
