<template>
  <div
    :class="islinkHovered ? footerClass.hovered : footerClass.unHovered"
    class="animated slideInUp delay-1s"
  >
    <a
      @mouseover="isHovered"
      @mouseout="isHoveredOut"
      href="http://https://github.com/harshdave1041995/Personal-Website"
      target="_blank"
      class="footer-text"
      >{{ footer.text }}</a
    >
  </div>
</template>

<script>
export default {
  name: "Footer",
  namespaced: true,
  data() {
    return {
      islinkHovered: false,
      footer: {
        text: "Designed & Built By Harsh Dave"
      },
      footerClass: {
        unHovered: "footer-container",
        hovered: "footer-container-hovered"
      }
    };
  },
  methods: {
    isHovered() {
      this.islinkHovered = true;
    },
    isHoveredOut() {
      this.islinkHovered = false;
    }
  }
};
</script>

<style></style>
