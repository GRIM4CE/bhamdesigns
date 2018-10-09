<template lang="html">
  <aside class="sidebar" :class="{ active: isActive }">
    <div class="sidebar-tab" @click="toggleBio">
      <fa class="sidebar-tab-icon" icon="bars"/>
    </div>
    <div class="sidebar-bio-content">
      <img class="sidebar-bio-headshot" src="../assets/headshot.jpg" alt="Jon Leibham Headshot">
      <p>Jon Leibham is a Chicago-based freelance Graphic/Web Designer. He has worked on many things great and small. He takes pride in staying sharp, always looking to learn a new skill. He primarily works as UX/UI front-end web designer but has taken on many other roles over the years. His workflow takes place mainly in a node.js environment allowing him to deliver compressed, clean, and correct code to client or team. When he's not locked in the void, he enjoys camping, cooking, painting, and listening to music.</p>
    </div>

    <ul class="sidebar-media-list">
      <li class="sidebar-media-list-item" v-for="({icon, link}, index) in media">
        <a class="sidebar-media-link" :href="link" target="_blank">
          <fa :icon="icon"/>
        </a>
      </li>
    </ul>

  </aside>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      media: [{
        icon: 'envelope',
        link: 'mailto:jleibham@gmail.com',
      }, {
        icon: ['fab', 'linkedin-in'],
        link: 'https://www.linkedin.com/in/jon-leibham-a29b93105/',
      }, {
        icon: ['fab', 'github'],
        link: 'https://github.com/GRIM4CE',
      }, {
        icon: ['fab', 'npm'],
        link: 'https://www.npmjs.com/~grim4ce',
      }, {
        icon: ['fab', 'stack-overflow'],
        link: 'https://stackoverflow.com/users/3561677/jleibham',
      }],
    }
  },
  methods: {
    toggleBio() {
      this.isActive = !this.isActive
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../sass/variables.scss';

.sidebar {
    display: none;
    position: fixed;
    transform: translateX(-350px);
    top: 65px;
    width: 350px;
    height: calc(100vh - 65px);
    background-color: rgba($black, .98);
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
