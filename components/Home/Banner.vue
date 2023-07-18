<template>
  <section class="search-wrapper index-search">
    <div id="bg-places">
      <div no-body>
        <b-tabs pills>
          <b-tab title="Flights" active
            ><b-card-text>
              <tab-flights /> </b-card-text
          ></b-tab>
          <b-tab title="Hotels"
            ><b-card-text>Tab contents 2</b-card-text></b-tab
          >
        </b-tabs>
      </div>
    </div>
  </section>
</template>

<script>
import tabFlights from "./bannerTabs/TabFlights/tabFlights.vue";
export default {
  components: { tabFlights },
  name: "banner",
};
</script>
<style lang="scss">
@import "@/public/assets/scss/bannerHome";
</style>
