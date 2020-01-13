<template>
  <div class="positionCost">
    <h1>Position Cost</h1>
    <!-- <div class="positionCost-top">
      <div class="plan-name">
        <span>Plan Name</span>
        <input type="text" />
        <el-input v-model="input" placeholder="请输入内容"></el-input>
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
    </div> -->
    <div class="positionCost-top">
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
        <el-button type="primary">添加</el-button>
        <el-button type="primary">导入</el-button>
        <el-button type="primary">导出</el-button>
      </div>
    </div>

    <div class="positionCost-main">
      <el-table :data="tableData" border>
        <el-table-column prop="num" label="SN"></el-table-column>
        <el-table-column
          prop="name"
          label="Standard Position CN"
        ></el-table-column>
        <el-table-column
          prop="address"
          label="Standard Position EN"
        ></el-table-column>
        <el-table-column
          prop="Base Salary（1）"
          label="Base Salary（1）"
        ></el-table-column>
        <el-table-column
          prop="Base Salary（2） "
          label="Base Salary（2）"
        ></el-table-column>
        <el-table-column
          prop="Base Salary（3）"
          label="Base Salary（3）"
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
    <div class="block">
      <el-pagination layout="prev, pager, next" :total="150"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "positionCost",
  data() {
    return {
      input: "",
      tableData: [
        {
          num: "1",
          name: "工人",
          address: "Operator "
        },
        {
          num: "2",
          name: "职员",
          address: "Staff"
        },
        {
          num: "3",
          name: "工程师",
          address: "Engineering"
        },
        {
          num: "4",
          name: "主管",
          address: "Supervisor"
        },
        {
          num: "5",
          name: "经理",
          address: "Manager"
        },
        {
          num: "6",
          name: "业务",
          address: "Sales"
        },
        {
          num: "7",
          name: "技术",
          address: "Technician"
        },
        {
          num: "8",
          name: "内勤",
          address: "Sales Support"
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
.positionCost {
  width: 66%;
  margin: 0 auto;
}
.positionCost h1 {
  text-align: center;
}
.positionCost-top {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.positionCost-top .plan-name {
  display: flex;
}
.positionCost-top .plan-name span {
  margin-right: 60px;
  line-height: 40px;
}
.positionCost-top .plan-name input {
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  padding: 0 24px;
  height: 40px;
  line-height: 40px;
}
.positionCost-top .plan-status > span {
  margin-right: 40px;
}
.entity-name {
  margin-top: 40px;
}
.entity-name > span {
  margin-right: 50px;
}
.positionCost-main {
  margin-top: 40px;
}
.positionCost-main .el-table th > .cell {
  text-align: center;
}
.el-table .cell {
  display: flex;
}
.entity-name button {
  height: 40px;
  margin-left: 20px;
}
.el-pagination {
  margin-top: 10px;
  text-align: right;
}
</style>
