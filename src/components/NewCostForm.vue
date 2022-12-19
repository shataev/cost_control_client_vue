<template>
  <v-form @submit="sendData" class="form">
    <v-text-field label="How much?" v-model="amount" class="form-input" />
    <v-text-field label="For What?" v-model="product" class="form-input" />
    <v-text-field
      label="Wanna say smtg?"
      v-model="comment"
      class="form-input"
    />
    <v-btn depressed color="primary" type="submit">Send</v-btn>
  </v-form>
</template>

<script>
import { axiosInstance } from "@/api/axios";

export default {
  name: "NewCostForm",
  data() {
    return {
      amount: "",
      comment: "",
      product: "",
    };
  },
  methods: {
    async sendData(event) {
      event.preventDefault();
      try {
        await axiosInstance.post("/api/cost", {
          amount: this.amount,
          product: this.product,
          comment: this.comment,
        });

        await this.$router.push("/costs");
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
.form {
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-input {
  margin-bottom: 10px;
}
</style>
