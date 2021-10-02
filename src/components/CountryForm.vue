<template>
  <div class="country-form">
    <div class="fixed bottom-0 z-10 w-full bg-white">
      <h3 class="text-lg font-medium">Currently selected:</h3>
      <ul class="flex gap-4 overflow-x-auto flex-nowrap">
        <li
          v-for="country in selected"
          :key="country.name"
          class="flex items-center gap-2 px-2 py-1 bg-gray-100 rounded-md"
        >
          <CountryFlag :name="country.name" :flag="country.flag" />
          <span :id="`${country.name}Label`" class="whitespace-nowrap">{{
            country.name
          }}</span>
          <button
            type="button"
            class="flex items-center justify-center w-5 h-5 text-xs rounded-full  font-base"
            @click="remove(country.name)"
          >
            <font-awesome-icon :icon="['fas', 'times']" />
          </button>
        </li>
        <li v-if="selected.length === 0">
          <span>Nothing selected</span>
        </li>
      </ul>
    </div>
    <div>
      <div class="flex items-center gap-2">
        <font-awesome-icon :icon="['fas', 'filter']" />
        <h3 class="text-lg font-semibold">Filter:</h3>
      </div>
      <div class="flex flex-wrap gap-4">
        <div
          class="flex items-center px-3 py-2 bg-purple-100 border rounded-md cursor-pointer  whitespace-nowrap hover:bg-purple-200 hover:border-purple-400"
          :class="showEurope ? 'border-purple-400' : 'border-gray-400'"
        >
          <label for="eur" class="pr-2 font-medium cursor-pointer"
            >Europe</label
          >
          <input
            id="eur"
            v-model="showEurope"
            type="checkbox"
            name="eur"
            class="cursor-pointer"
          />
        </div>
        <div
          class="flex items-center px-3 py-2 bg-purple-100 border rounded-md cursor-pointer  whitespace-nowrap hover:bg-purple-200 hover:border-purple-400"
          :class="showEurope ? 'border-purple-400' : 'border-gray-400'"
        >
          <label for="afr" class="pr-2 font-medium cursor-pointer"
            >Africa</label
          >
          <input id="afr" v-model="showAfrica" type="checkbox" name="afr" />
        </div>
        <div
          class="flex items-center px-3 py-2 bg-purple-100 border rounded-md cursor-pointer  whitespace-nowrap hover:bg-purple-200 hover:border-purple-400"
          :class="showEurope ? 'border-purple-400' : 'border-gray-400'"
        >
          <label for="asi" class="pr-2 font-medium cursor-pointer">Asia</label>
          <input id="asi" v-model="showAsia" type="checkbox" name="asi" />
        </div>
        <div
          class="flex items-center px-3 py-2 bg-purple-100 border rounded-md cursor-pointer  whitespace-nowrap hover:bg-purple-200 hover:border-purple-400"
          :class="showEurope ? 'border-purple-400' : 'border-gray-400'"
        >
          <label for="ant" class="pr-2 font-medium cursor-pointer"
            >Antartica</label
          >
          <input id="ant" v-model="showAntartica" type="checkbox" name="ant" />
        </div>
        <div
          class="flex items-center px-3 py-2 bg-purple-100 border rounded-md cursor-pointer  whitespace-nowrap hover:bg-purple-200 hover:border-purple-400"
          :class="showEurope ? 'border-purple-400' : 'border-gray-400'"
        >
          <label for="aus" class="pr-2 font-medium cursor-pointer"
            >Australia</label
          >
          <input id="aus" v-model="showAustralia" type="checkbox" name="aus" />
        </div>
        <div
          class="flex items-center px-3 py-2 bg-purple-100 border rounded-md cursor-pointer  whitespace-nowrap hover:bg-purple-200 hover:border-purple-400"
          :class="showEurope ? 'border-purple-400' : 'border-gray-400'"
        >
          <label for="oce" class="pr-2 font-medium cursor-pointer"
            >Oceania</label
          >
          <input id="oce" v-model="showOceania" type="checkbox" name="oce" />
        </div>
        <div
          class="flex items-center px-3 py-2 bg-purple-100 border rounded-md cursor-pointer  whitespace-nowrap hover:bg-purple-200 hover:border-purple-400"
          :class="showEurope ? 'border-purple-400' : 'border-gray-400'"
        >
          <label for="nam" class="pr-2 font-medium cursor-pointer"
            >North America</label
          >
          <input
            id="nam"
            v-model="showNorthAmerica"
            type="checkbox"
            name="nam"
          />
        </div>
        <div
          class="flex items-center px-3 py-2 bg-purple-100 border rounded-md cursor-pointer  whitespace-nowrap hover:bg-purple-200 hover:border-purple-400"
          :class="showEurope ? 'border-purple-400' : 'border-gray-400'"
        >
          <label for="sam" class="pr-2 font-medium cursor-pointer"
            >South America</label
          >
          <input
            id="sam"
            v-model="showSouthAmerica"
            type="checkbox"
            name="sam"
          />
        </div>
      </div>
    </div>
    <!-- filter container -->
    <div class="py-5">
      <label :for="searchUUID" class="sr-only">Zoeken</label>
      <input
        :id="searchUUID"
        v-model="searchInput"
        type="search"
        class="w-full px-4 py-1 border border-gray-300 rounded-md"
        placeholder="Zoeken..."
      />
    </div>
    <!-- search-wrapper -->
    <ul class="flex flex-wrap gap-4">
      <li
        v-for="country in filterByInput"
        :key="country.name"
        class="flex items-center gap-2 px-2 py-1 bg-gray-100 rounded-md"
      >
        <input
          :id="country.name"
          type="checkbox"
          :name="country.name"
          :value="country.name"
          @change="handleClick($event.target)"
        />
        <label :for="country.name" class="flex gap-2 whitespace-nowrap">
          <CountryFlag :name="country.name" :flag="country.flag" />
          <span :id="`${country.name}Label`">{{ country.name }}</span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import countries from '@/assets/countries.json'
