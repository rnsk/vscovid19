<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <cover class="my-2" />
      <search-form />
      <search-map />
      <search-button />
      <data-card />
    </v-flex>
  </v-layout>
</template>

<script>
import Cover from '@/components/Cover.vue'
import DataCard from '@/components/DataCard.vue'
import SearchButton from '@/components/SearchButton.vue'
import SearchForm from '@/components/SearchForm.vue'
import SearchMap from '@/components/SearchMap.vue'
import sheetApi from '@/api/sheet'

export default {
  components: {
    Cover,
    DataCard,
    SearchButton,
    SearchForm,
    SearchMap
  },
  data () {
    return {
      searchData: []
    }
  },
  created () {
    this.getSearchData()
  },
  methods: {
    async getSearchData () {
      this.searchData = await sheetApi.getData()
    }
  }
}
</script>
