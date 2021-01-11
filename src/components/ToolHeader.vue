<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons>
        <ion-back-button></ion-back-button>
      </ion-buttons>
      <ion-title>{{ header }}</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
import { IonHeader, IonToolbar, IonTitle, IonBackButton, IonButtons } from "@ionic/vue";

export default {
  name: "ToolHeader",
  props: {
    header: String,
  },
  components: { IonHeader, IonToolbar, IonTitle, IonBackButton, IonButtons },
};
</script>

<style scoped>
</style>