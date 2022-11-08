<template>
  <div class="body-container">
    <div class="body-left-container">
      <b-form-input class="input" placeholder="ID" type="number" />
    </div>
    <div class="body-right-container">
      <div class="land-item-container">
        <nuxt-link :to="'/lands/' + item.id" class="land-item-wrapper" v-for="(item, index) in landData" :key="index">
          <div class="land-id">#{{ item.id.toLocaleString() }}</div>
          <div class="land-middle">
            <div class="land-image">
              <img src="https://marketplace.wanakafarm.com/static/media/uncommon.3f46d099.png" class="background" />
              <img :src="item.imageURL" class="bird" />
            </div>
          </div>
          <div class="land-price">
            <font-awesome-icon :icon="['fa', 'cart-shopping']" class="icon" />
            {{ item.price.toLocaleString() }} WANA
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },

  created () {
  },

  data() {
    return {
      landData: []
    }
  },

  async fetch() {
    this.landData = await fetch(
      'http://localhost:5000/api/nft'
    ).then(res => res.json())
  }}

</script>
