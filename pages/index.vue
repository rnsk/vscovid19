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
      const filtered = []
      for (const i in this.searchItems) {
        const item = this.searchItems[i]
        if (~item.名称.toLowerCase().indexOf(this.searchTerms.keyword)) {
          filtered.push(item)
        }
        if (item.分野 === this.searchTerms.industry) {
          filtered.push(item)
        }
        if (~item.対象地域.toLowerCase().indexOf(this.searchTerms.region)) {
          filtered.push(item)
        }
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
