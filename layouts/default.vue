<template>
  <div>
    <Header />
    <navbarBody/>
    <Nuxt />
    <Footer />
  </div>
</template>

<script>

import Header from "~/components/header.vue"
import Footer from "~/components/footer.vue"
import navbarBody from "~/components/navbarBody.vue"
export default {
  components: {
    Header, 
    Footer, 
    navbarBody
  },
}
</script>