<template>
  <base-layout pageTitle="My Memories">
    <memories-list :memories="memories"> </memories-list>
  </base-layout>
</template>

<script>
export default {
  components: {},
  computed: {
    memories() {
      return this.$store.getters.memories;
    },
  },
};
</script>

<style>
</style>
