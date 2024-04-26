<template>
<div class="location">
    <div class="city" @click="cityClick">上海</div>
    <div class="position" @click="positionCilck">
      <span class="text">我的位置</span>
      <img src="@/assets/img/home/icon_location.png" alt="">
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"
const positionCilck = ()=>{
     navigator.geolocation.getCurrentPosition((res)=>{
      
      console.log("res:"+res);
     },(err)=>{
      console.log("err"+err);
     },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    })
}
const router = useRouter()

const cityClick = ()=>{
  router.push("/city")
}
</script>

<style lang='less' scoped>
.location {
  display: flex;
  padding: 2px 12px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #333;
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
</style>
