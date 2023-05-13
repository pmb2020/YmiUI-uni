"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad() {
  },
  methods: {}
};
if (!Array) {
  const _easycom_ym_button2 = common_vendor.resolveComponent("ym-button");
  _easycom_ym_button2();
}
const _easycom_ym_button = () => "../../uni_modules/ymiui-uni/components/ym-button/ym-button.js";
if (!Math) {
  _easycom_ym_button();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/npm/YmiUI-uni/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
