<template>
  <base-layout pageTitle="My Memories">
    <template v-slot:actions-end>
      <ion-button router-link="/memories/add">
        <ion-icon slot="icon-only" :icon="add" ></ion-icon>
      </ion-button>
    </template>
    <memories-list :memories="memories"> </memories-list>
  </base-layout>
</template>

<script>
import { IonButton, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";

export default {
  components: { IonButton, IonIcon },
  data() {
    return { add };
  },
  computed: {
    memories() {
      return this.$store.getters.memories;
    },
  },
};
</script>

<style>
</style>
