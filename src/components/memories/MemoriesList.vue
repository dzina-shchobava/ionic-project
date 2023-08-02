<template>
  <ion-list>
    <memories-list-item
      v-for="memory in memories"
      :memory="memory"
      :key="memory.id"
      :router-link="`/memories/${memory.id}`"
    >
    </memories-list-item>
  </ion-list>
</template>

<script>
import { IonList } from "@ionic/vue";
export default {
  name: "memories-list",
  components: { IonList },
  props: {
    memories: { type: Array, require: true },
  },
};
</script>

<style lang="scss" scoped></style>
