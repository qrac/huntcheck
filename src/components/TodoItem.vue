<template lang="pug">
li
  label(:style="labelStyle")
    input(type="checkbox" v-model="item.done")
    span {{item.label}}
    button(@click="$emit('remove')") ×
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