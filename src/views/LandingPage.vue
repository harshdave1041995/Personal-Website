<template>
  <div class="landing-page">
    <div>
      <NavBar
        :navState="navbarState"
        v-click-outside="hideNavbar"
        @navbarToggled="navBarState($event)"
      />
    </div>
    <div class="content">
      <div v-if="screenWidth > 768" class="sidebars">
        <LeftSideBar class="left-side-bar"></LeftSideBar>
        <RightSideBar class="right-side-bar"></RightSideBar>
      </div>
      <div class="main-content">
        <MainContent @click="hideNavbar" />
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
      screenWidth: window.innerWidth,
      navbarState: null
    };
  },
  methods: {
    hideNavbar() {
      this.navbarState = false;
      document.body.style.overflowY = "auto";
    },
    navBarState(navbarState) {
      this.navbarState = navbarState;
    }
  }
  // computed: {
  //   renderSidebars: () => {
  //     return this.screenWidth > 768;
  //   }
  // },
  // created() {
  //   this.screenWidth = window.innerWidth;
  // },
  // mounted() {
  //   window.addEventListener("resize", () => {
  //     this.screenWidth = window.innerWidth;
  //     console.log(this.renderSidebars);
  //   });
  // }
};
</script>

<style />
