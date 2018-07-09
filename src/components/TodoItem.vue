<template>
  <li>
    <label :style="labelStyle">
      <input type="checkbox" v-model="item.done">
      {{item.label}}
    </label>
    <button @click="$emit('remove')">❌</button>
  </li>
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