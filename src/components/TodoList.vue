<template>
  <div>
    <ul>
      <TodoItem v-for="item in items"
                :key="item.label"
                :item="item"
                @remove="remove(item)"/>
    </ul>
    <form @submit.prevent>
      <input type="text" v-model="newItemLabel" title="Add a new item"/>
      <button @click="add">Add</button>
    </form>
  </div>
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
      add(){
        this.items.push({ label: this.newItemLabel, done: false })
        this.newItemLabel = "";
        this.save();
      },

      save(){
        store.set(STORE_KEY, this.items);
      },

      remove(item){
        this.items.splice(this.items.indexOf(item), 1);
        this.save();
      }
    }
  }
</script>
