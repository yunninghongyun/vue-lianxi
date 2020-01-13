<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<template>
  <div class="nav-box">
    <div class="nav">
      <div class="nav-top">Fringe Template Management</div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="Template Name">
          <el-input
            v-model="formInline.user"
            placeholder="Template Name"
          ></el-input>
        </el-form-item>
        <el-form-item label="Entity Name" style="float:right;">
          <el-select v-model="formInline.region" placeholder="Entity Name">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Entity Name">
          <el-select v-model="formInline.region1" placeholder="City Name">
            <el-option label="上海" value="shanghai"></el-option>
            <el-option label="北京" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
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
          label="Fringe Item"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="address"
          label="Effective Date"
        ></el-table-column>
        <el-table-column prop="code" label="Expire Date"></el-table-column>

        <el-table-column
          prop="country"
          label="Base Upper Limit"
        ></el-table-column>
        <el-table-column
          prop="country"
          label="Base Lower Limit"
        ></el-table-column>
        <el-table-column
          prop="country"
          label="Company  Ratio"
        ></el-table-column>
        <el-table-column
          prop="country"
          label="Employee Ratio"
        ></el-table-column>
        <el-table-column prop="country" label="Cost Amount"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template class="btn" slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >修改</el-button
            >
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="btn">
        <el-button type="primary">查询</el-button>
        <el-button type="primary">添加</el-button>
        <el-button type="primary">导入</el-button>
        <el-button type="primary">导出</el-button>
      </div>
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
          code: "1"
        },
        {
          date: "2",
          name: "FSP Asia",
          address: "Management BU",
          code: "2"
        },
        {
          date: "3",
          name: "FSP Asia",
          address: "Management BU",
          code: "3"
        },
        {
          date: "4",
          name: "FSP Asia",
          address: "Management BU",
          code: "4"
        }
      ]
    };
  }
};
</script>
<style>
@import "./Fringe.css";
</style>
