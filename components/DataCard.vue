<template>
  <v-row>
    <v-col v-for="(item, i) in items" :key="i" cols="12" xs="6">
      <v-card>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="headline">{{ item.名称 }}</v-list-item-title>
            <v-list-item-subtitle>最終更新日：{{ item.最終更新日 }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-card-text>
          <v-chip-group
            column
          >
            <v-chip>{{ item.分野 }}</v-chip>
            <v-chip>{{ item.対象者 }}</v-chip>
            <v-chip>{{ item.対象地域 }}</v-chip>
            <v-chip>{{ item.分類 }}</v-chip>
            <v-chip>{{ item.費用 }}</v-chip>
            <v-chip v-if="item.導入支援=='有'" color="green" text-color="white">導入支援</v-chip>
          </v-chip-group>
        </v-card-text>
        <v-card-title>内容</v-card-title>
        <v-card-text>{{ item.内容 }}</v-card-text>
        <v-card-text>{{ item.開始日 }}〜{{ item.終了日 }}</v-card-text>
        <v-card-title>問い合わせ先</v-card-title>
        <v-card-text>
            {{ item.提供者 }}
            {{ item.問い合わせ先 }}
            {{ item.url }}
        </v-card-text>
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
