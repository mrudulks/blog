<template>
  <section class="container pt-5">
    <div class="row">
      <div class="col-12 mb-3">
        <div class="d-flex">
          <input
            type="text"
            class="form-control mr-3"
            placeholder="Add another list"
            v-model="newList"
          />
          <button class="btn btn-info w-25" @click="createList">Add List</button>
        </div>
      </div>
      <ListCard v-for="item in list" :list="item" :key="item.id"></ListCard>
    </div>
  </section>
</template>

<script>
import api from "../utils/api";
import ListCard from "../components/ListCard.vue";
export default {
    data() {
      return{
        newList: "",
        list:[]
      }
    },
    components: { ListCard },
    methods:{
      async getList(){
        const res = await api.getList();
        const data = await res.json();
        this.list = data;
      },
      async createList(){
        const id = Math.floor( Math.random() * 10);
        if(this.newList){
          const postData = {
            "id":id,
            "content":this.newList,
            "done":false
          }
          const res = await api.createList(postData);
          await this.getList();
        }
      }
    },
    async mounted(){
      await this.getList();
    }
}
</script>
