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
    link: {
      type: [String, Object],
      default: null
    }
  }
}
</script>


<template>

  <li class='nav-header' v-if="title">{{ title }}</li>

  <li class='nav-item'>
    <router-link class='nav-link'  :to='link'>
      <i class='nav-icon' :class='icon' v-if='icon' ></i>
      <p><slot/></p>
    </router-link>
  </li>

</template>