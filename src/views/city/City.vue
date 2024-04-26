<template>
  <div class="city top-page">
    <van-search 
    v-model="value" 
    placeholder="城市/区域/位置" 
    shape="round"
    show-action
    @search="onSearch"
    @cancel="onCancel"
    />

    <van-tabs v-model:active="tabActive" color="#ff9854">
  <van-tab title="国内·港澳台">国内·港澳台</van-tab>
  <van-tab title="海外">海外</van-tab>
</van-tabs>
    
  </div>
</template>

<script setup>
import {ref} from "vue"
import {Toast,showToast} from "vant"
import myRequest from "@/services/request/index"

const value = ref("")
const onSearch = (val) => showToast(val)
const onCancel = () => showToast('取消')
const tabActive = ref()

// 拿数据
myRequest.get({url:"/city"}).then(res=>{
  console.log(res);
})

</script>

<style lang='less' scoped>
.city {

}
</style>
