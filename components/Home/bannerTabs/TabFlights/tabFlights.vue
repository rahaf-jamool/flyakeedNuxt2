<template>
  <div no-body>
    <b-tabs pills>
      <b-tab title="Oneway" active>
        <b-card-text> <oneway-tab /> </b-card-text
      ></b-tab>
      <b-tab title="Roundtrip"
        ><b-card-text> <roundtrip-tab /> </b-card-text
      ></b-tab>
      <b-tab title="Multi-City"
        ><b-card-text> <multi-city-tab /> </b-card-text
      ></b-tab>
    </b-tabs>
  </div>
</template>

<script>
import MultiCityTab from "./TabsChild/MultiCityTab.vue";
import OnewayTab from "./TabsChild/OnewayTab.vue";
import RoundtripTab from "./TabsChild/RoundtripTab.vue";
export default {
  components: { OnewayTab, RoundtripTab, MultiCityTab },
  name: "tabFlight",
};
</script>