import CountryFlag from '@/components/CountryFlag.vue'

export default {
  // http://localhost:8080/?Yemen=Yemen#
  name: 'CountryForm',
  components: { CountryFlag },
  data() {
    return {
      countries,
      searchInput: '',
      showEurope: false,
      showAfrica: false,
      showAsia: false,
      showAntartica: false,
      showAustralia: false,
      showOceania: false,
      showNorthAmerica: false,
      showSouthAmerica: false,
      continents: [
        'antartica',
        'asia',
        'africa',
        'australia',
        'europe',
        'northAmerica',
        'southAmerica',
        'oceania',
      ],
      selected: [],
      /* UUID */
      searchUUID: uuidv4(),
    }
  },
  computed: {
    filterContinent() {
      const toShow = []
      const continents = this.continents
      continents.forEach((continent) => {
        const capitalized = this.capitalize(continent)
        if (this[`show${capitalized}`]) toShow.push(continent)
      })
      return toShow
    },
    filterByContinent() {
      const countries = this.countries
      const continents = this.continents
      const result = []
      continents.forEach((continent) => {
        const capitalized = this.capitalize(continent)
        if (this[`show${capitalized}`]) {
          const showCountries = countries.filter((country) => {
            const countryContinents = country.continent.map((continent) => {
              return continent.toLowerCase()
            })
            return countryContinents.includes(continent.toLowerCase())
          })
          result.push(showCountries)
        }
      })
      if (result.length === 0) {
        return countries
      } else {
        const merged = [].concat.apply([], result)
        const unique = [...new Set(merged)]
        return unique
      }
    },
    filterByInput() {
      const countries = this.filterByContinent
      return countries.filter((country) => {
        const low = this.searchInput.toLowerCase()
        return country.name.toLowerCase().includes(low)
      })
    },
  },
  methods: {
    capitalize(string) {
      return `${string[0].toUpperCase()}${string.substr(1)}`
    },
    handleClick(e) {
      const [checked, value, countries] = [e.checked, e.value, this.countries]
      if (checked) {
        const countryObj = countries.find((country) => country.name === value)
        this.selected.push(countryObj)
      } else {
        this.remove(value)
      }
    },
    remove(country) {
      const selected = this.selected
      const index = selected.findIndex(
        (selectedCountry) => selectedCountry.name === country
      )
      selected.splice(index, 1)
    },
  },
}
</script>

<style lang="scss" scoped>
input[type='checkbox'] {
  position: relative;
  &::before {
    // checkbox
    content: '';
    display: block;
    position: absolute;
    width: 1rem;
    height: 1rem;
    top: 0;
    left: 0;
    border-radius: 3px;
    background: rgb(255, 255, 255);
  }
  &:checked::before {
    background: rgb(124, 58, 237);
  }
  &:checked::after {
    // check
    content: '';
    display: block;
    width: 5px;
    height: 10px;
    border: solid rgb(255, 255, 255);
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    position: absolute;
    top: 2px;
    left: 6px;
  }
}
</style>
