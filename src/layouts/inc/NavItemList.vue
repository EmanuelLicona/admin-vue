<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    listLink: {
      type: [Object],
      default: null
    }
  },
}
</script>


<template>

  <li class='nav-header' v-if="title">{{ title }}</li>

  <li class='nav-item'>
    <a class='nav-link'>
      <i class='nav-icon' :class='icon' v-if='icon'></i>
      <p>
        <slot />
        <i class='right fas fa-angle-left'></i>
      </p>
    </a>

    <ul class='nav nav-treeview'>
      <li class='nav-item' v-for="item in listLink" :key="item.name">
        <router-link :to="item.link" class="nav-link">
          <i class='far fa-circle nav-icon'></i>
          <p>{{ item.name }}</p>
        </router-link>
      </li>
    </ul>
  </li>

</template>

<style scoped>

</style>