<script setup>
  import navcat from './components/nav_cat.vue'
  import navfooter from './components/nav_footer.vue'
  import { appconfig } from './sotres/appConfig.js'
  import { storeToRefs } from 'pinia'
  import { useRouter } from 'vue-router'
  import { ref, watch } from 'vue'
  const sotres = appconfig()
  let { appColor, cat_show } = storeToRefs(sotres)


  let home_router = ref(true)
  const $router = useRouter()
  let $router_url = ref($router.currentRoute)
  watch($router_url, (newv, oldv) => {
    console.log(newv.fullPath, oldv.fullPath)

    if (newv.fullPath == '/OPhome' || newv.fullPath == '/token') {
      const token = localStorage.getItem('username')
      if (token == 'admin') { home_router.value = false }
      else { $router.push('/') }


    }
    else { home_router.value = true }

    if (newv.fullPath == '/home') {
      sotres.taggerCat(0)
    }


  })





</script>


<template>
  <div>

    <navbar :data-theme="appColor? 'corporate':'halloween'" class="fixed top-0 z-10" v-show=home_router>
    </navbar>

    <navcat :data-theme="appColor? 'corporate':'halloween'" v-show='cat_show' v-if="home_router">
    </navcat>

    <router-view></router-view>
    <navfooter :data-theme="appColor? 'corporate':'halloween'" v-show=home_router>
    </navfooter>
  </div>
</template>


<style scoped>



</style>