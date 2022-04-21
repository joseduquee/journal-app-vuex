<template>
  <NavbarApp />
  <div class="d-flex">
      <div class="col-4">
          <EntryList />
      </div>
      <div>
          <router-view />
      </div>
  </div>
</template>

<script>

import { defineAsyncComponent } from 'vue'

export default {
      components: {
          NavbarApp: defineAsyncComponent(() => import('../components/NavbarApp.vue')),
          EntryList: defineAsyncComponent(() => import('../components/EntryList.vue'))
      }          
}
</script>

<style>

</style>