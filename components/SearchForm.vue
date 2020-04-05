<template>
  <div>
    <v-text-field
      v-model="keyword"
      label="検索ワード"
      prepend-icon="mdi-format-text"
      clearable
      @keyup="inputKeyword"
      @click:clear="clearKeyword"
     ></v-text-field>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
