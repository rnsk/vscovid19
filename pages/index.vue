<template>
  <div class="MainPage">
    <cover class="my-2" />
    <page-header :icon="headerItem.icon" :title="headerItem.title" />
    <search-form />
    <search-map />
    <search-button />
    <data-card :items="searchData" />
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import Cover from '@/components/Cover.vue'
import DataCard from '@/components/DataCard.vue'
import SearchButton from '@/components/SearchButton.vue'
import SearchForm from '@/components/SearchForm.vue'
import SearchMap from '@/components/SearchMap.vue'
import sheetApi from '@/api/sheet'

export default {
  components: {
    PageHeader,
    Cover,
    DataCard,
    SearchButton,
    SearchForm,
    SearchMap
  },
  data () {
    return {
      searchData: [],
      headerItem: {
        icon: 'mdi-magnify',
        title: 'サービスを探す'
      }
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
