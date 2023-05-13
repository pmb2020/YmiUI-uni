"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  __name: "ym-form",
  props: {
    labelWidth: {
      type: String,
      default: "75px"
    }
  },
  setup(__props) {
    const props = __props;
    common_vendor.provide("ymForm", props.labelWidth);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(() => {
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ced1c671"], ["__file", "D:/project/npm/YmiUI-uni/uni_modules/ymiui-uni/components/ym-form/ym-form.vue"]]);
wx.createComponent(Component);
