<template>
  <nav class="pt-2">
    <ul class="flex column">
      <li>
        <nuxt-link class="flex align-center p-1" :to="'/'">
          <i class="fas fa-file-invoice-dollar" />
          <p>Statement</p>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="flex align-center p-1" :to="'/entries'">
          <i class="fas fa-comment-dollar" />
          <p>Entries</p>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="flex align-center p-1" :to="'/stock-screens'">
          <i class="fas fa-chart-line" />
          <p>Screens</p>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style lang="scss" scoped>
@import './assets/styles/colors.scss';

  nav {
    background-color: color(blue);

    ul {
      height: 100%;
      position: relative;

      li {
        width: 100%;

        a {
          color: color(white);
          text-decoration: none;
          font-size: 1.5em;

          &.nuxt-link-exact-active {
            background-color: color(white);
            color: color(blue);
          }

        }

        i {
          padding-right: 1rem;
        }

        &:hover,
        &.active {
          background-color: color(white);
          a {
            color: color(blue);
          }
        }
      }
    }
  }
</style>
