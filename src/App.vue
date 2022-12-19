<template>
  <v-app>
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { axiosInstance } from "@/api/axios";

export default {
  data() {
    return {};
  },
  mounted() {
    /**
     * Silent Authentication
     */
    axiosInstance
      .get("/api/auth", {
        headers: {
          "X-Verification-Code": import.meta.env.VITE_VERIFICATION_CODE,
        },
      })
      .then((response) => {
        const { status } = response;

        if (status !== 200) {
          this.$router.push("/auth/signin");
        }

        this.$store.commit("setIsAuthenticated", true);
        this.$store.commit("setAccessToken", response.data.accessToken);
      })
      .catch((error) => {
        this.$router.push("/auth/signin");
      });
  },
};
</script>

<style scoped></style>
