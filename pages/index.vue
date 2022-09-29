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
          <button class="btn btn-info w-25">Add List</button>
        </div>
      </div>
  <ListCard></ListCard>
    </div>
  </section>
</template>

<script>
import ListCard from "../components/ListCard.vue";
export default {
    data() {
      return{
        newList: ""
      }
    },
    components: { ListCard }
}
</script>
