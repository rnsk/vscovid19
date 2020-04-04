<template>
  <div class="pageHeader">
    <h2 class="pageTitle">
      <v-icon size="30" class="mr-1">
        {{ icon }}
      </v-icon>
      {{ title }}
    </h2>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss">
.pageTitle {
  align-items: center;
  display: flex;
  font-size: 1.5rem;
  font-weight: normal;
  line-height: 1;
  margin: 0 0.5em 0 0;
  padding: 0 0 0.5em 0;
}
</style>
