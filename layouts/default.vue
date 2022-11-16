<template>
  <div>
    <Header />
    <navbarBody />
    <Nuxt />
  </div>
</template>

<script>
import Header from "~/components/header.vue";
import Footer from "~/components/footer.vue";
import navbarBody from "~/components/navbarBody.vue";
const ethers = require("ethers");

import birdAbi from "@/contractData/birdAbi";
import birdAddress from "@/contractData/birdAddress";
export default {
  components: {
    Header,
    Footer,
    navbarBody,
  },
};
</script>
