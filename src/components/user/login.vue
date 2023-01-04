<template>

    <div class="flex min-h-full items-center justify-center py-2 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div class="w-full max-w-md space-y-8">
            <div>
                <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company" />
                <h2 class="mt-6 text-center text-3xl font-bold tracking-tight">登录到OPcoin网络
                </h2>
                <p class="mt-2 text-center text-sm">
                    或使用
                    {{ ' ' }}
                    <a href="#" class="font-medium text-indigo-600">Web3网络登录</a>
                </p>
            </div>
            <form class="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" value="true" />
                <div class="-space-y-px rounded-md shadow-sm">
                    <div>
                        <label for="email-address" class="sr-only">Email address</label>

                        <input id="email-address" name="email" type="email" autocomplete="email"
                            class="tooltip relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            placeholder="请输入您的邮箱或用户名" v-model="email_username" />

                    </div>
                    <div>
                        <label for="password" class="sr-only">Password</label>
                        <input id="password" name="password" type="password" autocomplete="current-password"
                            class="tooltip relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            placeholder="请输入您的密码" v-model="password_username" />
                        <error_login v-show="error_login_show"></error_login>
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label for="remember-me" class="ml-2 block text-sm">记住此次登录</label>
                    </div>

                    <div class="text-sm">
                        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">忘记密码?</a>
                    </div>

                </div>

                <div>

                    <button type="button" @click="login_user"
                        class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                            <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                aria-hidden="true" />
                        </span>
                        登录
                    </button>

                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
    import error_login from '../error/login_error.vue'
    import { LockClosedIcon } from '@heroicons/vue/20/solid'
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { appconfig } from '../.././sotres/appconfig'
    import { userconfig } from '../../sotres/userConfig.js'
    import { storeToRefs } from 'pinia'
    import $axios from 'axios'



    const sotres = appconfig()
    const sotres_user = userconfig()

    let { cat_show, error_login_show } = storeToRefs(sotres)

    let { username, password, user_op } = storeToRefs(sotres_user)
    const email_username = ref('')
    const password_username = ref('')

    const $router = useRouter()

    console.log(sotres_user.username, sotres_user.password, username.value)




    const login_user = () => {
        if (email_username.value == '' || password_username.value == '') {
            alert('请检查用户名或密码')
            $router.push('/home')
            sotres.taggerError(1)
            return
        }
        else {

            username.value = email_username.value
            password.value = password_username.value
            //登录请求
            const user_token = $axios.get(`http://1aa549a7.r2.cpolar.cn/api/user/login?username=${username.value}&password=${password.value}`).then(res => {
                return res.data
            })

            user_token.then(data => {
                console.log(data, data.username[0].username)
                if (data.token == 0) {
                    console.log('走我1')

                    sotres.taggerError(0)
                }
                else {
                    sotres.taggerCat(1)
                    sotres.taggerLogin(0)
                    localStorage.setItem('username', data.username[0].username)
                    $router.push('/OPhome')
                    console.log('走我2')
                }
            }
            )



        }



    }







</script>