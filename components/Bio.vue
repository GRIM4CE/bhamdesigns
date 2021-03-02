<script>
export default {
  data() {
    return {
      isActive: false,
      media: [
        {
          name: 'email',
          link: 'mailto:jleibham@gmail.com',
        },
        {
          name: 'instagram',
          link: 'https://www.instagram.com/g_r_i_m_a_c_e/?hl=en',
        },
        {
          name: 'linkedin',
          link: 'https://www.linkedin.com/in/jon-leibham-a29b93105/',
        },
        // {
        //   name: ['fab', 'github'],
        //   link: 'https://github.com/GRIM4CE',
        // },
        // {
        //   name: ['fab', 'npm'],
        //   link: 'https://www.npmjs.com/~grim4ce',
        // },
        // {
        //   name: ['fab', 'stack-overflow'],
        //   link: 'https://stackoverflow.com/users/3561677/jleibham',
        // },
      ],
    }
  },
  methods: {
    toggleBio() {
      this.isActive = !this.isActive
    },
  },
}
</script>

<template lang="html">
  <aside class="sidebar" :class="{ active: isActive }">
    <div class="sidebar-tab" @click="toggleBio">
      <DIcon class="sidebar-tab-icon" name="menu" />
    </div>
    <div class="sidebar-bio-content">
      <img
        width="400"
        height="200"
        class="sidebar-bio-headshot"
        src="/img/headshot.jpg"
        alt="Jon Leibham Headshot"
      />
      <p>
        Jon Leibham is a Milwauke-based Frontend Architect. He primarily works
        with Node, Vue, Nuxt, Vuex, Apollo, JS(ES6) Typescript, and SCSS but has
        used many other language and libraries over the years. He takes pride in
        staying sharp, always looking to learn a new skill. When he's not locked
        in the void, he enjoys cooking, oil painting, caring for plants, camping
        & indulging in whatever his great city has to offer.
      </p>
    </div>

    <ul class="sidebar-media-list">
      <li
        v-for="({ name, link }, i) in media"
        :key="i"
        class="sidebar-media-list-item"
      >
        <a class="sidebar-media-link" :href="link" target="_blank">
          <DIcon :name="name" />
        </a>
      </li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
.sidebar-tab {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  top: 2rem;
  right: -50px;
  width: 50px;
  height: 130px;
  transition: background-color 0.5s ease-in;
  background-color: $primary400;
  cursor: pointer;

  &:hover {
    background-color: $secondary400;
  }
}

.sidebar {
  display: none;
  position: fixed;
  transform: translateX(-350px);
  top: 65px;
  width: 350px;
  height: calc(100vh - 65px);
  background-color: rgba($black, 0.98);
  z-index: 2;
  transition: transform 0.8s;

  &.active {
    transform: translateX(0);

    .sidebar-tab {
      background-color: $secondary400;
    }
  }

  @include desktop {
    display: initial;
  }
}

.sidebar-tab-icon {
  color: $white;
  font-size: 24px;
}

.sidebar-bio-content {
  padding: 1.5rem;
  color: $white;
  font-weight: 300;
}

.sidebar-bio-headshot {
  max-width: 100%;
  border-radius: 2px;
}

.sidebar-media-list {
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem 2rem;
  justify-content: space-around;
}

.sidebar-media-link {
  color: $white;
  font-size: 18px;

  &:hover {
    color: $secondary400;
  }
}
</style>
