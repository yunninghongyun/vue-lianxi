<template>
  <div class="home">
    <Header />
    <div class="home-main">
      <Router-view></Router-view>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
export default {
  name: "home",
  components: {
    Header
  }
};
</script>

<style>
.home {
  /* display: flex; */
  /* justify-content: space-between; */
}
.home-main {
  margin: 0 auto;
  width: 80%;
}
</style>
