<template>
  <div class="fadeIn search-container">
    <div id="search-normal-flight-container">
      <div class="clearfix search-destination mb15 mt15">
        <div id="country-destination" class="border-bottom-2 active">
          <div class="route-con">
            <span
              class="pull-right btn-cur-loc-det hidden"
              data-toggle="tooltip"
              data-placement="top"
              data-i18n="[data-original-title]common.nearbyairport"
              data-original-title="Nearby Airport"
            >
              <span data-i18n="common.nearbyairport">Nearby Airport</span>
              <i class="fl-12-ico nearby"></i>
            </span>
            <p class="lbl">
              <i class="fl-12-ico take-off"></i>
              <span data-i18n="flight.from">From</span>
            </p>
            <div class="relative">
              <input
                type="text"
                class="form-control typeahead ui-autocomplete-input ui-autocomplete-loading"
                id="departure"
                data-i18n="[placeholder]flight.cityorairport"
                placeholder="City or Airport"
                autocomplete="password"
              />
            </div>
            <span id="departure_word" class="text-transform"></span>
          </div>
          <ul
            id="ui-id-1"
            tabindex="0"
            class="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front"
            style="display: none"
          ></ul>
        </div>
        <div id="country-arrival" class="relative">
          <div class="route-con">
            <p class="lbl">
              <i class="fl-12-ico take-in"></i>
              <span data-i18n="flight.to">To</span>
            </p>
            <div class="relative">
              <input
                type="text"
                class="form-control typeahead ui-autocomplete-input ui-autocomplete-loading"
                id="arrival"
                data-i18n="[placeholder]flight.cityorairport"
                placeholder="City or Airport"
                autocomplete="password"
              />
            </div>
            <span id="arrival_word" class="text-transform"></span>
          </div>
          <ul
            id="ui-id-2"
            tabindex="0"
            class="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front"
            style="display: none"
          ></ul>
        </div>
        <span class="btn-switcher">
          <i class="fl-30-ico fl-switcher"></i>
        </span>
      </div>
      <div class="clearfix search-dates">
        <div class="search-item dep active">
          <div class="cursor-pointer departure-date-mobiscroll date-item">
            <h5 data-i18n="flight.departuredate">Departure Date</h5>
            <div class="depart-date-mobiscroll">
              <div class="inline-middle">
                <span class="depart-day-number dark-gray dashboard_m_num"
                  >18</span
                >
              </div>
              <div class="text-con">
                <span class="depart-month">Jul</span>
                <span class="depart-year block">2023</span>
              </div>
            </div>
          </div>
        </div>
        <div class="search-item ret" id="arrival_date">
          <span
            class="btn-fa pointer pull-right btn-remove-return"
            data-toggle="tooltip"
            data-placement="bottom"
            data-i18n="[data-original-title]flight.oneway"
            data-original-title="Oneway"
            ><i class="fl-ico close"></i
          ></span>
          <div class="cursor-pointer animated date-item">
            <h5 data-i18n="flight.returndate">Return Date</h5>
            <div class="return-date-mobiscroll">
              <div class="inline-middle">
                <span class="return-day-number dark-gray dashboard_m_num"
                  >25</span
                >
              </div>
              <div class="text-con">
                <span class="return-month">Jul</span>
                <span class="return-year block">2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="clearfix search-con mb15">
        <div class="col-md-12 inline-commands">
          <button
            class="btn btn-fa-primary btn-block"
            id="btn-search-flight-next"
            data-con="index-search"
          >
            <nuxt-link to="/flight-result">
              <span data-i18n="offers.searchflight"
                >Search Flight</span
              ></nuxt-link
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OnewayTab",
};
</script>

<style lang="scss" scoped>
.search-destination {
  position: relative;
  background-color: #fff;
  border-radius: 3px;
  z-index: 2;
}
#country-destination {
  background-color: #fff;
  transition: 0.2s;
}
.route-con {
  position: relative;
  height: 100%;
}
.btn-cur-loc-det {
  height: 25px;
  color: #38bca8;
  cursor: pointer;
  margin: 5px;
  font-size: 14px;
  margin-top: 10px;
}
.lbl {
  padding: 5px 15px 0 15px;
  margin: 0;
}
.relative {
  position: relative;
}
.arrival-multicity,
.departure-multicity,
.search-destination .form-control {
  border-radius: 0;
  border: 0;
  border-right-color: transparent;
  border-top-color: transparent;
  border-bottom-color: transparent;
  box-shadow: none;
  background: 0 0;
  z-index: 2;
  font-size: 22px;
  padding: 0 15px;
  color: #1a1f71;
}
.search-destination #arrival_word,
.search-destination #departure_word {
  position: absolute;
  right: 40px;
  z-index: 12;
  padding: 0 10px;
  z-index: 1;
  font-size: 22px;
  top: 50%;
  transform: translateY(-50%);
  color: #1a1f71;
}
.search-destination .lbl > span {
  margin: 0 5px;
  display: inline-block;
  color: #ff56a1;
}
// date
.search-dates {
  white-space: nowrap;
  margin: 15px 0;
  position: relative;
}
.search-item.dep.active,
.search-item.ret.active {
  background-color: #fff;
}
.search-item.dep.active .date-item,
.search-item.ret.active .date-item {
  opacity: 1;
}
.search-dates .search-item:first-child {
  margin-right: 13px;
}
.search-item {
  width: calc(50% - 8px);
  position: relative;
  display: inline-block;
  background-color: #f1f1f1;
  border-radius: 3px;
  padding: 10px 15px;
  z-index: 1;
}
.search-item h5 {
  margin: 0;
  margin-bottom: 0;
  color: #196dfb;
}
.date-multicity-mobiscroll,
.depart-date-mobiscroll,
.return-date-mobiscroll {
  height: 50px;
  line-height: 50px;
  position: relative;
  cursor: pointer;
}
.inline-middle {
  display: inline-block;
  vertical-align: middle !important;
}
.search-dates .text-con {
  margin: 0 20px;
  line-height: 50px;
  display: inline-block;
  vertical-align: middle;
}
.search-dates .text-con > span {
  line-height: 20px;
  display: block;
  font-size: 15px;
  text-align: center;
  color: #1a1f71;
}
.search-dates .depart-day-number,
.search-dates .return-day-number {
  font-size: 40px;
  display: inline-block;
  vertical-align: middle;
  margin-top: -10px;
  margin-left: 10px;
  color: #1a1f71;
}
.search-item .btn-remove-return {
  z-index: 1;
  position: relative;
}
// button
.inline-commands {
  position: relative;
  white-space: nowrap;
  display: flex;
}
.search-con .btn {
  border-radius: 5px;
  padding: 15px;
  font-size: 20px;
  background-color: #196dfb;
  border: 0;
  color: #fff;
  outline: 0;
  box-shadow: none;
  width: 100%;
}
</style>
