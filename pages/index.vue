<script lang="ts" setup>
import { links } from "assets/links"
</script>

<template>
  <div class="container">
    <header class="header">
      <div class="header-imgbox">
        <img class="header-imgbox_content" src="ririo.png" alt="犬のアイコン" />
      </div>
      <h1 class="header-h1">リリオ</h1>
      <h2 class="header-h2">ririo08</h2>
    </header>
    <main>
      <div class="main">
        <p class="main-content">リリオさんの自己紹介をしましょう。</p>
        <p class="main-content">ゲーム実況者兼ストリーマーです。</p>
        <div v-for="profiles of links">
          <h3>{{ profiles.categoryName }}</h3>
          <ul class="listBox">
            <li v-for="profile of profiles.contents" class="listBox-container">
              <div class="listBox-container_img">
                <img :src="profile.imageUrl" alt="" />
              </div>
              <div class="listBox-container_text">
                <a
                  class="link"
                  :href="profile.url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ profile.linkName }}
                </a>
                <p class="url">{{ profile.url }}</p>
                <p class="detail">
                  {{ profile.detail }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-inline-size: 100%;
  inline-size: 100%;
  margin: auto;
  padding-left: 20px;
}

.header {
  margin-block-start: 100px;
  padding-right: 20px;
  &-imgbox {
    max-inline-size: 200px;
    inline-size: 80%;
    margin: auto;

    &_content {
      inline-size: 100%;
      border-radius: 25%;
    }
  }

  &-h1 {
    text-align: center;
    font-size: 1.5em;
    margin-block-end: 0;
  }
  &-h2 {
    text-align: center;
    font-size: 1.1em;
    margin-block-start: 0;
  }
}

.main {
  margin-block-start: 50px;
  inline-size: 100%;
  &-content {
    line-height: 1.7em;
    inline-size: 100%;
  }
}

.listBox {
  list-style-type: none;
  padding-left: 0;
  &-container {
    display: flex;
    flex: 1;
    &_img {
      width: 64px;
      margin-top: 5px;
      & img {
        width: 64px;
        border: 1px #ccc solid;
        border-radius: 5px;
      }
    }
    &_text {
      width: 100%;
      margin-left: 10px;
    }
  }
}

.link {
  font-size: 1.6rem;
  color: #ff9600;
}

.url {
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 0.8rem;
  color: #555;
  word-break: break-all;
}

.detail {
  font-size: 1rem;
  margin-top: 0;
  white-space: pre-wrap;
}

@media screen and (max-width: 767px) {
  .container {
    padding-left: 5px;
    padding-right: 5px;
  }
  .header {
    padding-right: 0;
  }
}
</style>
