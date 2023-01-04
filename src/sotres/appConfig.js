import { defineStore } from 'pinia'

export const appconfig = defineStore('appcolor', {

    state: () => {
        return {
            appColor: true,
            cat_show: true,
            login_show: true,
            error_login_show: false,
            username: '',
            password: '',
        }
    },
    getters: {},
    actions: {
        taggerColor() {
            this.appColor = !this.appColor
        },

        taggerCat(id) {
            if (id == 0) {
                this.cat_show = true
            }

            else {
                this.cat_show = false
            }
        },

        taggerError(login) {
            if (login == 0) {
                this.error_login_show = true
                console.log('true')
            }
            else {
                this.error_login_show = false
            }

        },

        taggerLogin(num) {
            if (num == 0) { this.login_show = false }
            else { this.login_show = true }

        }

    },
})




