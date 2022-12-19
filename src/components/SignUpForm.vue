<template>
  <v-form @submit="sendData" class="form">
    <v-text-field label="Username" v-model="username" class="form-input" />
    <v-text-field label="Email" v-model="email" class="form-input" />
    <v-text-field label="Password" v-model="password" class="form-input" />
    <v-text-field
      label="Confirm Password"
      v-model="passwordConfirmation"
      class="form-input"
    />
    <v-btn depressed color="primary" type="submit">Send</v-btn>
  </v-form>
</template>

<script>
import { axiosInstance } from "@/api/axios";

export default {
  name: "SignUpForm",
  data() {
    return {
      email: "",
      username: "",
      password: "",
      passwordConfirmation: "",
    };
  },
  methods: {
    async sendData(event) {
      event.preventDefault();
      try {
        await axiosInstance.post("/api/auth/signup", {
          username: this.username,
          email: this.email,
          password: this.password,
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
