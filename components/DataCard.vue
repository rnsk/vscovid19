<template>
  <v-layout>
    <v-card v-for="(item, i) in items" :key="i">
      <v-row>
        <v-col cols="12" sm="6">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-0">最終更新日：{{ item.最終更新日 }}</div>
              <v-list-item-title class="headline">{{ item.名称 }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.提供者 }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card-text class="text-right">
            <v-btn
              class="white--text font-weight-bold"
              depressed
              color="blue-grey lighten-1"
            >
              {{ item.分野 }}
            </v-btn>
          </v-card-text>
        </v-col>
      </v-row>
      <v-card-text>
        <v-chip-group
          column
        >
          <v-chip color="black" text-color="white">{{ item.対象者 }}</v-chip>
          <v-chip color="blue" text-color="white">{{ item.対象地域 }}</v-chip>
          <v-chip color="red" text-color="white">{{ item.分類 }}</v-chip>
          <v-chip color="orange" text-color="white">{{ item.費用 }}</v-chip>
          <v-chip v-if="item.導入支援=='有'" color="green" text-color="white">導入支援</v-chip>
        </v-chip-group>
        <v-row>
          <v-col cols="12" md="6">
            <div class="mt-4 mb-2"><page-sub-header icon="mdi-text-box-outline" title="内容" /></div>
            <div class="output">{{ item.内容 }}</div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="mt-4 mb-2"><page-sub-header icon="mdi-calendar-text-outline" title="期間" /></div>
            <div>{{ item.開始日 }}〜{{ item.終了日 }}</div>
            <div class="mt-4 mb-2"><page-sub-header icon="mdi-email-outline" title="問い合わせ先" /></div>
            <div class="output">{{ item.問い合わせ先 }}
                {{ item.url }}</div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-layout>
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
  }
}
</script>

<style>
.output {
  white-space: pre-line;
  word-wrap: break-word;
}
</style>
