<template>
  <InnerPageWrapper>
    <CostsList />
  </InnerPageWrapper>
</template>

<script>
import InnerPageWrapper from "@/components/InnerPageWrapper.vue";
import CostsList from "@/components/CostsList.vue";

export default {
  name: "CostsView",
  components: { CostsList, InnerPageWrapper },
};
</script>

<style scoped></style>
