<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<template>
  <div class="nav-box">
    <div class="nav">
      <div class="nav-top">Employee Compensation Data</div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="Workday ID">
          <el-input
            v-model="formInline.user"
            placeholder="Workday ID"
          ></el-input>
        </el-form-item>

        <el-form-item label="Department" style="marginLeft:20px">
          <el-input
            v-model="formInline.users"
            placeholder="Department"
          ></el-input>
        </el-form-item>
        <el-form-item label="Sub Department">
          <el-input
            v-model="formInline.user"
            placeholder="Sub Department"
          ></el-input>
        </el-form-item>
        <el-form-item label="Cost Entity">
          <el-input
            v-model="formInline.user"
            placeholder="Cost Entity"
          ></el-input>
        </el-form-item>
        <el-form-item label="Legal Entity">
          <el-input
            v-model="formInline.user"
            placeholder="Legal Entity"
          ></el-input>
        </el-form-item>
        <el-form-item label="DL/IDL">
          <el-input v-model="formInline.user" placeholder="DL/IDL"></el-input>
        </el-form-item>
        <el-form-item label="City">
          <el-input v-model="formInline.user" placeholder="City"></el-input>
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
        <el-table-column prop="date" label="Workday ID" width="180">
        </el-table-column>
        <el-table-column prop="name" label="Employee Name" width="180">
        </el-table-column>

        <el-table-column prop="Status" label="Employment Status">
        </el-table-column>
        <el-table-column prop="name1" label="Local Section" width="180">
        </el-table-column>
        <el-table-column prop="name2" label="Attribution" width="180">
        </el-table-column>
        <el-table-column prop="name3" label="Department" width="180">
        </el-table-column>
        <el-table-column prop="name4" label="Sub Department" width="180">
        </el-table-column>
        <el-table-column prop="name5" label="Chinese Position" width="180">
        </el-table-column>
        <el-table-column prop="name6" label="Standard Position" width="180">
        </el-table-column>
        <el-table-column prop="name7" label="Date of entry" width="180">
        </el-table-column>
        <el-table-column prop="name8" label="Date of Leave" width="180">
        </el-table-column>

        <el-table-column prop="name10" label="Legal Entity" width="180">
        </el-table-column>
        <el-table-column prop="name11" label="Cost Entity" width="180">
        </el-table-column>
        <el-table-column prop="id" label="ID number"> </el-table-column>

        <el-table-column prop="id1" label="Work City CN"> </el-table-column>
        <el-table-column prop="id2" label="Perm/Temp"> </el-table-column>
        <el-table-column prop="id3" label="DL/IDL"> </el-table-column>
        <el-table-column prop="id4" label="GST Expense Category">
        </el-table-column>
        <el-table-column prop="id5" label="GST HC Category"> </el-table-column>
        <el-table-column prop="id6" label="Workday HFM Category">
        </el-table-column>
        <el-table-column prop="Cost1" label="Finance Cost Code">
        </el-table-column>
        <el-table-column prop="Cost2" label="Bonus Type"> </el-table-column>

        <el-table-column prop="addressb" label="Bonus Percent%">
        </el-table-column>
        <el-table-column prop="code" label="Award Type"> </el-table-column>
        <el-table-column prop="CRAR" label="CRAR"> </el-table-column>
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
          name1: "FSP Asia",
          name2: "FSP nmax",
          name3: "it",
          name4: "it",
          name5: "技术部",
          name6: "CN",
          name7: "202052",
          name8: "201952",
          name10: "FSP avi",
          name11: "cad avi",
          address: "Management BU",
          addressb: "Management BU",
          code: "1",
          Status: "0",
          id: "130211211232123221",
          id1: "wdeasd",
          id2: "haikou",
          id3: "dl",
          id4: "ppc",
          id5: "aa",
          id6: "aaa",
          country: "北京",
          Cost2: "as",
          Cost1: "北京",
          CRAR: "离职"
        },
        {
          date: "2",
          name: "FSP Asia",
          address: "Management BU",
          addressb: "Management BU",
          code: "2",
          country: "北京"
        },
        {
          date: "3",
          name: "FSP Asia",
          address: "Management BU",
          addressb: "Management BU",
          code: "3",
          country: "北京"
        },
        {
          date: "4",
          name: "FSP Asia",
          addressb: "Management BU",
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
@import "./Employee.css";
</style>
