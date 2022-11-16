<template>
  <div class="body-container">
    <div class="body-left-container">
      <b-form-input class="input" placeholder="ID" type="number" />
    </div>
    <div class="body-right-container">
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
  </div>
</template>

<script>
import { getBirdContract, getMarketContract } from "../../function/contract";

export default {
  components: {},

  created() {
    this.getData();
  },

  data() {
    return {
      birdData: [],
    };
  },

  methods: {
    async getData() {
      const copyBirdData = [];
      const marketContract = await getMarketContract();
      const birdContract = await getBirdContract();
      const tokenCount = await birdContract.tokenCount();
      for (let id = 1; id <= tokenCount; id++) {
        const uri = await birdContract.tokenURI(id);
        const data = await fetch(uri).then((res) => res.json());
        const marketItem = await marketContract.birdItems(id);
        if (marketItem.tokenId != 0) {
          copyBirdData.push({
            id,
            imageURL: data.imageURL,
            price: marketItem.price,
          });
          continue;
        } else {
          copyBirdData.push({
            id,
            imageURL: data.imageURL,
            price: null,
          });
        }
      }
      this.birdData = copyBirdData;
    },

    async getDataURI(uri) {
      return await fetch(uri).then((res) => res.json());
    },
  },
};
</script>
