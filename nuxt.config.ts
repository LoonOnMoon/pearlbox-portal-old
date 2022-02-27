import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    publicRuntimeConfig: {
        VUE_APP_NAME: process.env.VUE_APP_NAME,
        VUE_APP_PEARLBOX_API_URL: process.env.VUE_APP_PEARLBOX_API_URL,
        VUE_APP_GSI_CLIENT_ID: process.env.VUE_APP_GSI_CLIENT_ID,
    }
})
