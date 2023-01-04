<script setup>
    import { useRouter } from 'vue-router'

    const $rouet = useRouter()

    function to_token() {
        $rouet.push('/token')
    }

</script>


<template>

    <section class="bg-gray-900 text-white">
        <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div class="mx-auto max-w-3xl text-center">
                <h1
                    class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                    欢迎您来到OPcoin

                    <p class="sm:block"> 区块链之旅，从这里开始 </p>
                </h1>

                <p class="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
                    选择您所需要的功能,来开启您的web3世界
                </p>

                <div class="mt-8 flex flex-wrap justify-center gap-4">
                    <button
                        class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto">
                        查看区块链浏览器
                    </button>

                    <button @click="to_token"
                        class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto">
                        查看区块链Token
                    </button>
                </div>
            </div>
        </div>
    </section>

</template>


<style scoped>



</style>