<template>
  <div class="landing-page">
    <div>
      <NavBar />
    </div>
    <div class="content">
      <div v-if="screenWidth > 768" class="sidebars">
        <LeftSideBar class="left-side-bar"></LeftSideBar>
        <RightSideBar class="right-side-bar"></RightSideBar>
      </div>
      <div class="main-content">
        <MainContent />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import LeftSideBar from "@/components/sidebars/LeftSideBar.vue";
import RightSideBar from "@/components/sidebars/RightSideBar.vue";
import MainContent from "@/components/content/MainContent.vue";

export default {
  name: "LandingPage",
  namespaced: true,
  components: {
    NavBar,
    LeftSideBar,
    RightSideBar,
    MainContent
  },
  data() {
    return {
      screenWidth: null
    };
  },
  // computed() {
    
  // },
  mounted() {
    let screenWidth = window.innerWidth;
    this.screenWidth = screenWidth;
  }
};
</script>

<style />
