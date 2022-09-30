<template>
  <div class="mt-3">
    <div class="input-card" v-show="showInput">
      <input
        type="text"
        class="form-control"
        placeholder="Enter Title for the card.."
        v-model="newCard"
      />
      <div class="d-flex mt-2">
        <button class="btn btn-primary">Add Card</button>
        <button class="btn" @click="closeInputFn()">
          <img src="../static/close.svg" alt="" />
        </button>
      </div>
    </div>
    <div v-show="showButton">
      <button
        class="btn align-items-center d-flex icons mt-3"
        @click="showInputFn()"
      >
        <img src="../static/plus.svg" alt="" class="mr-2" />
        <p class="mb-0">Add Card</p>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newCard: '',
      showInput: false,
      showButton: true,
    }
  },
  methods: {
    showInputFn(){
      this.showInput = !this.showInput
      this.showButton = !this.showButton
    },
    closeInputFn(){
    this.showInput = !this.showInput
      this.showButton = !this.showButton
    }
  },
}
</script>
<style>
.input-card {
  padding: 0.2rem;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.2rem;
}
.input-card .form-control {
  border: none;
}
</style>
