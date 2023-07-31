<template>
  <base-layout pageTitle="My Memories">
    <ion-list>
      <ion-item
        v-for="memory in memories"
        :key="memory.id"
        :router-link="`/memories/${memory.id}`"
      >
        
        <ion-thumbnail slot="start">
          <ion-img :src="memory.image" :alt="memory.title"></ion-img>
        </ion-thumbnail>
        <ion-label>
          {{ memory.title }}
        </ion-label>
        
      </ion-item>
    </ion-list>
  </base-layout>
</template>

<script>
import { IonList, IonItem, IonImg, IonThumbnail, IonLabel } from "@ionic/vue";

export default {
  components: { IonList, IonItem, IonImg, IonThumbnail, IonLabel },

  data() {
    return {
      memories: [
        { id: 1, title: "Memory 1", description: "blabla 1", image: 'https://www.worldatlas.com/r/w960-q80/upload/80/50/11/shutterstock-117040402.jpg' },
        { id: 2, title: "Memory 2", description: "blabla 2", image: 'https://www.worldatlas.com/r/w960-q80/upload/f7/26/7c/shutterstock-70804165.jpg'},
        { id: 3, title: "Memory 3", description: "blabla 3", image: 'https://www.worldatlas.com/r/w960-q80/upload/c5/e9/cc/shutterstock-422482132.jpg'},
      ],
    };
  },
};
</script>

<style>
ion-thumbnail {
    --size: 56px;
    --border-radius: 4px;
  }
</style>
