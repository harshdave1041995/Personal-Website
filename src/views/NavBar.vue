<template>
  <div id="navbar" :class="[scrollPosition > 40 ? navBarScrolled : navBar]" class="animated slideInDown delay-1s">
    <a href="https://harshdave1041995.github.io" class="logo" @click="reloadPage">
      <img class="logo-image" src="@/assets/website-logo_burned.png" alt="Logo" />
    </a>
    <div @click="toggleNavbar" class="toggle-navbar-icon">
      <img v-if="!navState" src="@/assets/menu.svg" class="hamburger" alt="menu" />
      <img v-else src="@/assets/close.svg" class="close" alt="menu-close" />
    </div>
    <div :class="[navState ? rightNavbarShow : rightNavbarHide]">
      <ol class="nav-links">
        <li v-for="(tab, index) in tabs" :key="index">
          <span class="counter">{{ tab.counter }}</span>
          <a @click="setFalse" v-scroll-to="tab.href" class="links" :href="tab.href">{{ tab.text }}
          </a>
        </li>
      </ol>
      <div class="resume-container">
        <a @click="setFalse" class="resume"
          href="https://drive.google.com/file/d/17Vm80dhi-dRRGkbU9U1t5QFOhsI_3GpA/view?usp=sharing" target="_blank">
          Resume
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  namespaced: true,
  props: ["navState"],
  data() {
    return {
      mouseOverLogo: false,
      scrollPosition: null,
      showNav: this.navState,
      navBar: "nav-bar",
      navBarScrolled: "nav-bar-scrolled",
      rightNavbarShow: "right-nav-bar-toggled",
      rightNavbarHide: "right-nav-bar",
      tabs: [
        {
          href: "#about",
          text: "About",
          counter: "01."
        },
        {
          href: "#experience",
          text: "Experience",
          counter: "02."
        },
        {
          href: "#projects",
          text: "Projects",
          counter: "03."
        },
        {
          href: "#contact",
          text: "Contact",
          counter: "04."
        }
      ]
    };
  },
  methods: {
    reloadPage() {
      window.location.reload();
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    setFalse() {
      this.showNav = false;
      document.body.style.overflowY = "auto";
      this.$emit("navbarToggled", this.showNav);
    },
    toggleNavbar() {
      this.showNav = !this.showNav;
      if (this.showNav === true) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
      this.$emit("navbarToggled", this.showNav);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  beforeUpdate() {
    this.showNav = this.navState;
  }
};
</script>

<style>
</style>
