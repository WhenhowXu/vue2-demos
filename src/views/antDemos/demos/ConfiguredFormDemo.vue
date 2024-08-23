<template>
  <base-ant-form
    ref="baseAntFormRef"
    :form="formData"
    labelInPlaceHolder
    :fields="fields"
  ></base-ant-form>
</template>
<script>
export default {
  name: "ConfiguredFormDemo",
  data() {
    return {
      options1: [
        { label: "选项一", value: "1" },
        { label: "选项二", value: "2" },
        { label: "选项三", value: "3" },
        { label: "选项四", value: "4" },
      ],
      fields: [
        { type: "input", label: "用户名称", prop: "clientName" },
        {
          type: "select",
          label: "选择",
          prop: "clientName1",
          required: true,
          options: [
        { label: "选项一", value: "1" },
        { label: "选项二", value: "2" },
        { label: "选项三", value: "3" },
        { label: "选项四", value: "4" },
      ],
        },
        { type: "input", label: "用户名称3", prop: "clientName2", span: 8 },
        { type: "input", label: "用户名称4", prop: "clientName4", span: 8 },
      ],
      formData: {},
     
    };
  },
};
</script>
