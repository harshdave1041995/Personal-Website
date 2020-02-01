<template>
  <div class="main-container">
    <Intro />
    <About />
    <Experience />
    <Projects />
    <Contact />
  </div>
</template>

<script>
import Intro from "./sections/Intro";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";


export default {
  name: "MainContent",
  namespaced: true,
  components: {
    Intro,
    About,
    Experience,
    Projects,
    Contact
  }
};
</script>

<style></style>
