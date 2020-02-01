<template>
  <div id="app">
    <LandingPage />
    <Footer />
  </div>
</template>

<script>
import LandingPage from "@/views/LandingPage.vue";
import Footer from "@/views/Footer";

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
    LandingPage,
    Footer
  }
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100vh;
}
</style>
