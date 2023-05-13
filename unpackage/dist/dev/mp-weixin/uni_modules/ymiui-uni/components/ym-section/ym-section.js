"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  __name: "ym-section",
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.title)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8bdd6007"], ["__file", "D:/project/npm/YmiUI-uni/uni_modules/ymiui-uni/components/ym-section/ym-section.vue"]]);
wx.createComponent(Component);
