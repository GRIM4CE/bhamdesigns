<script setup lang="ts">
import { profile } from '~~/shared/data/profile'

const isActive = ref(false)

const media = [
  { name: 'email', label: `Email ${profile.name}`, link: `mailto:${profile.email}` },
  { name: 'github', label: `${profile.name} on GitHub`, link: profile.github },
  { name: 'linkedin', label: `${profile.name} on LinkedIn`, link: profile.linkedin },
]

const toggleSidebar = () => {
  isActive.value = !isActive.value
}
</script>

<template>
  <aside
    id="profile-panel"
    class="sidebar"
    :class="{ active: isActive }"
  >
    <!-- A real button gets Enter *and* Space, focusability, and the button role
         for free; the previous div[role=button] only handled Enter. -->
    <button
      class="sidebar-tab"
      type="button"
      aria-label="Toggle profile panel"
      aria-controls="profile-panel"
      :aria-expanded="isActive"
      @click="toggleSidebar"
    >
      <DIcon
        class="sidebar-tab-icon"
        name="menu"
      />
    </button>
    <DImg
      class="sidebar-headshot"
      src="/headshot.webp"
      alt="Jon Leibham headshot"
      :width="302"
      :height="189"
    />
    <p>
      Hi, my name is Jon Leibham and I'm a frontend developer. Lately, I've been building Design Systems(Vue, Storybook, Style Dictionary) and structuring Monorepos (Lerna, NX) to help support and enforce branding across large multi-application ecosystems. Tools I love to use for  code quality are Typescript, Vites/Jest, and A11y. I've worked in Vue/Nuxt for the last four or so years with some exposure to React though recently have been interested in all the new frameworks and runtimes :D. I also have experience working with Node in the filesystem for various needs (image compression, file generation, scaffolding). When I'm not living the dream at work coding, I love to hang out with my fiancé Juliette, grow vegetables (hot peppers and tomatoes), build/play synthesizers, and paint.
    </p>

    <ul class="sidebar-media-list">
      <li
        v-for="{ name, label, link } in media"
        :key="name"
        class="sidebar-media-li"
      >
        <a
          class="sidebar-media-link"
          :href="link"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="label"
          :tabindex="isActive ? 0 : -1"
        >
          <DIcon :name="name" />
        </a>
      </li>
    </ul>
  </aside>
</template>
