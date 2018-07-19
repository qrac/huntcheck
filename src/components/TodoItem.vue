<template lang="pug">
li.todo-list-item(v-bind:class="checkStyle")
  label.item-label(v-bind:class="checkStyle")
    input(type="checkbox" v-model="item.done" v-on:change="$emit('check')")
    span.text {{item.label}}
  button.btn.is-delete(@click="$emit('remove')") x
</template>

<script>
export default {
  props: [ "item" ],
  computed: {
    checkStyle(){
      return this.item.done ? { "is-checked": "checked"} : {}
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-list-item {
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 2.5em;
  border-bottom: 1px dashed $light-5;
  &.is-checked {
    background-color: rgba($grey-200, 0.05);
  }
  @include desktop {
    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: -2.25em;
      width: 1.5em;
      height: 1.5em;
      background-color: saturate($pjcolor-green-01, 0%);
      //border: 0.5em solid rgba($pjcolor-green-01, 0.8);
      border-radius: 0.75em;
      filter: blur(4px);
      opacity: 0;
      z-index: 1;
      transform: translateY(-50%);
      transition: ease-in 0.4s;
    }
    &:hover:before {
      opacity: 1;
    }
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to top,
        rgba($pjcolor-green-01, 0.5) 0%,
        rgba($pjcolor-green-01, 0.15) 30%,
        rgba($pjcolor-green-01, 0.1) 50%,
        rgba($pjcolor-green-01, 0.15) 70%,
        rgba($pjcolor-green-01, 0.5) 100%
      );
      border-top: 3px solid $pjcolor-green-01;
      border-bottom: 3px solid $pjcolor-green-01;
      filter: blur(2px);
      opacity: 0;
      z-index: 1;
      transition: ease-in 0.18s;
    }
    &:hover:after {
      opacity: 1;
    }
  }
}

.item-label {
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  flex: 1 0 0%;
  min-height: 3em;
  padding: 0.75em 0;
  z-index: 2;
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
  > .text {
    font-weight: 600;
    text-shadow: $black 1px 1px 0, $black -1px -1px 0, $black -1px 1px 0,
      $black 1px -1px 0, $black 0px 1px 0, $black 0-1px 0, $black -1px 0 0,
      $black 1px 0 0;
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
  align-self: auto;
  width: 2.5em;
  height: 2.5em;
  background-color: transparent;
  border: none;
  color: transparent;
  z-index: 2;
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
