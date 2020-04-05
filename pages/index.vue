<template>
  <div class="MainPage">
    <cover class="my-2" />
    <page-header :icon="headerItem.icon" :title="headerItem.title" />
    <v-row class="mb-3">
      <v-col cols="12" md="6">
        <search-form @filterData="onKeywordFilter" />
        <search-button :items="buttonItems" @filterData="onIndustryFilter" />
      </v-col>
      <v-col cols="12" md="6">
        <search-map @filterData="onRegionFilter" />
      </v-col>
    </v-row>
    <data-card v-if="filteredItems" :items="filteredItems" />
    <pulse-loader :loading="isLoading" color="#808080" />
  </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import PageHeader from '@/components/PageHeader.vue'
import Cover from '@/components/Cover.vue'
import DataCard from '@/components/DataCard.vue'
import SearchButton from '@/components/SearchButton.vue'
import SearchForm from '@/components/SearchForm.vue'
import SearchMap from '@/components/SearchMap.vue'
import sheetApi from '@/api/sheet'

export default {
  components: {
    PulseLoader,
    PageHeader,
    Cover,
    DataCard,
    SearchButton,
    SearchForm,
    SearchMap
  },
  data () {
    return {
      headerItem: {
        icon: 'mdi-magnify',
        title: 'サービスを探す'
      },
      searchTerms: {
        keyword: '',
        industry: '',
        region: ''
      },
      searchItems: [],
      buttonItems: [],
      isLoading: true
    }
  },
  computed: {
    filteredItems () {
      return this.filterData()
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData () {
      this.searchItems = await sheetApi.getData()
      this.buttonItems = await sheetApi.getButtons()
      this.isLoading = false
    },
    filterData () {
      let filtered = []
      const searchTerms = this.searchTerms
      // キーワード
      if (searchTerms.keyword !== '') {
        filtered = this.searchItems.filter(function (row) {
          return row['名称'].toLowerCase().includes(searchTerms.keyword)
        })
      }
      // 分野
      if (searchTerms.industry !== '') {
        filtered = this.searchItems.filter(function (row) {
          return row['分野'] === searchTerms.industry
        })
      }
      // 地域
      if (searchTerms.region !== '') {
        filtered = this.searchItems.filter(function (row) {
          return row['対象地域'].toLowerCase().includes(searchTerms.region)
        })
      }

      return filtered
    },
    onKeywordFilter ({ results }) {
      this.searchTerms.keyword = results
    },
    onIndustryFilter ({ results }) {
      this.searchTerms.industry = results
    },
    onRegionFilter ({ results }) {
      this.searchTerms.region = results
    }
  }
}
</script>
