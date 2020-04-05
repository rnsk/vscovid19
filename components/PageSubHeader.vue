<template>
  <div class="pageSubHeader">
    <h3 class="pageSubTitle">
      <v-icon size="25" class="mr-1">
        {{ icon }}
      </v-icon>
      {{ title }}
    </h3>
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
.pageSubTitle {
  align-items: center;
  display: flex;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1;
  margin: 0;
  padding: 0;
}
</style>
