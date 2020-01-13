<template>
  <div class="hCPlanManagement">
    <h1>Headcount Plan Management</h1>
    <div class="hCPlanManagement-top">
      <div class="plan-name">
        <span>Plan Name</span>
        <input type="text" />
        <!-- <el-input v-model="input" placeholder="请输入内容"></el-input> -->
      </div>
      <div class="plan-status">
        <span>Plan Status</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
    </div>
    <div class="hCPlanManagement-top">
      <div class="entity-name">
        <span>Entity Name</span>
        <el-select v-model="value" clearable placeholder="请选择">
          <el-option
            v-for="item in optionstwo"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-button type="primary">查询</el-button>
      </div>
    </div>

    <div class="hCPlanManagement-main">
      <el-table :data="tableData" border>
        <el-table-column prop="num" label="SN"></el-table-column>
        <el-table-column prop="name" label="Forecast Type"></el-table-column>
        <el-table-column prop="address" label="Forecast Status"></el-table-column>
        <el-table-column prop="Plan Month" label="Plan Month"></el-table-column>
        <el-table-column prop="Local BU Section " label="Local BU Section"></el-table-column>
        <el-table-column prop="Hire Type" label="Hire Type"></el-table-column>
        <el-table-column prop="Position" label="Position"></el-table-column>
        <el-table-column prop="Employee ID" label="Employee ID"></el-table-column>
        <el-table-column prop="Employee Name" label="Employee Name"></el-table-column>
        <el-table-column prop="Hire City" label="Hire City"></el-table-column>
        <el-table-column prop="Base Salary" label="Base Salary"></el-table-column>
        <el-table-column prop="Benefits" label="Benefits"></el-table-column>
        <el-table-column prop="Monthly Emp Cost" label="Monthly Emp Cost"></el-table-column>
        <el-table-column prop="Calendarized Cost" label="Calendarized Cost"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template class="btn" slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
  <el-pagination
    layout="prev, pager, next"
    :total="150">
  </el-pagination>
</div>
  </div>
</template>

<script>
export default {
  name: "HCPlanManagement",
  data() {
    return {
      input: "",
      tableData: [
        {
          num: "1",
          name: "Hire",
          address: "Active "
        },
        {
          num: "2",
          name: "Hire",
          address: "Closed"
        },
        {
          num: "3",
          name: "CRAR",
          address: "Closed"
        },
        {
          num: "4",
          name: "Leave",
          address: "Cancelled"
        }
      ],
      options: [
        {
          value: "选项1",
          label: "Draft"
        },
        {
          value: "选项2",
          label: "Active"
        },
        {
          value: "选项3",
          label: "Closed"
        }
      ],
      optionstwo: [
        {
          value: "选项1",
          label: "GST"
        },
        {
          value: "选项2",
          label: "Shengjie"
        },
        {
          value: "选项3",
          label: "Shanghai Trading"
        }
      ],
      value: ""
    };
  },
  methods: {
    handleClick(row) {
      window.console.log(row);
    }
  }
};
</script>

<style>
.hCPlanManagement {
  width: 66%;
  margin: 0 auto;
}
.hCPlanManagement h1 {
  text-align: center;
}
.hCPlanManagement-top {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.hCPlanManagement-top .plan-name {
  display: flex;
}
.hCPlanManagement-top .plan-name span {
  margin-right: 60px;
  line-height: 40px;
}
.hCPlanManagement-top .plan-name input {
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  padding: 0 24px;
  height: 40px;
  line-height: 40px;
}
.hCPlanManagement-top .plan-status > span {
  margin-right: 40px;
}
.entity-name {
  margin-top: 40px;
}
.entity-name > span {
  margin-right: 50px;
}
.hCPlanManagement-main {
  margin-top: 40px;
}
.hCPlanManagement-main .el-table th > .cell {
  text-align: center;
}
.el-table .cell {
  display: flex;
}
.entity-name button {
  height: 40px;
  margin-left: 20px;
}
</style>
