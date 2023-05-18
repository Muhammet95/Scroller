<template>
  <div class="navigation">
    <v-btn @click="$emit('clickedFirst')">Первая</v-btn>
    <v-text-field
        label="Введите номер строки"
        variant="solo"
        density="compact"
        v-model="index"
        class="input"
    ></v-text-field>
    <v-btn @click="$emit('clickedIndex', index)">Перейти</v-btn>
    <v-btn @click="$emit('clickedLast')">Последняя</v-btn>
  </div>
</template>

<script>
export default {
  name: "NavigationBlock",
  data () {
    return {
      index: 1
    }
  }
}
</script>

<style>
.navigation {
  border: 1px solid rgba(115, 115, 115, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  padding: 5px;
}
.v-input__details {
  display: none !important;
}
@media (max-width: 575px) {
  .navigation {
    flex-direction: column;

  }
  .navigation .input {
    width: 100%;
  }
}
</style>
