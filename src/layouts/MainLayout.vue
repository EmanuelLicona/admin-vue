<script>
import NavBar from './inc/NavBar.vue'
import SideBar from './inc/SideBar.vue'
import FooterItem from './inc/FooterItem.vue'

export default {
  components: {
    NavBar,
    SideBar,
    FooterItem,
  }
}
</script>

<template>
  <div class="wrapper">
    <NavBar />

    <SideBar />

    <div class="content-wrapper">
      <router-view />
    </div>

    <FooterItem  />
  </div>

</template>