<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tribe</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col>
            <div :style="headerRow">
              <p>
                Natural immunity is the power of sincere integrity<br />Better
                for Nature
              </p>
            </div>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col>
              <img src="" alt="">
          </ion-col>
        </ion-row>

        
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol
} from "@ionic/vue";

export default {
  name: "Home",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonGrid,
    IonRow,
    IonCol
  },
  data() {
    return {
      headerRow: {
        backgroundColor: "lightgreen",
        fontSize: "25px",
      },
    };
  },
};
</script>