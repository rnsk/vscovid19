<template>
  <div>
    <page-sub-header :icon="headerItem.icon" :title="headerItem.title" />
    <v-text-field
      v-model="keyword"
      label="検索ワードを入力"
      clearable
      @keyup="inputKeyword"
      @click:clear="clearKeyword"
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
        icon: 'mdi-format-text',
        title: 'キーワードで探す'
      },
      keyword: ''
    }
  },
  methods: {
    inputKeyword () {
      this.$emit('filterData', { results: this.keyword })
    },
    clearKeyword () {
      this.keyword = ''
      this.inputKeyword()
    }
  }
}
</script>
