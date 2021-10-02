<template>
  <div class="travel-stats">
    <div class="flex gap-4">
      <h3 class="text-lg font-bold">{{ title }}</h3>
      <span class="text-lg font-semibold">
        <span>{{ visited }}</span
        >/<span>{{ total }}</span>
      </span>
      <span class="text-lg font-bold">5.42%</span>
    </div>
    <ul class="flex gap-4">
      <li
        ><span role="img" aria-label="some country" title="some country"
          >🇹🇴</span
        ></li
      >
      <li
        ><span role="img" aria-label="some country" title="some country"
          >🇹🇿</span
        ></li
      >
      <li
        ><span role="img" aria-label="some country" title="some country"
          >🇺🇸</span
        ></li
      >
      <li
        ><span role="img" aria-label="some country" title="some country"
          >🇹🇯</span
        ></li
      >
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TravelStats',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      visited: 10,
      total: 20,
    }
  },
}
</script>

<style lang="scss" scoped></style>
