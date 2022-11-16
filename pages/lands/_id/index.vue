<template>
  <div v-if="birdDetail" class="land-detail-container">
    <div class="land-detail-top">
      <nuxt-link class="left-side" to="/lands">
        <font-awesome-icon :icon="['fa', 'chevron-left']" class="icon" />
        Back
      </nuxt-link>
      <div v-if="birdDetail.price != 0">
        <div v-if="addressWallet == null" />
        <div v-else-if="birdDetail.owner != addressWallet" class="right-side">
          <div class="price">
            <div class="price-title">Order Price:</div>
            <img
              src="https://marketplace.wanakafarm.com/images/logo-token-wana.png"
            />
            {{ birdDetail.price }} VINI
          </div>
          <b-button
            @click="purchase"
            class="button"
            style="background-color: #ffb732"
          >
            BUY
          </b-button>
          <b-button @click="offer" class="button">MAKE OFFER</b-button>
        </div>
        <div v-else class="right-side">
          <b-button
            v-if="birdDetail.offer != 0"
            @click="acceptOffer"
            class="button"
            style="background-color: #ffb732"
          >
            ACCEPT OFFER
          </b-button>
          <b-button
            @click="cancelSell"
            class="button"
            style="background-color: #ffb732"
          >
            CANCEL SELL
          </b-button>
        </div>
      </div>
      <div v-else>
        <div v-if="birdDetail.owner == addressWallet" class="right-side">
          <b-button
            @click="sell"
            class="button"
            style="background-color: #ffb732"
          >
            SELL
          </b-button>
        </div>
      </div>
    </div>
    <div class="land-detail-middle">
      <div class="left-side">
        <div class="land-id">#{{ birdDetail.id }}</div>
        <div class="land-cate">
          {{ birdDetail.name }}
        </div>
        <div class="land-image">
          <landImage />
        </div>
      </div>
      <div class="right-side">
        <div class="title-info">About</div>
        <div class="title-info-box">
          <div class="info-item-wrapper">
            <div class="info-item-detail">
              <img
                src="https://raw.githubusercontent.com/vinitran/Game/main/SDLgame/bird_mid_notfly_360.png"
              />
              <div class="info-item-text">
                <div class="title">Name</div>
                <div class="detail">
                  {{ birdDetail.name }}
                </div>
              </div>
            </div>
            <div class="info-item-detail">
              <img
                src="https://marketplace.wanakafarm.com/static/media/icon-main.2c798f0b.png"
              />
              <div class="info-item-text">
                <div class="title">Owner</div>
                <div class="detail">
                  {{ birdDetail.owner.slice(0, 5) }}...{{
                    birdDetail.owner.slice(-5, birdDetail.owner.length)
                  }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="title-info" style="margin-top: 10px">Stats</div>
        <div class="title-info-box">
          <div class="info-item-wrapper">
            <div class="info-item-detail">
              <img
                src="https://marketplace.wanakafarm.com/static/media/icon-rare.e9b0796d.svg"
              />
              <div class="info-item-text">
                <div class="title">Rate</div>
                <div class="detail">
                  {{ birdDetail.rate }}
                </div>
              </div>
            </div>
            <div class="info-item-detail">
              <img
                src="https://marketplace.wanakafarm.com/static/media/icon-birth.82fdc423.svg"
              />
              <div class="info-item-text">
                <div class="title">Birth</div>
                <div class="detail">
                  {{ birdDetail.birth }}
                </div>
              </div>
            </div>
            <div class="info-item-detail">
              <img
                src="https://marketplace.wanakafarm.com/static/media/icon-level.9166f2dc.svg"
              />
              <div class="info-item-text">
                <div class="title">Level</div>
                <div class="detail">
                  {{ birdDetail.level }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="title-info-box">
          <div class="info-item-wrapper">
            <div class="info-item-detail">
              <div class="info-item-text">
                <div class="title">Description</div>
                <div class="detail">
                  {{ birdDetail.description }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import landImage from "~/components/landImage.vue";
import {
    sell,
    cancelSell,
    purchase,
    offer,
    acceptOffer,
    cancelOffer
} from "~/function/index";
import {
  getMarketContract,
  getBirdContract,
  fromWei
} from "~/function/contract";

export default {
  components: {
    landImage,
  },

  created() {
    this.getData();
  },

  data() {
    return {
      birdDetail: null,
    };
  },

  computed: {
    addressWallet: function () {
      const address = this.$store.state.address;
      if (address) {
        return address.toLowerCase();
      }
      return address;
    },
  },

  methods: {
    async sell() {
      sell(this.$route.params.id);
    },

    async cancelSell() {
      cancelSell(this.$route.params.id);
    },

    async purchase() {
      purchase(this.$route.params.id);
    },

    async offer() {
      offer(this.$route.params.id);
    },

    async acceptOffer() {
      acceptOffer(this.$route.params.id);
    },

    async cancelOffer() {
      cancelOffer(this.$route.params.id);
    },

    async getData() {
      const marketContract = await getMarketContract();
      const birdContract = await getBirdContract();
      const marketItem = await marketContract.birdItems(this.$route.params.id);
      
      const uri = await birdContract.tokenURI(this.$route.params.id);
      const data = await fetch(uri).then((res) => res.json());
      if ((await marketItem.price) != 0) {
        this.birdDetail = {
          id: data.id,
          name: data.name,
          owner: (await marketItem.seller).toLowerCase(),
          description: data.description,
          imageURL: data.imageURL,
          rate: data.rate,
          level: data.level,
          birth: data.birth,
          price: fromWei(await marketItem.price).slice(0, -2),
          offer: await marketItem.offer,
        };
        return;
      }
      this.birdDetail = {
        id: data.id,
        name: data.name,
        owner: (await birdContract.ownerOf(this.$route.params.id)).toLowerCase(),
        description: data.description,
        imageURL: data.imageURL,
        rate: data.rate,
        level: data.level,
        birth: data.birth,
        price: 0,
        offer: 0,
      };
    },
  },
};
</script>
