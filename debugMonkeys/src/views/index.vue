<template>
  <div class="index" id="top">
    <div class="loader">Loading...</div>
    <contents />
    <mv />
  </div>
</template>

<script>
import Vue from "vue";
import VueHead from "vue-head";

import mv from "@/components/index_mv.vue";
import contents from "@/components/index_contents.vue";

Vue.use(VueHead);

export default {
  name: "index",
  components: {
    contents,
    mv
  },
  head: {
    title() {
      return {
        inner: "デバッグモンキーズ公式サイト",
        separator: "|",
        complement: "ボードゲーム販売中！"
      };
    },
    meta() {
      return [
        { name: "title", content: "デバッグモンキーズ公式サイト" },
        {
          name: "description",
          content:
            "デバッグモンキーズは東京と福岡で活動しているボードゲーム制作団体です。ボードゲームを作っては、猿のようにデバッグをし続ける団体です。ここでは作ったゲームについてさまざまな発信を行います。"
        },
        {
          name: "keywords",
          content: "デバッグモンキーズ,デバモン,ボードゲーム"
        },
        {
          property: "og:title",
          content: "デバッグモンキーズ公式サイト | ボードゲーム販売中！"
        },
        { property: "og:type", content: "website" },
        {
          property: "og:description",
          content:
            "デバッグモンキーズは東京と福岡で活動しているボードゲーム制作団体です。ボードゲームを作っては、猿のようにデバッグをし続ける団体です。ここでは作ったゲームについてさまざまな発信を行います。"
        },
        {
          property: "og:site_name",
          content: "デバッグモンキーズ公式サイト"
        },
        {
          property: "og:image",
          content: "https://debugmonkeys.netlify.app/ogp.png"
        },
        { name: "twitter:site", content: "@debug_monkeys" },
        { name: "twitter:card", content: "summary_large_image" }
      ];
    }
  },
  mounted() {
    let url = "https://debug-monkeys.com/";
    if (window.location.hash) {
      url += window.location.hash;
    }
    window.location.href = url;
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
