<template>
  <div class="content">
    <div class="loader" v-if="loading">
      <v-progress-circular
          :size="70"
          :width="7"
          color="purple"
          indeterminate
      ></v-progress-circular>
    </div>
    <div v-else v-for="item in items" :key="item.id">
      <div :id="'item_' + item">{{ item }}. Dynamic item</div>
    </div>
  </div>
</template>

<script>
import Data from '../js/data';
export default {
  name: "ContentBlock",
  data () {
    return {
      items: [],
      loading: true,
    }
  },
  props: {
    scrollIndex: Number
  },
  watch: {
    scrollIndex: function () {
      document.querySelector('#item_'+this.scrollIndex).scrollIntoView({behavior: 'smooth'});
    }
  },
  mounted() {
    window.addEventListener('load', async () => {
      const data = new Data(500);
      await data.init();
      this.items = data.get();
      this.loading = false;
    })
  },
}
</script>

<style scoped>
.content {
  border: 1px solid rgba(200, 200, 200, 1);
  height: 600px;
  overflow-y: scroll;
}
.list > div {
  transition-property: padding-top, padding-bottom;
  transition-duration: 1s;
}
.loader {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
