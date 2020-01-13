<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<template>
  <div class="nav-box">
    <div class="nav">
      <div class="nav-top">Employee Master Data item</div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="Workday ID">
          <el-select v-model="formInline.region1" placeholder="Workday ID">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Employee Name" style="float:right;">
          <el-select v-model="formInline.region2" placeholder="Employee Name">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Employment Status">
          <el-select
            v-model="formInline.region3"
            placeholder="Employment Status"
          >
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Local Section" style="float:right;">
          <el-select v-model="formInline.region4" placeholder="Local Section">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Attribution">
          <el-select v-model="formInline.region5" placeholder="Attribution">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Department" style="float:right;">
          <el-select v-model="formInline.region6" placeholder="Department">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Sub Department">
          <el-select v-model="formInline.region7" placeholder="Sub Department">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Chinese Position" style="float:right;">
          <el-select
            v-model="formInline.region8"
            placeholder="Chinese Position"
          >
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Standard Position">
          <el-select
            v-model="formInline.region9"
            placeholder="Standard Position"
          >
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Chinese Position" style="float:right;">
          <el-select
            v-model="formInline.region10"
            placeholder="Chinese Position"
          >
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Standard Position">
          <el-select
            v-model="formInline.region11"
            placeholder="Standard Position"
          >
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Date of entry" style="float:right;">
          <el-select v-model="formInline.region12" placeholder="Date of entry">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Date of Leave">
          <el-select v-model="formInline.region13" placeholder="Date of Leave">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Legal Entity" style="float:right;">
          <el-select v-model="formInline.region14" placeholder="Legal Entity">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Cost Entity">
          <el-select v-model="formInline.region15" placeholder="Cost Entity">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="ID number" style="float:right;">
          <el-select v-model="formInline.region16" placeholder="ID number">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Work City CN">
          <el-select v-model="formInline.region17" placeholder="Work City CN">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Perm/Temp" style="float:right;">
          <el-select v-model="formInline.region18" placeholder="Perm/Temp">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="DL/IDL">
          <el-select v-model="formInline.region19" placeholder="DL/IDL">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="GST Expense Category" style="float:right;">
          <el-select
            v-model="formInline.region20"
            placeholder="GST Expense Category"
          >
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="GST HC Category">
          <el-select
            v-model="formInline.region21"
            placeholder="GST HC Category"
          >
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Workday HFM Category" style="float:right;">
          <el-select
            v-model="formInline.region22"
            placeholder="Workday HFM Category"
          >
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Finance Cost Code">
          <el-select
            v-model="formInline.region23"
            placeholder="Finance Cost Code"
          >
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Bonus Type" style="float:right;">
          <el-select v-model="formInline.region24" placeholder="Bonus Type">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Bonus Percent%">
          <el-select v-model="formInline.region25" placeholder="Bonus Percent%">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Award Type" style="float:right;">
          <el-select v-model="formInline.region26" placeholder="Award Type">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="CRAR(Yes/No)">
          <el-select v-model="formInline.region27" placeholder="CRAR(Yes/No)">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="btn embtn">
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
          addressb: "Management BU",
          code: "1",
          country: "北京"
        },
        {
          date: "2",
          name: "FrwsP Asia",
          address: "Management BU",
          addressb: "depacent BU",
          code: "2",
          country: "北京"
        },
        {
          date: "3",
          name: "FSP Asia",
          address: "Management BU",
          addressb: "pcareat BU",
          code: "3",
          country: "北京"
        },
        {
          date: "4",
          name: "FSP Asia",
          addressb: "Management BU",
          address: "ectra BU",
          code: "4",
          country: "北京"
        }
      ]
    };
  }
};
</script>
<style>
@import "./Employeeitem.css";
</style>
