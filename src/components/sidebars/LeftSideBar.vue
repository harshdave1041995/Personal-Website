<template>
  <div class="left-side-bar animated fadeInLeft">
    <div class="left-side-bar-container">
      <div class="vertical-sidebar-line" />
      <a
        v-for="(social, index) in socials"
        :key="index"
        :href="social.href"
        class="social-link"
      >
        <img
          class="social-image"
          :src="getSocialImage(social.name)"
          :alt="social.name"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftSideBar",
  namespaced: true,
  data() {
    return {
      socials: [
        {
          name: "Linkedin",
          image: "../../assets/linkedin.svg",
          href: "https://www.linkedin.com/in/coderhd95"
        },
        {
          name: "Twitter",
          image: "../../assets/twitter.svg",
          href: "https://twitter.com/harshdave1094"
        },
        {
          name: "Instagram",
          image: "../../assets/instagram.svg",
          href: "https://www.instagram.com/harshh.1995"
        },
        {
          name: "Github",
          image: "../../assets/github.svg",
          href: "https://github.com/harshdave1041995"
        }
      ]
    };
  },
  methods: {
    getSocialImage(name) {
      const image = require("@/assets/" + name.toLowerCase() + ".svg");
      return image;
    }
  }
};
</script>

<style>
</style>
