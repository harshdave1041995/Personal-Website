<template>
  <div class="about-container">
    <div
      data-aos="fadeInUpBig"
      data-aos-offset="100"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-easing="ease-in"
      data-aos-anchor-placement="top-bottom"
      data-aos-once="true"
      class="section about"
      id="about"
    >
      <h3 class="section-heading">About Me</h3>
      <div class="about-content">
        <div class="info-text">
          <p class="p1">
            Hello! I'm Harsh, a software engineer based in Ahmedabad, who enjoys
            building things that live on the internet. I develop websites and
            web apps that provide intuitive, pixel-perfect user interfaces with
            efficient and modern backends.
          </p>
          <p class="p2">
            Shortly after graduating from
            <a href="https://www.gtu.ac.in" target="_blank" id="university-link"
              >Gujarat Technological University</a
            >
            I joined the development team at
            <a href="https://www.ashutec.com/" target="_blank" id="company-name"
              >Ashutec Solutions</a
            >, where I work on a wide variety of interesting and meaningful
            projects on a daily basis.
          </p>
          <p class="list-heading">
            Here are a few technologies I've been working with recently:
          </p>
          <ul class="skill-grid">
            <li v-for="(skill, index) in skills" :key="index" class="skill">
              {{ skill }}
            </li>
          </ul>
        </div>
        <div class="info-pic">
          <a href="https://www.github.com/harshdave1041995" target="_blank">
            <div class="pic-container"></div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  namespaced: true,
  data() {
    return {
      skills: [
        "JavaScript (ES6+)",
        "HTML & (S)CSS",
        "React",
        "Vue",
        "Node.js",
        "Express",
        "MongoDB",
        "NativeScript"
      ]
    };
  }
};
</script>

<style></style>
