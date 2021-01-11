<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Ashish Seva</ion-title>
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
          <ion-col size="4">
            <ion-row>
              <ion-col :style="{ backgroundColor: 'lightgreen' }">
                <b>Ashish Seva Tribal Producer Company. Service Company</b>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col :style="{ backgroundColor: 'lightblue'}">
                A service companyis abusinessthat generates income by providing
                servicesinstead of selling physical products. Aservice
                businessis an enterprise composed of a professional or team of
                experts that deliver work or aid in completing a task for the
                benefit of its customers. The product a service business
                delivers isn't like a product you buy at the store, such as a
                television, piece of clothing, or food item. A service business
                delivers a product that is primarily composed of personal labor
                and expertise to deliver the desired work.
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <img src="../../public/assets/icon/as.png" />
              </ion-col>
            </ion-row>
          </ion-col>

          <ion-col size="6">
            <ion-row>
              <ion-col :style="{ backgroundColor: 'lightblue'}">
                <b>The Four Things a Service Business Must Get Right </b> <br/>
                <b>1. The Offering</b> <br/>Service excellence can be defined as what a business
                chooses not to do well. <br/>
                <b>2. The Funding Mechanism</b> <br/> If a self-service option is truly preferable, customers should be
                willing to take on the work for nothing or even pay for the
                privilege. <br/>
                <b>3. The Employee Management System</b><br/> When people from
                Commerce see someone providing great service in another setting,
                whether at a restaurant or at a gas station, they hand out a
                card printed with a compliment and a suggestion to consider
                working for Commerce. <br/>
                <b>4. The Customer Management System</b><br/> Customer
                involvement in operations has profound implications for
                management because it alters the traditional role of the
                business in value creation.
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col>
                <router-link to='/register'>
                  <ion-button color="primary">Register</ion-button>
                </router-link>
              </ion-col>
            </ion-row>
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
  IonCol,
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
    IonCol,
  },
  data() {
    return {
      headerRow: {
        backgroundColor: "lightgreen",
        fontSize: "25px",
      },
    };
  },
  methods: {  }
};
</script>

<style scoped>
ion-col {
  color: black;
}
</style>