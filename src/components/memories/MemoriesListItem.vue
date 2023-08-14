<template>
  <ion-item>
    <ion-thumbnail slot="start">
      <ion-img :src="memory.image" :alt="memory.title"></ion-img>
    </ion-thumbnail>
    <ion-label>
      {{ memory.title }}
    </ion-label>
    <ion-buttons  @click.stop="deleteMemory(memory.id)">
      <ion-icon slot="end" :icon="trashOutline"></ion-icon>
    </ion-buttons>
  </ion-item>
</template>

<script>
import { IonItem, IonImg, IonThumbnail, IonLabel, IonButtons, IonIcon } from "@ionic/vue";
import { trashOutline } from "ionicons/icons";

export default {
  name: "memories-list-item",
  components: { IonItem, IonImg, IonThumbnail, IonLabel, IonButtons, IonIcon },
  props: {
    memory: { type: Object, require: false },
  },
  data() {
    return { trashOutline };
  },
  methods: {
    deleteMemory(id) {
      console.log(id);
      this.$store.commit('removeMemory', id);
    }
  }
};
</script>

<style scoped>
ion-thumbnail {
  --size: 56px;
  --border-radius: 4px;
}
</style>
