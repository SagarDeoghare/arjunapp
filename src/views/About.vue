<template>
  <ion-page>
    <tool-header header="About Us"></tool-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">About Us</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ExploreContainer name="About Us page" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import ToolHeader from '@/components/ToolHeader.vue';

export default  {
  name: 'AboutUs',
  components: { ToolHeader, ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>