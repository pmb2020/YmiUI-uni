"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  __name: "ym-form-item",
  props: {
    lable: {
      type: String,
      default: ""
    },
    lableWidth: {
      type: String,
      default: "70px"
    }
  },
  setup(__props) {
    const ymFormItem = common_vendor.reactive({
      lableWidth: "65px",
      lableAlign: "left"
    });
    common_vendor.ref("60px");
    const ymForm121 = common_vendor.inject("ymForm");
    common_vendor.onMounted(() => {
      initData();
    });
    const initData = () => {
      ymFormItem.lableWidth = ymForm121;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.lable
      }, __props.lable ? {
        b: common_vendor.t(__props.lable),
        c: ymFormItem.lableWidth,
        d: ymFormItem.lableAlign
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7805610f"], ["__file", "D:/project/npm/YmiUI-uni/uni_modules/ymiui-uni/components/ym-form-item/ym-form-item.vue"]]);
wx.createComponent(Component);
