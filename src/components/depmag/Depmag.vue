<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<template>
  <div>
    <div class="nav">
      <div class="nav-top">Department Management</div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="Department Name">
          <el-input
            v-model="formInline.user"
            placeholder="Department Name"
          ></el-input>
        </el-form-item>
        <el-form-item label="Function" class="depright">
          <el-select v-model="formInline.region1" placeholder="Function">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="FIN Cost Type- IDL">
          <el-select
            v-model="formInline.region2"
            placeholder="FIN Cost Type- IDL"
          >
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="FIN Cost Type- DL" class="depright">
          <el-select
            v-model="formInline.region3"
            placeholder="直接技术服务成本"
          >
            <el-option label="生产成本" value="shanghai"></el-option>
            <el-option label="直接技术服务成本" value="beijing"></el-option>
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
          label="Department Name"
          width="180"
        ></el-table-column>
        <el-table-column prop="address" label="Function"></el-table-column>
        <el-table-column
          prop="code"
          label="FIN Cost Type- IDL"
        ></el-table-column>
        <el-table-column
          prop="country"
          label="FIN Cost Type- DL"
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
    <div class="btn">
      <el-button type="primary">查询</el-button>
      <el-button type="primary">添加</el-button>
      <el-button type="primary">导入</el-button>
      <el-button type="primary">导出</el-button>
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
@import "./Depmag.css";
</style>
