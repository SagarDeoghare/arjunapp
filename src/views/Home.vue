<template>
  <ion-page>
    <tool-header header="Arjun Dasboard"></tool-header>
    <ion-grid>
      <ion-row>
        <ion-col :style="headerRow">
          Natural immunity is the power of sincere integrity<br />
          Better for Nature
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-row>
            <ion-col>
              <router-link to="/mb">
                <img src="../../public/assets/icon/mb.png" />
              </router-link>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <router-link to="/tribe">
                <img src="../../public/assets/icon/tribe.png" />
              </router-link>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <router-link to="/corn">
                <img src="../../public/assets/icon/corn.png" />
              </router-link>
            </ion-col>
          </ion-row>
        </ion-col>

        <ion-col size="6">
          <ion-row class="ion-justify-content-center">
            <ion-col size="12">
              <router-link to="/arjun">
                <img src="../../public/assets/icon/arjun.png" />
              </router-link>
            </ion-col>
         
            <ion-col size="5">
              <router-link to="/milk">
                <img src="../../public/assets/icon/milk.png" />
              </router-link>
            </ion-col>
          </ion-row>
        </ion-col>

        <ion-col>
          <ion-row>
            <ion-col>
              <router-link to="/as">
                <img src="../../public/assets/icon/as.png" />
              </router-link>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <router-link to="/goat">
                <img src="../../public/assets/icon/goat.png" />
              </router-link>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>
              <router-link to="/j">
                <img src="../../public/assets/icon/j.png" />
              </router-link>
            </ion-col>
          </ion-row>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonGrid, IonRow, IonCol } from "@ionic/vue";
import ToolHeader from "@/components/ToolHeader.vue";

export default {
  name: "Home",
  components: {
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    ToolHeader,
  },
  data() {
    return {
      headerRow: {
        backgroundColor: "lightgreen",
        fontSize: "25px",
      },
    };
  },
  methods: {},
};
</script>

<style scoped>
ion-col {
  
  text-align: center;
  margin: 1%;
}
</style>