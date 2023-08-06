<template>
  <form class="ion-padding" :value="newMemory" @submit.prevent="submitNewMemory">
    <ion-input
      label="Title"
      label-placement="floating"
      fill="solid"
      placeholder="Enter memory title"
      color="success"
      v-model="newMemoryTitle"
    ></ion-input>
    <ion-input
      label="URL"
      label-placement="floating"
      fill="solid"
      placeholder="Enter text"
      color="success"
      v-model="newMemoryURL"
    ></ion-input>
    <ion-textarea
      label="Description"
      label-placement="floating"
      fill="solid"
      placeholder="Enter description"
      color="success"
      v-model="newMemoryDescription"
    ></ion-textarea>
    <ion-button type="submit"
      expand="full"
      >Save</ion-button
    >
  </form>
</template>

<script>
import { IonInput, IonTextarea, IonButton } from "@ionic/vue";

export default {
  emits: ["save-memory"],
  name: "create-memory-form",
  components: { IonInput, IonTextarea, IonButton },
  data() {
    return {
      newMemoryTitle: "",
      newMemoryURL: "",
      newMemoryDescription: "",
    };
  },
  methods: {
    submitNewMemory() {
      this.$emit('save-memory', {
          title: this.newMemoryTitle,
          image: this.newMemoryURL,
          description: this.newMemoryDescription,
        })
    },
  },
};
</script>

<style scoped></style>
