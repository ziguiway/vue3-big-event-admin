<script setup>
import zh from 'element-plus/es/locale/lang/zh-cn.mjs'
</script>

<template>
  <el-config-provider :locale="zh">
    <div>
      <RouterView></RouterView>
    </div>
  </el-config-provider>
</template>

<style lang="scss" scoped></style>
