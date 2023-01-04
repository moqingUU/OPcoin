import { defineStore } from 'pinia'


export const userconfig = defineStore('user', {

    state: () => {
        return {
            username: '123',
            password: '321',
            user_op: {},
        }
    },
    getters: {},
    actions: {

    },
})
