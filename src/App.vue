<template>
  <!-- <SingletonHeader /> -->
  <h1 class="text-5xl font-bold sm:text-7xl md:text-8xl lg:text-9xl"
    >Where have I been?</h1
  >
  <!-- <TravelStats title="Visited:" /> -->
  <CountryForm />
</template>

<script>
// import { v4 as uuidv4 } from 'uuid'
// import countries from '@/assets/countries.json'
// import SingletonHeader from '@/components/singletons/SingletonHeader.vue'
// import TravelStats from '@/components/TravelStats.vue'
import CountryForm from '@/components/CountryForm.vue'

export default {
  name: 'App',
  components: {
    // SingletonHeader,
    // TravelStats,
    CountryForm,
  },
}
</script>
