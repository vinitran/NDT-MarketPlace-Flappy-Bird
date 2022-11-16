<template>
  <div class="mint-container">
    <div class="mint-wrapper">
      <div>Mint Bird NFT</div>
      <b-button @click="mint" class="button">Mint Bird NFT</b-button>
    </div>
    <div class="mint-wrapper">
      <div>Mint Pipe NFT</div>
      <b-button class="button">Cooming soon</b-button>
    </div>
    <div class="mint-wrapper">
      <div>Mint Map NFT</div>
      <b-button class="button">Cooming soon</b-button>
    </div>
  </div>
</template>

<script>
import {getSigner, getBirdContract} from "../../function/contract";
export default {
  components: {},
  created() {},
  computed: {},
  methods: {
    async mint() {
      const signer = await getSigner();
      const birdContract = await getBirdContract();
      try {
        await birdContract.connect(signer).mint("askdnasd");
      } catch (error) {
        alert("This transaction has been rejected")
      }
    },
  },
};
</script>
