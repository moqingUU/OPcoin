<template>
  <div :data-theme="appColor? 'corporate':'halloween'">
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl  lg:px-8">
      <div>
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl" :data-theme="appColor? 'corporate':'halloween'">Web3.0
          概念的起源和发展
        </h2>
        <p class="mt-4" :data-theme="appColor? 'corporate':'halloween'">Web3.0，也称 Web3，一言以蔽之——是互联网的下一个时代，也称未来互联网。 人们对于
          Web3.0 的构想，是一个相对去中心化 IT
          架构、分布式技术所支持的访问模式，以业务数据价值回归为前提的自动化、智能化的全新互联网世界。我们的每一个互动都应该被记录并且量化，并且更多的参与到数据价值链当中去。这需要包括区块链、人工智能和加密算法在内的多项技术的共同探索。
        </p>

      </div>

      <homefooter></homefooter>

    </div>

  </div>

</template>

<script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  import homefooter from './home_footer.vue'
  import moment from 'moment'
  import { appconfig } from '../../sotres/appConfig.js'
  import { storeToRefs } from 'pinia'
  const sotres = appconfig()
  const { appColor } = storeToRefs(sotres)
  const time = ref(moment().format('YYYY-MM-DD HH:mm:ss'))


  //每秒刷新一次
  setInterval(() => {
    time.value = moment().format('YYYY-MM-DD HH:mm:ss')
  }, 1000)





  const web3_data = ref([])
  //axios 请求数据
  axios.get('http://1aa549a7.r2.cpolar.cn/api/data').then(res => {
    web3_data.value = res.data.data
    return web3_data.value
  })



</script>