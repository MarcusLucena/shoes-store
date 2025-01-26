<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  step: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <div class="breadcrumb-container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }" v-if="step >= 1">Home</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/wishlist' }" v-if="step >= 2">Wishlist</el-breadcrumb-item>
    </el-breadcrumb>
    <el-divider />
  </div>
</template>

<style scoped lang="scss">
.breadcrumb-container {
  margin: 1rem auto;
  .el-breadcrumb {
    font-size: 0.8rem;
    text-decoration: none;
  }
  .el-divider {
    margin: 10px 0;
  }
}
</style>
