<template>
  <div class="detail" id="top">
    <div class="loader">Loading...</div>
    <contents />
  </div>
</template>

<script>
import Vue from "vue";
import VueHead from "vue-head";
import game from "@/data/game.json";

import contents from "@/components/detail_contents.vue";

Vue.use(VueHead);

export default {
  name: "index",
  components: {
    contents
  },
  created() {
    this.gameId = this.$route.params.id;
    this.game = game[this.gameId];
  },
  head: {
    title() {
      return {
        inner: `${this.game.title}`,
        separator: "｜",
        complement: "デバッグモンキーズ公式サイト"
      };
    },
    meta() {
      return [
        {
          name: "title",
          content: `${this.game.title}｜デバッグモンキーズ公式サイト`
        },
        {
          name: "description",
          content: `ボードゲーム「${this.game.title}」の紹介ページです。デバッグモンキーズは東京と福岡で活動しているボードゲーム制作団体です。ボードゲームを作っては、猿のようにデバッグをし続ける団体です。`
        },
        {
          name: "keywords",
          content: `${this.game.title},デバッグモンキーズ,デバモン,ボードゲーム`
        },
        {
          property: "og:title",
          content: `${this.game.title}｜デバッグモンキーズ公式サイト`
        },
        { property: "og:type", content: "website" },
        {
          property: "og:description",
          content: `ボードゲーム「${this.game.title}」の紹介ページです。デバッグモンキーズは東京と福岡で活動しているボードゲーム制作団体です。ボードゲームを作っては、猿のようにデバッグをし続ける団体です。`
        },
        {
          property: "og:site_name",
          content: "デバッグモンキーズ公式サイト"
        },
        {
          property: "og:image",
          content: `https://debugmonkeys.netlify.app/ogp_${this.gameId}.jpg`
        },
        { name: "twitter:site", content: "@debug_monkeys" },
        { name: "twitter:card", content: "summary_large_image" }
      ];
    },
    mounted() {
      let url = `https://debug-monkeys.com/detail/${this.gameId}`;
      if (window.location.hash) {
        url += window.location.hash;
      }
      window.location.href = url;
    }
  }
};
</script>

<style scoped lang="scss">
.loader,
.loader:before,
.loader:after {
  background: #ccc;
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
}
.loader {
  color: #ccc;
  text-indent: -9999em;
  margin: 88px auto;
  position: absolute;
  left: 50%;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  position: absolute;
  top: 0;
  content: "";
}
.loader:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 1.5em;
}
@-webkit-keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
@keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
</style>
