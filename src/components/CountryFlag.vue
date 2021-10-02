<template>
  <span class="country-flag" role="img" :aria-label="name" :title="name">{{
    flag
  }}</span>
</template>

<script>
export default {
  name: 'CountryFlag',
  props: {
    name: {
      type: String,
      required: true,
    },
    flag: {
      type: String,
      required: true,
    },
  },
}
</script>
