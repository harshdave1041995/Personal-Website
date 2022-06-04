<template>
  <div class="right-side-bar animated fadeInRight">
    <div class="right-side-bar-container">
      <div class="vertical-sidebar-line" />
      <a href="mailto:harshdave1094@gmail.com" class="sidebar-mail-link">{{
          emailId
      }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RightSideBar",
  namespaced: true,
  data() {
    return {
      emailId: "harshdave1094@gmail.com"
    };
  }
};
</script>

<style>
</style>
