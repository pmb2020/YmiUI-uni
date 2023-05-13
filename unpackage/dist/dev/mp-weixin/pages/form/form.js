"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_ym_section2 = common_vendor.resolveComponent("ym-section");
  const _easycom_ym_input2 = common_vendor.resolveComponent("ym-input");
  const _easycom_ym_form_item2 = common_vendor.resolveComponent("ym-form-item");
  const _easycom_ym_form2 = common_vendor.resolveComponent("ym-form");
  (_easycom_ym_section2 + _easycom_ym_input2 + _easycom_ym_form_item2 + _easycom_ym_form2)();
}
const _easycom_ym_section = () => "../../uni_modules/ymiui-uni/components/ym-section/ym-section.js";
const _easycom_ym_input = () => "../../uni_modules/ymiui-uni/components/ym-input/ym-input.js";
const _easycom_ym_form_item = () => "../../uni_modules/ymiui-uni/components/ym-form-item/ym-form-item.js";
const _easycom_ym_form = () => "../../uni_modules/ymiui-uni/components/ym-form/ym-form.js";
if (!Math) {
  (_easycom_ym_section + _easycom_ym_input + _easycom_ym_form_item + _easycom_ym_form)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      title: "表单提交"
    }),
    b: common_vendor.p({
      lable: "姓名"
    }),
    c: common_vendor.p({
      lable: "活动场地"
    }),
    d: common_vendor.p({
      lable: "手机号码"
    }),
    e: common_vendor.p({
      lable: "上传图片"
    }),
    f: common_vendor.p({
      ["label-width"]: "70px",
      ["label-align"]: "left"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/npm/YmiUI-uni/pages/form/form.vue"]]);
wx.createPage(MiniProgramPage);
