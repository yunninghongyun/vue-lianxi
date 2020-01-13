<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<template>
  <div class="nav-box">
    <div class="nav">
      <div class="nav-top">Fringe Item Management</div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="Item Name">
          <el-input
            v-model="formInline.user"
            placeholder="Item Name"
          ></el-input>
        </el-form-item>
        <el-form-item label="City Name" style="float:right;">
          <el-select v-model="formInline.region" placeholder="City Name">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Effective Date">
          <el-input
            v-model="formInline.user0"
            placeholder="Effective Date"
          ></el-input>
        </el-form-item>
        <el-form-item label="Expire Date" style="float:right;">
          <el-input
            v-model="formInline.user1"
            placeholder="Expire Date"
          ></el-input>
        </el-form-item>
        <el-form-item label="Cost Amount" style="float:right;">
          <el-input
            v-model="formInline.user2"
            placeholder="Cost Amount"
          ></el-input>
        </el-form-item>
        <el-form-item label="Salary Lower Limit">
          <el-input
            v-model="formInline.user21"
            placeholder="Salary Lower Limit"
          ></el-input>
        </el-form-item>
        <el-form-item label="Salary Upper Limit" style="float:right;">
          <el-input
            v-model="formInline.user12"
            placeholder="Salary Upper Limit"
          ></el-input>
        </el-form-item>
        <el-form-item label="Company Ratio">
          <el-input
            v-model="formInline.user23"
            placeholder="Company Ratio"
          ></el-input>
        </el-form-item>
        <el-form-item label="Employee Ratio" style="float:right;">
          <el-input
            v-model="formInline.user14"
            placeholder="Employee Ratio"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="btn">
      <el-button type="primary">查询</el-button>
      <el-button type="primary">添加</el-button>
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
@import "./Fringeitem.css";
</style>
