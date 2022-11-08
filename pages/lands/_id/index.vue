<template>
  <div class="land-detail-container">
    <div class="land-detail-top">
      <nuxt-link class="left-side" to="/lands">
        <font-awesome-icon :icon="['fa', 'chevron-left']" class="icon" />
        Back
      </nuxt-link>
      <div class="right-side">
        <div class="price">
          <div class="price-title">
            Order Price:
          </div>
          <img src="https://marketplace.wanakafarm.com/images/logo-token-wana.png" />
          {{ landDetailData.price }} WANA
        </div>
        <b-button class="button" style="background-color: #ffb732;">BUY</b-button>
        <b-button class="button">MAKE OFFER</b-button>
      </div>
    </div>
    <div class="land-detail-middle">
      <div class="left-side">
        <div class="land-id">
          #{{ landDetailData.id }}
        </div>
        <div class="land-cate">
          {{ landDetailData.name }}
        </div>
        <div class="land-image">
          <landImage />
        </div>
      </div>
      <div class="right-side">
        <div class="title-info">
          About
        </div>
        <div class="title-info-box">
          <div class="info-item-wrapper">
            <div class="info-item-detail">
              <img src="https://raw.githubusercontent.com/vinitran/Game/main/SDLgame/bird_mid_notfly_360.png" />
              <div class="info-item-text">
                <div class="title">
                  Name
                </div>
                <div class="detail">
                  {{ landDetailData.name }}
                </div>
              </div>
            </div>
            <div class="info-item-detail">
              <img src="https://marketplace.wanakafarm.com/static/media/icon-main.2c798f0b.png" />
              <div class="info-item-text">
                <div class="title">
                  Owner
                </div>
                <div class="detail">
                  {{ landDetailData.owner }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="title-info" style="margin-top: 10px;">
          Stats
        </div>
        <div class="title-info-box">
          <div class="info-item-wrapper">
            <div class="info-item-detail">
              <img src="https://marketplace.wanakafarm.com/static/media/icon-rare.e9b0796d.svg" />
              <div class="info-item-text">
                <div class="title">
                  Rate
                </div>
                <div class="detail">
                  {{ landDetailData.rate }}
                </div>
              </div>
            </div>
            <div class="info-item-detail">
              <img src="https://marketplace.wanakafarm.com/static/media/icon-birth.82fdc423.svg" />
              <div class="info-item-text">
                <div class="title">
                  Birth
                </div>
                <div class="detail">
                  {{ landDetailData.birth }}
                </div>
              </div>
            </div>
            <div class="info-item-detail">
              <img src="https://marketplace.wanakafarm.com/static/media/icon-level.9166f2dc.svg" />
              <div class="info-item-text">
                <div class="title">
                  Level
                </div>
                <div class="detail">
                  {{ landDetailData.level }}
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
                <div class="title">
                  Description
                </div>
                <div class="detail">
                  {{ landDetailData.description }}
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
import landImage from "~/components/landImage.vue"

export default {
  components: {
    landImage,
  },

  created() {
  },

  data() {
    return {
      landDetailData: []
    }
  },

  async fetch() {
    this.landDetailData = await fetch(
      `http://localhost:5000/api/nft/id/${this.$route.params.id}`
    ).then(res => res.json())
  }
}
</script>
  