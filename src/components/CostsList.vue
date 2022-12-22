<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Product</th>
          <th class="text-left">Amount</th>
          <th class="text-left">Comment</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cost in costs" :key="cost._name">
          <td>{{ cost.product }}</td>
          <td>{{ cost.amount }} THB</td>
          <td>{{ cost.comment }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import { axiosInstance } from "@/api/axios";
import { mapGetters } from "vuex";

export default {
  name: "CostsList",
  data() {
    return {
      costs: [],
    };
  },
  computed: {
    ...mapGetters(["userId"]),
  },
  async mounted() {
    console.log(this.userId);
    const costs = await axiosInstance.get("/api/costs", {
      params: {
        userId: this.userId,
      },
    });

    this.costs = costs.data;
  },
};
</script>

<style scoped></style>
