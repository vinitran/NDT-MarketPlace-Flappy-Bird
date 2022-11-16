<template>
  <div class="land-item" >
    <div class="land-item-container">
      <nuxt-link
        :to="'/lands/' + item.id"
        class="land-item-wrapper"
        v-for="(item, index) in birdData"
        :key="index"
      >
        <div v-if="item.id" class="land-id">
          #{{ item.id.toLocaleString() }}
        </div>
        <div class="land-middle">
          <div class="land-image">
            <img
              src="https://marketplace.wanakafarm.com/static/media/uncommon.3f46d099.png"
              class="background"
            />
            <img :src="item.imageURL" class="bird" />
          </div>
        </div>
        <div v-if="item.price" class="land-price">
          <font-awesome-icon :icon="['fa', 'cart-shopping']" class="icon" />
          {{ item.price.toLocaleString() }} WANA
        </div>
        <div v-else class="land-price">
          <font-awesome-icon :icon="['fa', 'cart-shopping']" class="icon" />
          ---
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import landDetailData from "~/static/landItemData";
export default {
  data() {
    return {
      birdData: landDetailData,
    };
  },
};
</script>
<style>
.land-item {
    flex: 1 1 0%;
    padding: 24px 32px 32px;
    height: calc(100vh - 110px);
    overflow-y: auto;
    margin: 0px auto;
    
}
.land-item-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 0px -10px 1rem;
}
.land-item-wrapper{
    width: 208px;
    border: 1px solid rgb(89, 93, 121);
    border-radius: 4px;
    height: calc(100% - 16px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 356px;
    padding: 0px 1rem;
    margin: 10px;
    background: url(https://marketplace.wanakafarm.com/static/media/bg-nft.483ac537.svg) center center / contain no-repeat;
}
</style>   