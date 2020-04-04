<template>
  <v-row>
    <v-col cols="12" xs="6" v-for="(item, i) in items" :key="i">
      <v-card>
        <v-card-title>{{ item.名称 }}</v-card-title>
        <v-card-text>{{ item.提供者 }}</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
