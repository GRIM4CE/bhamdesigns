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
        src="https://bhamdesigns.imgix.net/headshot.webp?auto=compress"
        alt="Jon Leibham Headshot"
      />
      <p>
        Hi, my name is Jon Leibham and I'm a frontend developer. Lately, I've been building Design Systems(Vue, Storybook, Style Dictionary) and structuring Monorepos (Lerna, NX) to help support and enforce branding across large multi-application ecosystems. Tools I love to use for  code quality are Typescript, Vites/Jest, and A11y. I've worked in Vue/Nuxt for the last four or so years with some exposure to React though recently have been interested in all the new frameworks and runtimes :D. I also have experience working with Node in the filesystem for various needs (image compression, file generation, scaffolding). When I'm not living the dream at work coding, I love to hang out with my fiancé Juliette, grow vegetables (hot peppers and tomatoes), build/play synthesizers, and paint.
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