<script setup lang="ts">
const isActive = ref(false)
const media = [
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
  //   name: 'github',
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
]

const toggleBio = () => isActive.value = !isActive.value
</script>

<template>
  <aside class="sidebar" :class="{ active: isActive }">
    <div
      class="sidebar-tab"
      tabindex="0"
      @keyup.enter="toggleBio"
      @click="toggleBio"
    >
      <DIcon class="sidebar-tab-icon" name="menu" />
    </div>
    <div class="sidebar-bio-content">
      <DImg
        width="302"
        height="189"
        class="sidebar-bio-headshot"
        fallback="jpeg"
        src="/img/headshot.webp"
        alt="Jon Leibham Headshot"
        load="lazy"
      />
      <p>
        Jon Leibham is a Milwaukee-based Frontend Architect. He primarily works
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
        <a
          class="sidebar-media-link"
          :href="link"
          target="_blank"
          :aria-label="name"
          rel="noreferrer"
          :tabindex="isActive ? 1 : -1"
        >
          <DIcon :name="name" />
        </a>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.sidebar {
  display: none;
}

@media all and (min-width: 62.5rem) {
  .sidebar {
    display: initial;
    position: fixed;
    transform: translateX(-350px);
    top: 65px;
    width: 350px;
    height: calc(100vh - 65px);
    background-color: var(--black-98);
    z-index: 2;
    transition: transform 0.8s;
  }

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
    background-color: var(--primary400);
    cursor: pointer;
  }

  .sidebar-tab-icon {
    color: var(--white);
    font-size: 24px;
  }

  .sidebar-bio-content {
    padding: 1.5rem;
    color: var(--white);
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
    color: var(--white);
    font-size: 18px;
  }

  .sidebar-media-link:hover {
    color: var(--secondary400);
  }

  .sidebar-tab:hover {
    background-color: var(--secondary400);
  }

  .sidebar.active {
    transform: translateX(0);
  }

  .sidebar.active .sidebar-tab {
    background-color: var(--secondary400);
  }
}
</style>
