<template lang="pug">
.todo-box
  ul.todo-list
    TodoItem(v-for="item in items" :key="item.label" :item="item" @remove="remove(item)" @check="check(item)")
  form.todo-form(@submit.prevent)
    .todo-add
      input(type="text" v-model="newItemLabel" placeholder="Add a new item")
      button(@click="add") +
</template>

<script>
import store from "store"
import TodoItem from "./TodoItem.vue"

const STORE_KEY = "TodoItems"

export default {
  components: { TodoItem },
  data() {
    return {
      items: store.get(STORE_KEY) || [],
      newItemLabel: ""
    }
  },
  methods: {
    save(){
      store.set(STORE_KEY, this.items);
    },
    add(){
      this.items.push({ label: this.newItemLabel, done: false })
      this.newItemLabel = "";
      this.save();
    },
    remove(item){
      this.items.splice(this.items.indexOf(item), 1);
      this.save();
    },
    check(item){
      this.save();
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-box {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  border-top: 1px solid $light-5;
  border-bottom: 1px solid $light-5;
}

.todo-add {
  position: relative;
  display: flex;
  padding-left: 2.5em;
  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 1.25em;
    width: 1em;
    height: 2px;
    background-color: $grey-700;
  }
  &:before {
    transform: translateX(-50%);
  }
  &:after {
    transform: translateX(-50%) rotate(90deg);
  }
  > input {
    flex: 1 0 0%;
    max-width: 100%;
    height: calc(3em + (1px * 2));
    padding: 0;
    background-color: transparent;
    border: none;
    border-radius: 0;
    outline: 0;
    color: $light;
    line-height: 3em;
    @include placeholder {
      color: $light-6;
    }
  }
  > button {
    display: none;
  }
}
</style>

