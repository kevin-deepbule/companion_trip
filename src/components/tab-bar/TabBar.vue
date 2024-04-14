<template>
  <div class="tab-bar">
    <div class="tab-bar-item" 
    v-for="(item, index) in tabbarData" 
    :class="{tabbaractive: currentIndex == index}" @click="clickTabbarItem(index,item)"
    >
      <img v-if="currentIndex==index" :src=getAssetUrl(item.imageActive)  alt="" srcset="">
      <img v-else :src=getAssetUrl(item.img)  alt="" srcset="">
      <span class="text"> {{ item.text  }}</span>
    </div>
    <!-- <div class="tab-bar-item">
      <img src="@/assets/img/tabbar/tab_home.png" alt="">
      <span class="text">首页</span>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/img/tabbar/tab_favor.png" alt="" srcset="">
      <span class="text">收藏</span>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/img/tabbar/tab_order.png" alt="">
      <span class="text">订单</span>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/img/tabbar/tab_message.png" alt="">
      <span class="text">消息</span>
    </div> -->
  </div>
</template>

<script setup>
import {ref} from "vue"

import tabbarData from "@/assets/data/tabbar.js"

import getAssetUrl from "@/utils/get_assets_img.js"

import {useRouter} from "vue-router"

const currentIndex = ref(0)
const router = useRouter()
const clickTabbarItem = function(index,item){
   currentIndex.value = index
   router.push(item.path)
  } 

</script>

<style lang='less' scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  
  .tab-bar-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &.tabbaractive {
    color: var(--primary-color);
  }
    .text {
      font-size: 12px;
    }
    img {
      width: 36px;
      height: 30px;
    }
  }
  
}

</style>
