<template lang="pug">
li.todo-list-item
  label.label(:style="labelStyle")
    input.input(type="checkbox" v-model="item.done" @change="$emit('check')")
    span.text {{item.label}}
  button.btn.is-melt.is-danger(@click="$emit('remove')") x
</template>

<script>
export default {
  props: [ "item" ],
  computed: {
    labelStyle(){
      return this.item.done ? { textDecoration: "line-through"} : {}
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-list-item {
  display: flex;
  align-items: center;
  padding-left: 2.5em;
  border-bottom: 1px dashed $light-5;
  > .label {
    cursor: pointer;
    display: flex;
    align-items: center;
    flex: 1 0 0%;
    min-height: 3em;
  }
  > .label > .input {
    display: none;
  }
}
</style>
