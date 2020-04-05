<template>
  <div>
    <page-sub-header :icon="headerItem.icon" :title="headerItem.title" />
    <v-text-field
      v-model="region"
      label="地域名を入力"
      clearable
      @keyup="selectRegion"
      @click:clear="clearRegion"
     ></v-text-field>
  </div>
</template>

<script>
import PageSubHeader from '@/components/PageSubHeader.vue'

export default {
  components: {
    PageSubHeader
  },
  data () {
    return {
      headerItem: {
        icon: 'mdi-map-marker',
        title: '地域で探す'
      },
      region: ''
    }
  },
  methods: {
    selectRegion () {
      this.$emit('filterData', { results: this.region })
    },
    clearRegion () {
      this.region = ''
      this.selectRegion()
    }
  }
}
</script>
