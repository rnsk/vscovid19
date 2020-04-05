<template>
  <div>
    <page-sub-header :icon="headerItem.icon" :title="headerItem.title" />
    <v-container>
      <v-row>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
          sm="6"
          class="pa-1"
        >
          <v-btn
            :color="item.color"
            :disabled="isActive(item.name)"
            class="white--text font-weight-bold"
            x-large
            depressed
            block
            @click="selectButton(item.name)"
          >
            {{ item.name }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PageSubHeader from '@/components/PageSubHeader.vue'

export default {
  components: {
    PageSubHeader
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      headerItem: {
        icon: 'mdi-city',
        title: '分野から探す'
      },
      industry: ''
    }
  },
  methods: {
    selectButton (industry) {
      this.industry = industry
      this.$emit('filterData', { results: this.industry })
    },
    isActive (industry) {
      return this.industry === industry
    }
  }
}
</script>
