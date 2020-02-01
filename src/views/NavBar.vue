<template>
  <div
    id="navbar"
    :class="[scrollPosition > 50 ? navBarScrolled : navBar]"
    class="animated slideInDown delay-1s"
  >
    <a
      href="https://harshdave1041995.github.io"
      class="logo"
      @click="reloadPage"
    >
      <img class="logo-image" src="@/assets/website-logo.png" alt="Logo" />
    </a>
    <!-- <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96"><title>Logo</title><g id="Logo" transform="translate(-8.000000, -2.000000)"><g transform="translate(11.000000, 5.000000)"><path d="M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z" fill="#64FFDA"></path><polygon id="Shape" stroke="#64FFDA" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" points="39 0 0 22 0 67 39 90 78 68 78 23"></polygon></g></g></svg> -->
    <div class="right-nav-bar">
      <ol class="nav-links">
        <li v-for="(tab, index) in tabs" :key="index">
          <span class="counter">{{ tab.counter }}</span>
          <a v-scroll-to="tab.href" class="links" :href="tab.href">{{
            tab.text
          }}</a>
        </li>
      </ol>
      <div class="resume-container">
        <a class="resume" href="#resume">Resume</a>
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
      navBar: "nav-bar",
      navBarScrolled: "nav-bar-scrolled",
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
    }
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  }
};
</script>

<style></style>
