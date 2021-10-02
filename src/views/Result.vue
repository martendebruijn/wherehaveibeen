<template>
  <div>
    <h2>Visited</h2>
    <div>World</div>
    <p>{{ received.length }}/{{ countries.length }}</p>
    <p>{{ percentageWorldVisited }}%</p>
    <div>Asia</div>
    <div>Africa</div>
    <div>Antartica</div>
    <div>Australia</div>
    <div>Europe</div>
    <div>North America</div>
    <div>South America</div>
    <div>Oceania</div>
  </div>
</template>

<script>
import countries from '@/assets/countries.json'

export default {
  name: 'Result',
  data() {
    return {
      countries,
      continents: [
        'asia',
        'africa',
        'antartica',
        'europe',
        'south america',
        'north america',
        'australia',
        'oceania',
      ],
    }
  },
  computed: {
    received() {
      const selected = this.$route.query.visited
      const splitted = selected.split('+')
      return splitted
    },
    visitedList() {
      const [countries, visited] = [this.countries, this.received]
      return visited.map((country) => {
        return countries.find((_country) => {
          return _country.name.toLowerCase() === country.toLowerCase()
        })
      })
    },
    percentageWorldVisited() {
      const [visited, countries] = [this.received.length, this.countries.length]
      return this.percentageVisited(visited, countries)
    },
    countriesPerContinent() {
      return this.getPerContinent(this.countries)
    },
    visitedPerContinent() {
      return this.getPerContinent(this.visitedList)
    },
  },
  methods: {
    percentageVisited(visited, total) {
      const percentage = (visited / total) * 100
      const twoDecimals = Math.round(percentage * 100) / 100
      return twoDecimals
    },
    filterPerContinent(continent, array) {
      return array.filter((country) => {
        const lowContinents = country.continent.map((_continent) => {
          return _continent.toLowerCase()
        })
        return lowContinents.includes(continent)
      })
    },
    getPerContinent(array) {
      const result = {}
      this.continents.forEach((continent) => {
        result[continent] = this.filterPerContinent(continent, array)
      })
      return result
    },
  },
}
</script>
