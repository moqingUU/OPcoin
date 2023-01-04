<script setup>

    import { ref } from 'vue'


    import registerForm from '../components/user/register.vue'
    import loginForm from '../components/user/login.vue'
    import { appconfig } from '../sotres/appConfig.js'
    import { storeToRefs } from 'pinia'
    const sotres = appconfig()
    let { login_show } = storeToRefs(sotres)

    const welcome_shows = ref(false)
    const error_show = ref(false)
    const alert_show = ref(false)

    function off_login() {
        sotres.taggerLogin(1)
    }


</script>


<template>

    <div class="hero min-h-screen bg-200 mt-16">


        <div class="hero-content flex-col lg:flex-row-reverse">
            <!-- 右侧海报 -->
            <img src="../assets/img/home_banner.png" class="max-w-2xl rounded-tl-sm drop-shadow-2xl" />
            <div class="px-8 top-4">

                <!-- 标语 -->
                <h1 class="text-5xl font-bold">恭喜你发现了OPcoin!</h1>
                <p class="py-6">OPcoin是一款能够实时监控区块链浏览器每个区块交易的记录并及时反馈的一款监控应用</p>

                <!-- 进度条-左侧内容 -->
                <ul class="steps steps-vertical">
                    <!-- 进度 -->
                    <li class="step step-primary">
                        接入OkLink-api,获取最权威数据
                    </li>
                    <li class="step step-primary">
                        连接MetaMask钱包,实时核对交易
                    </li>
                    <li class="step">
                        接入ETH区块网络,验证数据与Token
                    </li>
                    <li class="step">
                        检测合约地址与底层代码,避免貔貅盘造成经济损失
                    </li>


                    <!-- 注册按钮_打开modal表单 -->
                    <li class="px-14">
                        <label for="my-modal" class="btn btn-outline">注册账号</label>
                    </li>
                    <!-- modal注册表单 -->
                    <input type="checkbox" id="my-modal" class="modal-toggle" />
                    <div class="modal">
                        <div class="modal-box translate-y-14">
                            <!-- 注册表单 -->
                            <registerForm v-model:boole="welcome_shows" v-model:error="error_show"
                                v-model:alert="alert_show"></registerForm>
                        </div>
                    </div>

                    <!-- 登录按钮 -->
                    <li class="px-6">
                        <label for="my-modal-3" class="btn btn-outline btn-primary" @click="off_login">已有账号?
                            登录OPcoin</label>
                    </li>

                    <!-- model登录表单 -->
                    <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                    <div class="modal" v-if="login_show">
                        <div class="modal-box relative">
                            <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <loginForm></loginForm>
                        </div>
                    </div>

                </ul>

                <!-- 注册/登录成功 -->
                <div class="alert alert-warning shadow-lg" v-show="welcome_shows">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>恭喜您注册成功,欢迎加入OPcoin</span>
                    </div>
                </div>

                <!-- 账号注册失败 -->
                <div class="alert alert-error shadow-lg" v-show="error_show">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>该账号已存在! 可使用忘记密码以重置</span>
                    </div>
                </div>

                <!-- 注册表单填写有误 -->
                <div class="alert shadow-lg" v-show="alert_show">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 24"
                            class="stroke-info flex-shrink-0 w-7 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>请检查您的注册表单是否按照要求填写?</span>
                    </div>
                </div>

            </div>
        </div>

    </div>


</template>


<style scoped>



</style>