<template>
  <InnerPageWrapper>
    <NewCostForm />
  </InnerPageWrapper>
</template>

<script>
import InnerPageWrapper from "@/components/InnerPageWrapper.vue";
import NewCostForm from "@/components/NewCostForm.vue";

export default {
  name: "NewCostView",
  components: { InnerPageWrapper, NewCostForm },
};
</script>

<style scoped></style>
