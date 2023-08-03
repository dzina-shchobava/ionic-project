<template>
  <base-layout :pageTitle="loadedMemory.title" defaultBackLink="/memories">
    <h2 v-if="!loadedMemory">Loading...</h2>
    <ion-img :src="loadedMemory.image" :alt="loadedMemory.title"></ion-img>
    <p class="ion-text-center">{{ loadedMemory.description }}</p>
  </base-layout>
</template>

<script>
import { IonImg } from "@ionic/vue";

export default {
  components: { IonImg },
  data() {
    return {
      memoryId: this.$route.params.id,
    };
  },
  computed: {
    loadedMemory() {
      this.$store.commit("setCurrentMemoryId", this.memoryId);
      return this.$store.getters.memory;
    },
  },
};
</script>
