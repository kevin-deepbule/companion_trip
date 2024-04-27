<template>
  <div class="city top-page">
    <div class="top">
      <van-search v-model="value" placeholder="城市/区域/位置" shape="round" show-action @search="onSearch"
      @cancel="onCancel" />

    <van-tabs v-model:active="tabActive" color="#ff9854">
      <van-tab title="国内·港澳台">

      </van-tab>
      <van-tab title="海外">海外</van-tab>
    </van-tabs>
    </div>

    <div class="content">
      <ul></ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
    </div>

  </div>
</template>

<script setup>
import citygroup from "@/assets/data/citygroup"
import { ref } from "vue"
import { Toast, showToast } from "vant"
import myRequest from "@/services/request/index"
import { useRouter } from "vue-router"
import { storeToRefs } from "pinia";
import {useCityStore} from "@/store/index.js"

const router = useRouter()
const value = ref("")
const onSearch = (val) => showToast(val)
const onCancel = () => {
  router.back()
}
const tabActive = ref()

const cityStore = useCityStore()
// cityStore.fetchAllCitiesData()
const { allCites } = storeToRefs(cityStore)


const currentGroup = citygroup


</script>

<style lang='less' scoped>
.city {
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}

</style>
