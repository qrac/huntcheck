<template lang="pug">
li.todo-list-item
  label.item-label(:class="labelStyle")
    input(type="checkbox" v-model="item.done" @change="$emit('check')")
    span.text {{item.label}}
  button.btn.is-delete(@click="$emit('remove')") x
</template>

<script>
export default {
  props: [ "item" ],
  computed: {
    labelStyle(){
      return this.item.done ? { "is-checked": "checked"} : {}
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
}

.item-label {
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  flex: 1 0 0%;
  min-height: 3em;
  padding: 0.75em 0;
  //transition: ease-in 0.12s;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: -2.5em;
    width: 2.5em;
    height: 2.5em;
    background-image: url("/check.svg");
    opacity: 0;
    transform: translateY(-50%);
    //transition: ease-in 0.12s;
  }
  > input {
    display: none;
  }
}

.item-label.is-checked {
  color: $light-4;
  text-decoration: line-through;
  &:before {
    opacity: 1;
  }
}

.btn.is-delete {
  cursor: pointer;
  position: relative;
  width: 2.5em;
  height: 2.5em;
  background-color: transparent;
  border: none;
  color: transparent;
  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 1.25em;
    width: 1em;
    height: 2px;
    background-color: $red-700;
  }
  &:before {
    transform: translateX(-50%) rotate(-45deg);
  }
  &:after {
    transform: translateX(-50%) rotate(45deg);
  }
}
</style>
