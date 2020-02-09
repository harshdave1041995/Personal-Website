<template>
  <div
    id="navbar"
    :class="[scrollPosition > 40 ? navBarScrolled : navBar]"
    class="animated slideInDown delay-1s"
  >
    <a
      href="https://harshdave1041995.github.io"
      class="logo"
      @click="reloadPage"
    >
      <img class="logo-image" src="@/assets/website-logo_burned.png" alt="Logo" />
    </a>
    <div @click="toggleNavbar" class="toggle-navbar-icon">
      <img
        v-if="!showNav"
        src="@/assets/menu.svg"
        class="hamburger"
        alt="menu"
      />
      <img v-else src="@/assets/close.svg" class="close" alt="menu-close" />
    </div>
    <div :class="[showNav ? rightNavbarShow : rightNavbarHide]">
      <ol class="nav-links">
        <li v-for="(tab, index) in tabs" :key="index">
          <span class="counter">{{ tab.counter }}</span>
          <a
            @click="setFalse"
            v-scroll-to="tab.href"
            class="links"
            :href="tab.href"
            >{{ tab.text }}
          </a>
        </li>
      </ol>
      <div class="resume-container">
        <a
          @click="setFalse"
          class="resume"
          href="https://drive.google.com/file/d/1VqW6hM8SP7qII68HtRJXKVSPZ6zIoJy9/view?usp=sharing"
          target="_blank"
          >Resume</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  namespaced: true,
  data() {
    return {
      mouseOverLogo: false,
      scrollPosition: null,
      showNav: false,
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
    toggleNavbar() {
      this.showNav = !this.showNav;
    },
    setFalse() {
      this.showNav = false;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  }
};
</script>

<style></style>
