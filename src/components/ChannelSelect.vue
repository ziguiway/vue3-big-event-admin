<script setup>
import { artGetChannelsService } from '@/api/article'
import { ref } from 'vue'
const props = defineProps({
  modelValue: [Number, String]
})
const emit = defineEmits(['update:modelValue'])
// console.log(props.msg, props.channelList)
const channelList = ref([])
const getChannelList = async () => {
  const res = await artGetChannelsService()
  channelList.value = res.data.data
  // console.log(channelList.value)
}
getChannelList()
</script>

<template>
  <div>
    <el-select
      :modelValue="props.modelValue"
      @update:modelValue="emit('update:modelValue', $event)"
    >
      <el-option
        v-for="item in channelList"
        :label="item.cate_name"
        :value="item.id"
        :key="item.id"
      ></el-option>
    </el-select>
  </div>
</template>

<style lang="scss" scoped></style>
