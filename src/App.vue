<script setup>
import { useUserStore } from './stores/modules/user'
const userStore = useUserStore()
</script>

<template>
  <div>
    {{ userStore.token }}
    <el-button type="primary" @click="userStore.setToken('hhhhhhh')"
      >改token</el-button
    >
    <el-button type="success">Success</el-button>
  </div>
</template>

<style lang="scss" scoped></style>
