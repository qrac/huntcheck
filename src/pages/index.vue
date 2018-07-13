<template lang="pug">
main.main
  TodoList
</template>

<script>
import TodoList from "~/components/TodoList.vue"

export default {
  components: {
    TodoList
  }
}
</script>

<style lang="scss" scoped>
.main {
  padding: 0 0.75em;
}
</style>
