<template>
  <header>
    <div class="header-container">
      <div class="left-side">
        <img src="https://marketplace.wanakafarm.com/static/media/logo.bb0f1e96.png"/>
        <nuxt-link to="/" class="button">
           <font-awesome-icon :icon="['fa', 'house']" class="icon"/>
           Home
        </nuxt-link>
      </div>
      <div class="right-side">
        <b-button class="button">Connect Wallet</b-button>
      </div>
    </div>
  </header>
</template>

<script>
import "~/assets/css/header.css"

export default {

}
</script>