<template>
  <div class="main-body">
    <div class="container">
      <div class="row no-margin">
        <div id="filter-container" data-type="0" class="col-md-3 mt-4 mb-4">
          <div class="col-md-12 border-bottom-1 mt-2 mb-2">
            <div class="col-md-12 no-padding text-left mb10">
              <span class="new-bold-light" data-i18n="flight.stops">توقف</span>
            </div>
            <div class="col-md-12 no-padding filter-stops-container">
              <div class="mb15 d-flex align-items-center">
                <div class="icheckbox_square-green" style="position: relative">
                  <input
                    class="i-check filter-stops"
                    type="checkbox"
                    value="0"
                    checked=""
                    count="1"
                  />
                </div>
                <span data-i18n="flight.directflight">رحلة مباشرة</span>
              </div>
              <div class="mb15 d-flex align-items-center">
                <div
                  class="icheckbox_square-green checked"
                  style="position: relative"
                >
                  <input
                    class="i-check filter-stops"
                    type="checkbox"
                    value="1"
                    count="1"
                  />
                </div>
                <span data-i18n="flight.1stop">1 توقف</span>
              </div>
              <div class="mb15 d-flex align-items-center">
                <div
                  class="icheckbox_square-green checked"
                  style="position: relative"
                >
                  <input
                    class="i-check filter-stops"
                    type="checkbox"
                    value="2"
                    count="1"
                  />
                </div>
                <span data-i18n="flight.2stops">2 توقف</span>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="col-md-12 border-bottom-1 mt-2 mb-2">
            <div class="col-md-12 no-padding text-left mb10">
              <span class="new-bold-light" data-i18n="flight.stops"
                >خطوط الطيران</span
              >
            </div>
            <div class="col-md-12 no-padding filter-stops-container">
              <div class="mb15 d-flex align-items-center">
                <div class="icheckbox_square-green" style="position: relative">
                  <input
                    class="i-check filter-stops"
                    type="checkbox"
                    value="0"
                    checked=""
                    count="1"
                  />
                </div>
                <span data-i18n="flight.directflight">رحلة مباشرة</span>
              </div>
              <div class="mb15 d-flex align-items-center">
                <div
                  class="icheckbox_square-green checked"
                  style="position: relative"
                >
                  <input
                    class="i-check filter-stops"
                    type="checkbox"
                    value="1"
                    count="1"
                  />
                </div>
                <span data-i18n="flight.1stop">1 توقف</span>
              </div>
              <div class="mb15 d-flex align-items-center">
                <div
                  class="icheckbox_square-green checked"
                  style="position: relative"
                >
                  <input
                    class="i-check filter-stops"
                    type="checkbox"
                    value="2"
                    count="1"
                  />
                </div>
                <span data-i18n="flight.2stops">2 توقف</span>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="col-md-12 border-bottom-1 mt-2 mb-2">
            <div class="col-md-12 no-padding text-left mb10">
              <span class="new-bold-light" data-i18n="flight.stops">السعر</span>
            </div>
            <div class="col-md-12 no-padding filter-stops-container"></div>
          </div>
          <!--  -->
          <div class="col-md-12 border-bottom-1 mt-2 mb-2">
            <div class="col-md-12 no-padding text-left mb10">
              <span class="new-bold-light" data-i18n="flight.stops"
                >وقت المغادرة</span
              >
            </div>
            <div class="col-md-12 no-padding filter-stops-container">
              <div class="mb15 d-flex align-items-center">
                <div class="icheckbox_square-green" style="position: relative">
                  <input
                    class="i-check filter-stops"
                    type="checkbox"
                    value="0"
                    checked=""
                    count="1"
                  />
                </div>
                <span data-i18n="flight.directflight">رحلة مباشرة</span>
              </div>
              <div class="mb15 d-flex align-items-center">
                <div
                  class="icheckbox_square-green checked"
                  style="position: relative"
                >
                  <input
                    class="i-check filter-stops"
                    type="checkbox"
                    value="1"
                    count="1"
                  />
                </div>
                <span data-i18n="flight.1stop">1 توقف</span>
              </div>
              <div class="mb15 d-flex align-items-center">
                <div
                  class="icheckbox_square-green checked"
                  style="position: relative"
                >
                  <input
                    class="i-check filter-stops"
                    type="checkbox"
                    value="2"
                    count="1"
                  />
                </div>
                <span data-i18n="flight.2stops">2 توقف</span>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="col-md-12 border-bottom-1 mt-2 mb-2">
            <div class="col-md-12 no-padding text-left mb10">
              <span class="new-bold-light" data-i18n="flight.stops"
                >مدة الرحلة</span
              >
            </div>
            <div class="col-md-12 no-padding filter-stops-container"></div>
          </div>
          <!--  -->
          <div class="col-md-12 border-bottom-1 mt-2 mb-2">
            <div class="col-md-12 no-padding text-left mb10">
              <span class="new-bold-light" data-i18n="flight.stops"
                >الرحلات</span
              >
            </div>
            <div class="col-md-12 no-padding filter-stops-container">
              <div class="mb15 d-flex align-items-center">
                <div class="icheckbox_square-green" style="position: relative">
                  <input
                    class="i-check filter-stops"
                    type="checkbox"
                    value="0"
                    checked=""
                    count="1"
                  />
                </div>
                <span data-i18n="flight.directflight">رحلة مباشرة</span>
              </div>
              <div class="mb15 d-flex align-items-center">
                <div
                  class="icheckbox_square-green checked"
                  style="position: relative"
                >
                  <input
                    class="i-check filter-stops"
                    type="checkbox"
                    value="1"
                    count="1"
                  />
                </div>
                <span data-i18n="flight.1stop">1 توقف</span>
              </div>
              <div class="mb15 d-flex align-items-center">
                <div
                  class="icheckbox_square-green checked"
                  style="position: relative"
                >
                  <input
                    class="i-check filter-stops"
                    type="checkbox"
                    value="2"
                    count="1"
                  />
                </div>
                <span data-i18n="flight.2stops">2 توقف</span>
              </div>
            </div>
          </div>
        </div>
        <div id="departure-result" class="col-md-9 mt-4 mb-4 fl-result">
          <div
            class="col-md-6 col-middle no-padding flight-search-dept-summary"
          >
            <div class="inline-block vertical-middle">
              <span class="trip-out white"></span>
            </div>
            <div class="inline-block vertical-middle mr10">
              <h4 class="no-margin ml5 mr5">
                <span class="new-bold-dark font-20">رحلة الذهاب</span>
                <span class="flight-count new-bold-dark"> (31) </span>
                <span class="new-bold-dark" data-i18n="common.results"
                  >النتائج</span
                >
              </h4>
              <div class="clearfix inline-middle hidden">
                <span class="inline-middle">RUH</span> -
                <span class="inline-middle">DXB</span>
              </div>
              &nbsp;
              <div class="clearfix inline-middle new-light">
                ثلاثاء، 18 يوليو
              </div>
              <div class="clearfix inline-middle">
                <span
                  class="btn-collpase-flex"
                  data-target="flex-outbound-collapse"
                >
                  <i class="fl-ico chev-white-down"></i>
                  <i class="fl-ico chev-white-up" style="display: none"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="fl-nondirect-ob relative">
            <div class="flight-result-item">
              <div class="desc-panel">
                <div class="clearfix">
                  <div class="flight-airline">
                    <div
                      class="fl-img-con"
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="الخطوط القطرية"
                    >
                      <div class="flight-image i-qr"></div>
                    </div>
                    <div
                      class="fl-img-con"
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="الطيران العماني"
                    >
                      <div class="flight-image i-wy"></div>
                    </div>
                    <p class="clearfix ellipsis">QR1169</p>
                  </div>
                  <div class="flight-desc">
                    <div class="desc-itinerary">
                      <div class="clearfix d-flex justify-content-between">
                        <div class="inline-block vertical-middle">
                          <span class="time new-bold-dark">22:30</span>
                        </div>
                        <div class="inline-block vertical-middle flight-arrow">
                          <i class="oneway"></i>
                        </div>
                        <div class="inline-block vertical-middle">
                          <span class="time new-bold-dark">09:50</span>
                        </div>
                      </div>
                      <p class="txt-duration mt10 mb0">
                        <span>10س 20د (2 توقف)</span>
                      </p>
                      <p class="txt-duration ellipsis">QR1169</p>
                    </div>
                    <div class="desc-others">
                      <div class="seat-status available"></div>
                      <p
                        class="seat-text available"
                        data-i18n="common.available"
                      >
                        اختر
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flight-hole"><div class="vertical-line"></div></div>
              <div class="price-panel text-center flight-price">
                <div class="flex-con">
                  <button
                    class="btn btn-sec-outline btn-lg btn-remove-flight"
                    type="dept"
                    data-i18n="tools.change"
                    style="display: none"
                  >
                    تغيير
                  </button>
                  <div class="full d-block">
                    <div>
                        <h4 class="cur-price font-26 bold available">1,593.00</h4>
                    <h5 class="cur-price inline-block available">ريال</h5>
                    </div>
                    <button
                      class="btn btn-fa-primary btn-book-flight btn-lg btn-block mt10"
                      type="dept"
                      flight-type="1"
                      ai=""
                      ib=""
                      inbound='[{"has_promo":0,"promotion_info":[]}]'
                      ob=""
                      data-id="4001e58e::QR_1169"
                      value="1593.00"
                      orig="NaN"
                      curr="ريال"
                      group-id=""
                      aria-expanded="false"
                      aria-controls="fl-details-4001e58eQR_1169"
                    >
                      <span class="text" data-i18n="tools.select">اختيار</span>
                      <p class="text-loading" style="display: none">
                        <span data-i18n="common.loading">جاري التحميل</span>
                        <i class="fl-12-ico fl-loading"></i>
                      </p>
                    </button>
                  </div>
                </div>
                <div style="display: none">
                  <a
                    class="btn-text btn-view-itinerary"
                    data-id="4001e58e::QR_1169"
                    type="dept"
                    flight-type="1"
                    ib=""
                    ob=""
                    href="javascript:;"
                    aria-expanded="false"
                    aria-controls="fl-details-4001e58eQR_1169"
                  >
                    <span data-i18n="flight.flightdetails">تفاصيل الرحلة</span>
                    <i class="fa fa-exclamation-circle"></i>
                  </a>
                </div>
              </div>
            </div>
             <div class="flight-result-item">
              <div class="desc-panel">
                <div class="clearfix">
                  <div class="flight-airline">
                    <div
                      class="fl-img-con"
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="الخطوط القطرية"
                    >
                      <div class="flight-image i-qr"></div>
                    </div>
                    <div
                      class="fl-img-con"
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="الطيران العماني"
                    >
                      <div class="flight-image i-wy"></div>
                    </div>
                    <p class="clearfix ellipsis">QR1169</p>
                  </div>
                  <div class="flight-desc">
                    <div class="desc-itinerary">
                      <div class="clearfix d-flex justify-content-between">
                        <div class="inline-block vertical-middle">
                          <span class="time new-bold-dark">22:30</span>
                        </div>
                        <div class="inline-block vertical-middle flight-arrow">
                          <i class="oneway"></i>
                        </div>
                        <div class="inline-block vertical-middle">
                          <span class="time new-bold-dark">09:50</span>
                        </div>
                      </div>
                      <p class="txt-duration mt10 mb0">
                        <span>10س 20د (2 توقف)</span>
                      </p>
                      <p class="txt-duration ellipsis">QR1169</p>
                    </div>
                    <div class="desc-others">
                      <div class="seat-status available"></div>
                      <p
                        class="seat-text available"
                        data-i18n="common.available"
                      >
                        اختر
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flight-hole"><div class="vertical-line"></div></div>
              <div class="price-panel text-center flight-price">
                <div class="flex-con">
                  <button
                    class="btn btn-sec-outline btn-lg btn-remove-flight"
                    type="dept"
                    data-i18n="tools.change"
                    style="display: none"
                  >
                    تغيير
                  </button>
                  <div class="full d-block">
                    <div>
                        <h4 class="cur-price font-26 bold available">1,593.00</h4>
                    <h5 class="cur-price inline-block available">ريال</h5>
                    </div>
                    <button
                      class="btn btn-fa-primary btn-book-flight btn-lg btn-block mt10"
                      type="dept"
                      flight-type="1"
                      ai=""
                      ib=""
                      inbound='[{"has_promo":0,"promotion_info":[]}]'
                      ob=""
                      data-id="4001e58e::QR_1169"
                      value="1593.00"
                      orig="NaN"
                      curr="ريال"
                      group-id=""
                      aria-expanded="false"
                      aria-controls="fl-details-4001e58eQR_1169"
                    >
                      <span class="text" data-i18n="tools.select">اختيار</span>
                      <p class="text-loading" style="display: none">
                        <span data-i18n="common.loading">جاري التحميل</span>
                        <i class="fl-12-ico fl-loading"></i>
                      </p>
                    </button>
                  </div>
                </div>
                <div style="display: none">
                  <a
                    class="btn-text btn-view-itinerary"
                    data-id="4001e58e::QR_1169"
                    type="dept"
                    flight-type="1"
                    ib=""
                    ob=""
                    href="javascript:;"
                    aria-expanded="false"
                    aria-controls="fl-details-4001e58eQR_1169"
                  >
                    <span data-i18n="flight.flightdetails">تفاصيل الرحلة</span>
                    <i class="fa fa-exclamation-circle"></i>
                  </a>
                </div>
              </div>
            </div>
             <div class="flight-result-item">
              <div class="desc-panel">
                <div class="clearfix">
                  <div class="flight-airline">
                    <div
                      class="fl-img-con"
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="الخطوط القطرية"
                    >
                      <div class="flight-image i-qr"></div>
                    </div>
                    <div
                      class="fl-img-con"
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="الطيران العماني"
                    >
                      <div class="flight-image i-wy"></div>
                    </div>
                    <p class="clearfix ellipsis">QR1169</p>
                  </div>
                  <div class="flight-desc">
                    <div class="desc-itinerary">
                      <div class="clearfix d-flex justify-content-between">
                        <div class="inline-block vertical-middle">
                          <span class="time new-bold-dark">22:30</span>
                        </div>
                        <div class="inline-block vertical-middle flight-arrow">
                          <i class="oneway"></i>
                        </div>
                        <div class="inline-block vertical-middle">
                          <span class="time new-bold-dark">09:50</span>
                        </div>
                      </div>
                      <p class="txt-duration mt10 mb0">
                        <span>10س 20د (2 توقف)</span>
                      </p>
                      <p class="txt-duration ellipsis">QR1169</p>
                    </div>
                    <div class="desc-others">
                      <div class="seat-status available"></div>
                      <p
                        class="seat-text available"
                        data-i18n="common.available"
                      >
                        اختر
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flight-hole"><div class="vertical-line"></div></div>
              <div class="price-panel text-center flight-price">
                <div class="flex-con">
                  <button
                    class="btn btn-sec-outline btn-lg btn-remove-flight"
                    type="dept"
                    data-i18n="tools.change"
                    style="display: none"
                  >
                    تغيير
                  </button>
                  <div class="full d-block">
                    <div>
                        <h4 class="cur-price font-26 bold available">1,593.00</h4>
                    <h5 class="cur-price inline-block available">ريال</h5>
                    </div>
                    <button
                      class="btn btn-fa-primary btn-book-flight btn-lg btn-block mt10"
                      type="dept"
                      flight-type="1"
                      ai=""
                      ib=""
                      inbound='[{"has_promo":0,"promotion_info":[]}]'
                      ob=""
                      data-id="4001e58e::QR_1169"
                      value="1593.00"
                      orig="NaN"
                      curr="ريال"
                      group-id=""
                      aria-expanded="false"
                      aria-controls="fl-details-4001e58eQR_1169"
                    >
                      <span class="text" data-i18n="tools.select">اختيار</span>
                      <p class="text-loading" style="display: none">
                        <span data-i18n="common.loading">جاري التحميل</span>
                        <i class="fl-12-ico fl-loading"></i>
                      </p>
                    </button>
                  </div>
                </div>
                <div style="display: none">
                  <a
                    class="btn-text btn-view-itinerary"
                    data-id="4001e58e::QR_1169"
                    type="dept"
                    flight-type="1"
                    ib=""
                    ob=""
                    href="javascript:;"
                    aria-expanded="false"
                    aria-controls="fl-details-4001e58eQR_1169"
                  >
                    <span data-i18n="flight.flightdetails">تفاصيل الرحلة</span>
                    <i class="fa fa-exclamation-circle"></i>
                  </a>
                </div>
              </div>
            </div>
             <div class="flight-result-item">
              <div class="desc-panel">
                <div class="clearfix">
                  <div class="flight-airline">
                    <div
                      class="fl-img-con"
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="الخطوط القطرية"
                    >
                      <div class="flight-image i-qr"></div>
                    </div>
                    <div
                      class="fl-img-con"
                      data-toggle="tooltip"
                      data-placement="top"
                      data-original-title="الطيران العماني"
                    >
                      <div class="flight-image i-wy"></div>
                    </div>
                    <p class="clearfix ellipsis">QR1169</p>
                  </div>
                  <div class="flight-desc">
                    <div class="desc-itinerary">
                      <div class="clearfix d-flex justify-content-between">
                        <div class="inline-block vertical-middle">
                          <span class="time new-bold-dark">22:30</span>
                        </div>
                        <div class="inline-block vertical-middle flight-arrow">
                          <i class="oneway"></i>
                        </div>
                        <div class="inline-block vertical-middle">
                          <span class="time new-bold-dark">09:50</span>
                        </div>
                      </div>
                      <p class="txt-duration mt10 mb0">
                        <span>10س 20د (2 توقف)</span>
                      </p>
                      <p class="txt-duration ellipsis">QR1169</p>
                    </div>
                    <div class="desc-others">
                      <div class="seat-status available"></div>
                      <p
                        class="seat-text available"
                        data-i18n="common.available"
                      >
                        اختر
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flight-hole"><div class="vertical-line"></div></div>
              <div class="price-panel text-center flight-price">
                <div class="flex-con">
                  <button
                    class="btn btn-sec-outline btn-lg btn-remove-flight"
                    type="dept"
                    data-i18n="tools.change"
                    style="display: none"
                  >
                    تغيير
                  </button>
                  <div class="full d-block">
                    <div>
                        <h4 class="cur-price font-26 bold available">1,593.00</h4>
                    <h5 class="cur-price inline-block available">ريال</h5>
                    </div>
                    <button
                      class="btn btn-fa-primary btn-book-flight btn-lg btn-block mt10"
                      type="dept"
                      flight-type="1"
                      ai=""
                      ib=""
                      inbound='[{"has_promo":0,"promotion_info":[]}]'
                      ob=""
                      data-id="4001e58e::QR_1169"
                      value="1593.00"
                      orig="NaN"
                      curr="ريال"
                      group-id=""
                      aria-expanded="false"
                      aria-controls="fl-details-4001e58eQR_1169"
                    >
                      <span class="text" data-i18n="tools.select">اختيار</span>
                      <p class="text-loading" style="display: none">
                        <span data-i18n="common.loading">جاري التحميل</span>
                        <i class="fl-12-ico fl-loading"></i>
                      </p>
                    </button>
                  </div>
                </div>
                <div style="display: none">
                  <a
                    class="btn-text btn-view-itinerary"
                    data-id="4001e58e::QR_1169"
                    type="dept"
                    flight-type="1"
                    ib=""
                    ob=""
                    href="javascript:;"
                    aria-expanded="false"
                    aria-controls="fl-details-4001e58eQR_1169"
                  >
                    <span data-i18n="flight.flightdetails">تفاصيل الرحلة</span>
                    <i class="fa fa-exclamation-circle"></i>
                  </a>
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
export default {
  name: "flight-result",
};
</script>

<style lang="scss">
@import "@/public/assets/scss/flight-result";
</style>
