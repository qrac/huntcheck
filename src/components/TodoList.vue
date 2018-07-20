<template lang="pug">
.todo-box
  draggable.todo-list(element="ul" v-bind:options="draggableOption" v-on:end="onEnd" v-model="items")
    TodoItem(v-for="item in items" v-bind:key="item.label" v-bind:item="item" v-on:remove="remove(item)" v-on:check="check(item)")
  form.todo-form(v-on:submit.prevent)
    .todo-add
      input(type="text" v-model="newItemLabel" placeholder="Write a new item" v-on:keyup.enter="add(newItemLabel)")
      //-button.btn.is-ghost.is-primary.is-sm(v-on:click="add(newItemLabel)") Add
</template>

<script>
import store from "store"
import draggable from "vuedraggable"
import TodoItem from "./TodoItem.vue"

const STORE_KEY = "TodoItems"

export default {
  components: {
    draggable,
    TodoItem
  },
  data() {
    return {
      items: store.get(STORE_KEY) || [],
      newItemLabel: "",
      draggableOption: {
        animation: 200,
        delay: 50
      }
    }
  },
  methods: {
    add(){
      this.items.push({
        label: this.newItemLabel,
        done: false
      });
      this.newItemLabel = "";
      this.save();
    },
    remove(item){
      this.items.splice(this.items.indexOf(item), 1);
      this.save();
    },
    check(item){
      this.save();
    },
    save(){
      store.set(STORE_KEY, this.items);
    },
    onEnd: function(evt) {
      //console.log(evt);
      //store.each(function(value, key) {
      //    console.log(key, '==', value)
      //})
      this.save();
    }
  },
  computed: {
    items: {
      get() {
        return this.$store.state.items
      },
      set(value) {
        this.$store.commit('updateList', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-box {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba($pjcolor-brown-01, 0.75);
  border-top: 4px double $light-5;
  border-bottom: 4px double $light-5;
}

.todo-add {
  position: relative;
  display: flex;
  align-items: center;
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
    font-weight: 600;
    //line-height: 3em;
    @include placeholder {
      color: $light-6;
    }
  }
  > .btn {
    align-self: auto;
  }
}
</style>

