<template>
  <div class="container">
    <header class="header">
      <div class="header-imgbox">
        <img
          class="header-imgbox_content"
          src="https://pbs.twimg.com/profile_images/1121918283446247424/ZRgtg7CP_400x400.png"
          alt=""
        />
      </div>
      <h1 class="header-h1">リリオ</h1>
      <h2 class="header-h2">ririo08</h2>
    </header>
    <main>
      リリオさんの自己紹介をしましょう。
      <p class="main-content">ゲーム実況者兼ストリーマーです。</p>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
body {
  margin: auto;
  background-color: #faf1eb;
}
.container {
  max-inline-size: 600px;
  inline-size: 100%;
  margin: auto;
}

.header {
  margin-block-start: 100px;
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

main {
  margin-block-start: 50px;
}

.main-content {
  line-height: 1.7em;
}
</style>
