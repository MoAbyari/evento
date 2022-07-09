<template>
  <v-card class="mx-auto my-12" max-width="374">
    <v-img height="250" :src="eventDetails.coverPhoto" cover></v-img>

    <v-card-header>
      <v-card-header-text>
        <v-card-title>{{eventDetails.title}}</v-card-title>

        <v-card-subtitle>
          <span class="mr-1"> {{eventDetails.Date}} </span>
        </v-card-subtitle>
        <v-card-subtitle>
          <span class="mr-1"> {{eventDetails.Location}} </span>
        </v-card-subtitle>
      </v-card-header-text>
    </v-card-header>

    <v-card-text>
      <div>{{ eventDetails.description }}</div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-title>Tags</v-card-title>

    <div class="px-4">
      <v-chip-group>
        <v-chip>Elec</v-chip>

        <v-chip>Sydney</v-chip>

        <v-chip>Free</v-chip>
      </v-chip-group>
    </div>

    <v-card-actions>
      <v-chip-group v-for="setting in cardSettings" :key="setting.name">
        <v-chip class="ma-2" variant="outlined" text-color="white" :prepend-icon="setting.icon"
          @click:prepend="setting.func">
          {{setting.name}}
        </v-chip>
      </v-chip-group>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { reactive } from 'vue'

const eventDetails = defineProps({
  eventDetails: Object
})

const cardSettings = reactive([
  {
    name: 'Likes',
    icon: 'mdi-account-circle',
    func: () => { console.log('Likes')}
  },
  {
    name: 'Followers',
    icon: 'mdi-account-circle',
    func: () => { console.log('Followers')}
  },
  {
    name: 'Share',
    icon: 'mdi-label',
    func: () => { console.log('Share')}
  },
])
//const emit = defineEmits(['change', 'delete'])

// const imgSrc = ref('https://cdn.vuetifyjs.com/images/cards/cooking.png');


</script>

<style lang="scss" scoped>

</style>