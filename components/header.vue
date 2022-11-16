<template>
  <header>
    <div class="header-container">
      <div class="left-side">
        <img
          src="https://marketplace.wanakafarm.com/static/media/logo.bb0f1e96.png"
        />
        <nuxt-link to="/" class="button">
          <font-awesome-icon :icon="['fa', 'house']" class="icon" />
          Home
        </nuxt-link>
      </div>
      <div class="right-side">
        <b-button v-if="account" class="button">
          {{ account.slice(0, 5) }}...{{ account.slice(-5, account.length) }}
        </b-button>
        <b-button v-else class="button" @click="connectWallet">
          Connect Wallet
        </b-button>
      </div>
    </div>
  </header>
</template>

<script>
import "~/assets/css/header.css";
import { getUserAccount } from "~/function/contract";
export default {
  components: {},

  data() {
    return {
      account: null,
    };
  },

  methods: {
    async connectWallet() {
      this.$store.commit("setAddress", await getUserAccount());
      this.account = this.$store.state.address;
    },
  },
};
</script>
