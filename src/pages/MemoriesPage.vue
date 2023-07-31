<template>
  <base-layout pageTitle="My Memories">
    <ion-list>
      <ion-item
        v-for="memory in memories"
        :key="memory.id"
        
        :router-link="`/memories/${memory.id}`"
      >
        {{ memory.title }}
      </ion-item>
    </ion-list>
  </base-layout>
</template>

<script>
import { IonList, IonItem } from "@ionic/vue";

export default {
  components: { IonList, IonItem },

  data() {
    return {
      memories: [
        { id: 1, title: "Memory 1", body: "blabla 1" },
        { id: 2, title: "Memory 2", body: "blabla 2" },
        { id: 3, title: "Memory 3", body: "blabla 3" },
      ],
    };
  },
};
</script>

<style></style>
