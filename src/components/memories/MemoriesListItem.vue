<template>
  <ion-item>
    <ion-thumbnail slot="start">
      <ion-img :src="memory.image" :alt="memory.title"></ion-img>
    </ion-thumbnail>
    <ion-label>
      {{ memory.title }}
    </ion-label>
  </ion-item>
</template>

<script>
import { IonItem, IonImg, IonThumbnail, IonLabel } from "@ionic/vue";
export default {
  name: "memories-list-item",
  components: { IonItem, IonImg, IonThumbnail, IonLabel },
  props: {
    memory: { type: Object, require: false },
  },
};
</script>

<style scoped>
ion-thumbnail {
  --size: 56px;
  --border-radius: 4px;
}
</style>
