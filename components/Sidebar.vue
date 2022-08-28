<script setup lang="ts">
const isActive = ref(false)
const media = [
  {
    name: 'email',
    link: 'mailto:jleibham@gmail.com',
  },
    {
    name: 'github',
    link: 'https://github.com/GRIM4CE',
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/jon-leibham-a29b93105/',
  }
]

const toggleSidebar = () => isActive.value = !isActive.value
</script>

<template>
  <aside class="sidebar" :class="{ active: isActive }">
    <div
      class="sidebar-tab"
      tabindex="0"
      @keyup.enter="toggleSidebar"
      @click="toggleSidebar"
    >
      <DIcon class="sidebar-tab-icon" name="menu" />
    </div>
    <DImg
      width="302"
      height="189"
      class="sidebar-headshot"
      src="https://bhamdesigns.imgix.net/headshot.webp?auto=compress"
      alt="Jon Leibham Headshot"
    />
    <p>
      Hi, my name is Jon Leibham and I'm a frontend developer. Lately, I've been building Design Systems(Vue, Storybook, Style Dictionary) and structuring Monorepos (Lerna, NX) to help support and enforce branding across large multi-application ecosystems. Tools I love to use for  code quality are Typescript, Vites/Jest, and A11y. I've worked in Vue/Nuxt for the last four or so years with some exposure to React though recently have been interested in all the new frameworks and runtimes :D. I also have experience working with Node in the filesystem for various needs (image compression, file generation, scaffolding). When I'm not living the dream at work coding, I love to hang out with my fiancé Juliette, grow vegetables (hot peppers and tomatoes), build/play synthesizers, and paint.
    </p>

    <ul class="sidebar-media-list">
      <li
        v-for="({ name, link }, i) in media"
        :key="i"
        class="sidebar-media-li"
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