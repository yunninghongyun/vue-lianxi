<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<template>
  <div class="nav-box">
    <div class="nav">
      <div class="nav-top">Business Unit Management</div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="Management BU">
          <el-input v-model="formInline.user" placeholder="BU Name"></el-input>
        </el-form-item>
        <el-form-item label="country" style="float:right;">
          <el-select v-model="formInline.region" placeholder="BU Type">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <br />
      <div class="btn bubtn">
        <el-button type="primary">查询</el-button>
        <el-button type="primary"
          ><router-link to="/home/Bumagitem">添加</router-link></el-button
        >
        <el-button type="primary">导入</el-button>
        <el-button type="primary">导出</el-button>
      </div>
    </div>
    <div class="nav-list">
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        :row-class-name="tableRowClassName"
      >
        <el-table-column prop="date" label="SN" width="180"></el-table-column>
        <el-table-column
          prop="name"
          label="Management BU"
          width="180"
        ></el-table-column>
        <el-table-column prop="address" label="Legal Entity"></el-table-column>
        <el-table-column prop="addressa" label="Company Code"></el-table-column>
        <el-table-column prop="code" label="HFM Code"></el-table-column>
        <el-table-column prop="country" label="Country"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template class="btn" slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >修改</el-button
            >
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
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
    },
    handleClick(row) {
      window.console.log(row);
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
          addressa: "Management BU",
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
@import "./bumag.css";
</style>
