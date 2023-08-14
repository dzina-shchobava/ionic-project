<template>
  <base-layout pageTitle="New Memory" defaultBackLink="/memories">
    <create-memory-form @save-memory="saveMemory"></create-memory-form>
  </base-layout>
</template>

<script>
  export default {
    data() {
      return {
        memory: {},
      }
    },
    methods: {
      saveMemory(memory) {
      this.$store.dispatch("addMemory", memory);
      this.$router.replace("/memories");
    },
    }
  }
</script>

<style >

</style>