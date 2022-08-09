<script setup>
import { ref } from "vue";
</script>

<template>
  <div class="box">
    <div class="img img1"></div>
    <div class="img img2"></div>
    <div class="img img3"></div>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-biji"></use>
    </svg>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-gerenzhongxin"></use>
    </svg>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-shoucang"></use>
    </svg>
    <span class="iconfont icon-zanting"></span>
  </div>
</template>

<style lang="scss" scoped>
.box {
  width: 500px;
  height: 500px;
  border: 1px solid #eee;
  .img {
    width: 150px;
    height: 150px;
    background-size: cover;
  }
  .img1 {
    background-image: url("@/assets/images/view1.jpg");
  }
  .img2 {
    background-image: url("@/assets/images/view2.jpg");
  }
  .img3 {
    background-image: url("@/assets/images/view3.png");
  }
}
</style>
