<template>
  <div class="container">
    <navigation-block @clicked-first="clickedFirst" @clicked-last="clickedLast" @clicked-index="clickedIndex"/>
    <content-block :scroll-index="scrollTo"/>
  </div>
</template>

<script>
import ContentBlock from "@/components/ContentBlock";
import NavigationBlock from "@/components/NavigationBlock";

export default {
  name: "MainPage",
  components: {ContentBlock, NavigationBlock},
  data () {
    return {
      scrollTo: 0
    }
  },
  methods: {
    clickedFirst() {
      this.scrollTo = 1;
    },
    clickedLast() {
      this.scrollTo = 500;
    },
    clickedIndex(index) {
      this.scrollTo = index;
    }
  }
}
</script>

<style scoped>
.container {
  width: 900px;
  min-height: 100vh;
}
</style>
