<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<template>
  <div class="nav-box">
    <div class="nav">
      <div class="nav-top">Branch Department Management</div>
      <div class="btn">
        <el-button type="primary">查询</el-button>
        <el-button type="primary">添加</el-button>
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
        <el-table-column
          prop="date"
          label="Chinese Sub Dept.(Please Select)"
          width="100"
        ></el-table-column>
        <el-table-column prop="name" label="部门" width="100"></el-table-column>
        <el-table-column prop="address" label="工时类型"></el-table-column>
        <el-table-column prop="code" label="分类"></el-table-column>
        <el-table-column prop="country" label="归属"></el-table-column>
        <el-table-column
          prop="IDL"
          label="Finance Cost Type-IDL"
        ></el-table-column>
        <el-table-column
          prop="DL"
          label="Finance Cost Type-DL"
        ></el-table-column>
        <el-table-column
          prop="organization"
          label="BPM组织机构定义类型-分部门"
        ></el-table-column>
        <el-table-column
          prop="organizationb"
          label="BPM组织机构定义类型-部门"
        ></el-table-column>
        <el-table-column prop="codec" label="BPM分部门编码"></el-table-column>
        <el-table-column prop="codeb" label="BPM部门编码"></el-table-column>
        <el-table-column
          prop="mechanism"
          label="ERP分支机构名称"
        ></el-table-column>
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
          date: "北京行政部",
          name: "FSP Asia",
          address: "Management BU",
          code: "1",
          country: "北京",
          IDL: "701GL201 Admin",
          DL: "701GL201 Admin",
          organization: "2",
          organizationb: "3",
          codec: "ZN001",
          codeb: "ZN001",
          mechanism: "地区销售管理"
        },
        {
          date: "地区销售管理-安徽",
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
@import "./branchdep.css";
</style>
