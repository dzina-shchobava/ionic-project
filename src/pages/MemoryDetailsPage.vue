<template>
  <base-layout pageTitle="Memory Details" defaultBackLink="/memories">
    <h2 v-if="!loadedMemories">Loading...</h2>
    <h2 v-else> Memory № {{ memoryId }}</h2>
  </base-layout>
</template>

<script>
import { IonImg, IonThumbnail, IonLabel } from "@ionic/vue";

export default {
  components: { IonImg, IonThumbnail, IonLabel },
  data() {
    return {
      memoryId: this.$route.params.id,
    };
  }, 
  computed: {
    loadedMemories() {
      return this.$store.getters.memory(this.memoryId);
    }
  },
};
</script>
