<template>
  <v-form @submit="sendData" class="form">
    <v-text-field label="Value" v-model="value" class="form-input" />
    <v-text-field label="Category" v-model="category" class="form-input" />
    <v-text-field
      label="Description"
      v-model="description"
      class="form-input"
    />
    <v-btn depressed color="primary" type="submit">Send</v-btn>
  </v-form>
</template>

<script>
import axios from "axios";

export default {
  name: "NewCostForm",
  data() {
    return {
      value: "",
      description: "",
      category: "",
    };
  },
  methods: {
    async sendData(event) {
      event.preventDefault();
      try {
        await axios.post(import.meta.env.VITE_API_HOST + "/api/cost", {
          value: this.value,
          category: this.category,
          description: this.description,
        });

        await this.$router.push("/cost");
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
