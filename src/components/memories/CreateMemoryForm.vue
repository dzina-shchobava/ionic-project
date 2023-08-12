<template>
  <form
    class="ion-padding"
    @submit.prevent="submitNewMemory"
  >
    <ion-list>
      <ion-item>
        <ion-input
          label="Title"
          label-placement="floating"
          fill="solid"
          placeholder="Enter memory title"
          color="success"
          v-model="newMemoryTitle"
        ></ion-input>
      </ion-item>
      <ion-item>
        <ion-thumbnail slot="start">
          <img :src="previewImageUrl" />
        </ion-thumbnail>
        <ion-button type="button" fill="clear" @click="takePhoto">
          <ion-icon slot="start" :icon="camera"></ion-icon>
          Take photo
        </ion-button>
      </ion-item>
      <ion-item>
        <ion-textarea
          label="Description"
          label-placement="floating"
          fill="solid"
          placeholder="Enter description"
          color="success"
          v-model="newMemoryDescription"
        ></ion-textarea>
      </ion-item>
    </ion-list>
    <ion-button type="submit" expand="block">Save</ion-button>
  </form>
</template>

<script>
import {
  IonList,
  IonItem,
  IonInput,
  IonTextarea,
  IonButton,
  IonThumbnail,
  IonIcon,
} from "@ionic/vue";
import { camera } from 'ionicons/icons';
import { Camera, CameraResultType } from '@capacitor/camera';

export default {
  emits: ["save-memory"],
  name: "create-memory-form",
  components: {
    IonList,
    IonItem,
    IonInput,
    IonTextarea,
    IonButton,
    IonThumbnail,
    IonIcon,
  },
  data() {
    return {
      newMemoryTitle: "",
      newMemoryURL: "",
      newMemoryDescription: "",
      previewImageUrl: null,
      camera,
    };
  },
  methods: {
    submitNewMemory() {
      this.$emit("save-memory", {
        title: this.newMemoryTitle,
        image: this.previewImageUrl,
        description: this.newMemoryDescription,
      });
    },
    async takePhoto() {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 60,
      });

      this.previewImageUrl = photo.webPath;
    }
  },
};
</script>

<style scoped></style>
