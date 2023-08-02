<template>
  <base-layout pageTitle="Memory Details" defaultBackLink="/memories">
    <h2> Memory № {{ memoryId }}</h2>
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
};
</script>
