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
    }
  },
}
</script>

<template>
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">

        <div class="col-sm-6">
          <h1 v-if="title">
            <i :class="icon" v-if="icon"/>
            {{ title }}
          </h1>
        </div>

        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a>{{ title }}</a></li>
            <li class="breadcrumb-item active">{{ $store.getters.nameApp }}</li>
          </ol>
        </div>

      </div>
    </div>
  </section>

</template>