<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<template>
  <div class="nav-box">
    <div class="nav">
      <div class="nav-top">Business Unit Management item</div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="Management BU">
          <el-input
            v-model="formInline.user"
            placeholder="Legal Entity"
          ></el-input>
        </el-form-item>
        <el-form-item label="Legal Entity" style="float:right;">
          <el-input
            v-model="formInline.user"
            placeholder="Legal Entity"
          ></el-input>
        </el-form-item>
        <el-form-item label="Company Code" >
          <el-select v-model="formInline.region" placeholder="City Name">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="HFM Code" style="float:right;">
          <el-input
            v-model="formInline.user0"
            placeholder="Country"
          ></el-input>
        </el-form-item>
        <el-form-item label="Country" >
          <el-input
            v-model="formInline.user10"
            placeholder="Country"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
   
  </div>
</template>

<script>
export default {
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    }
  },
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      tableData: [
        {
          date: "1",
          name: "FSP Asia",
          address: "Management BU",
          code: "1",
          country: "北京"
        },
        {
          date: "2",
          name: "FSP Asia",
          address: "Management BU",
          code: "2",
          country: "北京"
        },
        {
          date: "3",
          name: "FSP Asia",
          address: "Management BU",
          code: "3",
          country: "北京"
        },
        {
          date: "4",
          name: "FSP Asia",
          address: "Management BU",
          code: "4",
          country: "北京"
        }
      ]
    };
  }
};
</script>
<style>

</style>
