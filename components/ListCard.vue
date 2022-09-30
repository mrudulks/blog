<template>
  <div class="col-sm-6 col-md-6 col-lg-3">
    <div class="card bg-light mb-3" style="max-width: 18rem">
      <div class="card-header">{{ list.content }}</div>
      <div class="card-body">
        <div class="inner-card" v-for="item in list.cards" :key="item.id">
          {{ item.content }}
        </div>
        <AddInputComponent></AddInputComponent>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['list'],
  data() {
    return {
    }
  },
}
</script>
<style>
.card {
  max-width: 100% !important;
}
.inner-card {
  padding: 0.5rem;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: .2rem;
}
.icons img {
  height: 1.2rem;
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
