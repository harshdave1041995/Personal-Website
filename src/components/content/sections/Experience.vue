<template>
  <div class="experience-container">
    <div
      data-aos="fadeInUpBig"
      data-aos-offset="100"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-easing="ease-in"
      data-aos-anchor-placement="top-bottom"
      data-aos-once="true"
      class="section experience"
      id="experience"
    >
      <h3 class="section-heading">Where I've Worked</h3>
      <div class="experience-content">
        <div class="info-text">
          <ul class="company-list">
            <li
              v-for="(company, index) in companies"
              :key="index"
              @click="activeLink(index)"
            >
              <button
                :class="index === activeTab ? activeClass : inactiveClass"
              >
                {{ company.name }}
              </button>
            </li>
          </ul>
          <div class="company-info">
            <h4 class="company-title">
              <span>{{ companies[activeTab].description.position }}</span>
              <span
                ><span style="color: rgb(100, 255, 218)">&nbsp;@&nbsp;</span>
                <a
                  :href="companies[activeTab].description.link"
                  class="company-link"
                  >{{ companies[activeTab].description.companyName }}</a
                ></span
              >
            </h4>
            <div class="work-dates">
              {{ companies[activeTab].description.startDate }} -
              {{ companies[activeTab].description.lastDate }}
            </div>
            <ul class="work-details">
              <li
                v-for="(detail, index) in companies[activeTab].description
                  .details"
                :key="index"
                class="description-line"
              >
                {{ detail }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Experience",
  namespaced: true,
  data() {
    return {
      companies: [
        {
          name: "Ashutec",
          description: {
            position: "Software Engineer",
            companyName: "Ashutec Solutions",
            link: "https://www.ashutec.com/",
            startDate: "August 2019",
            lastDate: "Present",
            details: [
              "Write modern, performant, maintainable code for a diverse array of client and internal projects",
              "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Vue, React, and Firebase"
            ]
          }
        }
        // {
        //   name: "Ashutec",
        //   description: {
        //     position: "Software Engineer",
        //     companyName: "Ashutec Solutions",
        //     link: "https://www.ashutec.com/",
        //     startDate: "August 2019",
        //     lastDate: "Present",
        //     details: [
        //       "Write modern, performant, maintainable code for a diverse array of client and internal projects",
        //       "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Vue, React, and Firebase"
        //     ]
        //   }
        // },
        // {
        //   name: "Ashutec",
        //   description: {
        //     position: "Software Engineer",
        //     companyName: "Ashutec Solutions",
        //     link: "https://www.ashutec.com/",
        //     startDate: "August 2019",
        //     lastDate: "Present",
        //     details: [
        //       "Write modern, performant, maintainable code for a diverse array of client and internal projects",
        //       "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Vue, React, and Firebase"
        //     ]
        //   }
        // },
        // {
        //   name: "Ashutec",
        //   description: {
        //     position: "Software Engineer",
        //     companyName: "Ashutec Solutions",
        //     link: "https://www.ashutec.com/",
        //     startDate: "August 2019",
        //     lastDate: "Present",
        //     details: [
        //       "Write modern, performant, maintainable code for a diverse array of client and internal projects",
        //       "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Vue, React, and Firebase"
        //     ]
        //   }
        // },
        // {
        //   name: "Ashutec",
        //   description: {
        //     position: "Software Engineer",
        //     companyName: "Ashutec Solutions",
        //     link: "https://www.ashutec.com/",
        //     startDate: "August 2019",
        //     lastDate: "Present",
        //     details: [
        //       "Write modern, performant, maintainable code for a diverse array of client and internal projects",
        //       "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Vue, React, and Firebase"
        //     ]
        //   }
        // },
        // {
        //   name: "Ashutec",
        //   description: {
        //     position: "Software Engineer",
        //     companyName: "Ashutec Solutions",
        //     link: "https://www.ashutec.com/",
        //     startDate: "August 2019",
        //     lastDate: "Present",
        //     details: [
        //       "Write modern, performant, maintainable code for a diverse array of client and internal projects",
        //       "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Vue, React, and Firebase"
        //     ]
        //   }
        // }
      ],
      activeTab: 0,
      activeClass: "active-company",
      inactiveClass: "company"
    };
  },
  methods: {
    activeLink(clickedTab) {
      this.activeTab = clickedTab;
    }
  }
};
</script>

<style></style>
