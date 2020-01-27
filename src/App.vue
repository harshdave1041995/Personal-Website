<template>
  <div id="app">
    <LandingPage />
  </div>
</template>

<script>
import LandingPage from "@/views/LandingPage.vue";

var prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-15vh";
  }
  prevScrollpos = currentScrollPos;
};

export default {
  name: "app",
  namespaced: true,
  components: {
    LandingPage
  }
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100vh;
}
</style>
