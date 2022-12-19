<template>
  <v-form @submit="sendData" class="form">
    <v-text-field label="Email" v-model="email" class="form-input" />
    <v-text-field label="Password" v-model="password" class="form-input" />
    <v-btn depressed color="primary" type="submit">Send</v-btn>
  </v-form>
</template>

<script>
import { axiosInstance } from "@/api/axios";

export default {
  name: "SignInForm",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async sendData(event) {
      event.preventDefault();
      try {
        const response = await axiosInstance.post("/api/auth/signin", {
          email: this.email,
          password: this.password,
        });

        const { username, id, email, accessToken } = response.data;

        this.$store.commit("setUser", {
          id,
          username,
          email,
        });
        this.$store.commit("setAccessToken", accessToken);

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
