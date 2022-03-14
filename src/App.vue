<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button @click="toggleDark()">
    <div v-if="isDark">黑</div>

    <div v-else>白</div>
  </button>
</template>
<style lang="less" scoped></style>
