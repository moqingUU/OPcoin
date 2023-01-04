<template>
    <div class="overflow-y-hidden shadow sm:rounded-lg ">

        <div class="px-4 py-8 sm:px-6">
            <h3 class="font-bold text-lg text-center">欢迎注册OPcoin!</h3>
            <h3 class="text-lg font-medium leading-6 text-center">请填写下方表单以完成注册</h3>
            <p class="mt-1 max-w-2xl text-sm  text-center">请注意邮箱需填写中国大陆境内使用邮箱</p>
        </div>
        <div class="border-t">
            <dl>
                <!-- 用户名/密码/邮箱 -->
                <div class=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium">用户名:</dt>
                    <dd class="mt-1 text-sm  sm:col-span-2 sm:mt-0">
                        <input type="text" placeholder="请输入用户名" class="input input-bordered w-full h-10 max-w-xs"
                            v-model="username" />
                    </dd>
                </div>
                <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium">密码:</dt>
                    <dd class="mt-1 text-sm sm:col-span-2 sm:mt-0">
                        <input type="password" placeholder="请输入6位以上的密码"
                            class="input input-bordered w-full h-10 max-w-xs" v-model="password" />
                    </dd>
                </div>
                <div class=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium">邮箱:</dt>
                    <dd class="mt-1 text-sm  sm:col-span-2 sm:mt-0">
                        <input type="email" placeholder="请输入您的邮箱" class="input input-bordered w-full h-10 max-w-xs"
                            v-model="email" />
                    </dd>
                </div>

                <!-- 结束 -->


                <!-- 日报订阅/自我介绍/头像 -->
                <div class=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium ">您是否需要订阅OP日报</dt>
                    <dd class="mt-1 text-sm  sm:col-span-2 sm:mt-0">
                        <span>我需要订阅 <input type="radio" name="radio-1" class="radio" checked /></span>

                        <span class="px-5">不需要 <input type="radio" name="radio-1" class="radio" /></span>
                    </dd>
                </div>
                <div class=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium">关于您的自我介绍:</dt>
                    <dd class="mt-1 text-sm sm:col-span-2 sm:mt-0">
                        <textarea class="textarea" placeholder="请控制在20字以内,谢谢配合~" v-model="introduction"></textarea>
                    </dd>
                </div>
                <div class=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium">选择一张照片作为您的头像</dt>
                    <dd class="mt-1 text-sm  sm:col-span-2 sm:mt-0">
                        <input type="file" class="file-input w-full max-w-xs" />
                    </dd>
                </div>
            </dl>
        </div>
        <div class="modal-action">
            <label for="my-modal" class="btn" @click="show_welcome">取消</label>
            <label for="my-modal" class="btn" @click="register_User">确认</label>
        </div>
    </div>
</template>

<script setup>

    const username = ref('')
    const password = ref('')
    const email = ref('')
    const introduction = ref('')
    const photo = ref('')


    import { PaperClipIcon } from '@heroicons/vue/20/solid'
    import { ref } from 'vue'
    import axios from 'axios'

    const emit = defineEmits(['update:boole', 'update:error', 'update:alert'])
    const welcome_shows = ref(false)
    const error_show = ref(false)
    const alert_show = ref(false)

    const register_User = () => {

        const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        if (!reg.test(email.value)) {
            emit('update:alert', alert_show.value = !alert_show.value)
            setTimeout(() => {
                emit('update:alert', alert_show.value = false)
            }, 3500);
            return
        }




        axios.post('http://1aa549a7.r2.cpolar.cn/api/user/register', {
            username: username.value,
            password: password.value,
            email: email.value,
            introduction: introduction.value,
            photo: photo.value
        }).then((res) => {
            const { code, msg } = res.data
            console.log(res.data)
            if (code == 0) { emit('update:error', error_show.value = !error_show.value) }
            else { emit('update:boole', welcome_shows.value = !welcome_shows.value) }
        }).catch((err) => {
            console.log(err)
        })



        setTimeout(() => {
            emit('update:boole', welcome_shows.value = false)
            emit('update:error', error_show.value = false)
            emit('update:alert', alert_show.value = false)
        }, 3500);
    }


</script>