<template>
  <ion-page>
    <tool-header header="Register"></tool-header>
    <ion-content>      
      <ion-row class="ion-text-center">
        <ion-col>
          <img src="../../public/assets/icon/as.png" />
        </ion-col>
      
      </ion-row>
      <ion-row class="ion-text-center">
        <ion-col>
         <v-form @submit="logForm()">
          <ion-item>
            <ion-label>Name</ion-label>
            <ion-input type="text" v-model="name" name="name"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Contact</ion-label>
            <ion-input v-model="contact" name="contact"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Message</ion-label>
            <ion-textarea v-model="message" name="message"></ion-textarea>
          </ion-item>
          <ion-button type="submit" block>Submit</ion-button>
        </v-form>
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonRow, IonCol, IonItem, IonLabel, IonInput, IonTextarea, IonButton } from '@ionic/vue';
import ToolHeader from '@/components/ToolHeader.vue';

export default  {
  name: 'Contact',
  components: { ToolHeader, IonContent, IonPage, IonRow, IonCol, IonItem, IonLabel, IonInput, IonTextarea, IonButton }
}
</script>