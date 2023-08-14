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
          required
        ></ion-input>
      </ion-item>
      <ion-item>
        <ion-thumbnail slot="start" v-if="takenImageUrl">
          <img :src="takenImageUrl"/>
        </ion-thumbnail>
        <ion-button type="button" fill="clear" @click="takePhoto" v-else>
          <ion-icon :icon="camera" size="large"></ion-icon>
        </ion-button>
        <p v-if="this.error">Please, Take a photo!</p>
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
import { camera, image } from 'ionicons/icons';
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
      takenImageUrl: null,
      error: false,
      camera, image
    };
  },
  methods: {
    submitNewMemory() {
      if (this.takenImageUrl) {
        this.$emit("save-memory", {
        title: this.newMemoryTitle,
        image: this.takenImageUrl,
        description: this.newMemoryDescription,
      });
      } else {
        this.error = true;
      }
    },
    async takePhoto() {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        quality: 60,
      });

      this.takenImageUrl = photo.webPath;
      this.error = false;
    },
  },
};
</script>

<style scoped></style>