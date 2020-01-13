<template>
  <div class="hCPlanItem">
    <h1>Headcount Plan Item</h1>
    <div class="hCPlanItem-top">
      <div class="hCPlanItem-left">
        <div>
          <span class="title-name">Plan Name</span>
          <input type="text" />
        </div>
        <div>
          <span class="title-name">Plan Month</span>
          <el-select v-model="value" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div>
          <span class="title-name">Plan Month</span>
          <el-select v-model="value" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div>
          <span class="title-name">Hire Type</span>
          <el-select v-model="value" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div>
          <span class="title-name">Leave Plan Item</span>
          <input type="text" />
        </div>
        <div>
          <span class="title-name">Department</span>
          <el-select v-model="value" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>

        <div>
          <span class="title-name">Perm/Temp</span>
          <el-select v-model="value" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div>
          <span class="title-name">Base Salary</span>
          <input type="text" />
        </div>
        <div>
          <span class="title-name">Fringe Amount</span>
          <input type="text" />
        </div>
        <div>
          <span class="title-name">Variable Benefit</span>
          <input type="text" />
        </div>
        <div>
          <span class="title-name title-names">Monthly Employment Cost</span>
          <input type="text" />
        </div>
      </div>
      <div class="hCPlanItem-right">
        <div>
          <span class="title-name">Entity Name</span>
          <input type="text" />
        </div>
        <div>
          <span class="title-name">Item Status</span>
          <el-select v-model="value" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div>
          <span class="title-name">Local BU Functions</span>
          <el-select v-model="value" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div>
          <span class="title-name">Hire City</span>
          <el-select v-model="value" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div>
          <span class="title-name">Employee Name</span>
          <input type="text" />
        </div>
        <div>
          <span class="title-name">Position</span>
          <el-select v-model="value" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div>
          <span class="title-name">Dir/In-Dir</span>
          <el-select v-model="value" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div>
          <span class="title-name">Bouns Type</span>
          <el-select v-model="value" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div>
          <span class="title-name">Bouns Amount</span>
          <input type="text" />
        </div>
        <div>
          <span class="title-name">OT Cost</span>
          <input type="text" />
        </div>
        <div>
          <span class="title-name">Emp Cost Calendarized</span>
          <input type="text" />
        </div>
      </div>
    </div>
    <div class="btn">
      <!-- <el-button type="primary">查询</el-button> -->
      <el-button type="primary">添加</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HCPlanItem",
  data() {
    return {
      activeName: "second",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  },
  methods: {
    handleClick(tab, event) {
      window.console.log(tab, event);
    }
  }
};
</script>

<style>
.hCPlanItem {
  width: 65%;
  margin: 0 auto;
}
.hCPlanItem .btn {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.hCPlanItem .btn button {
  width: 20%;
  margin-right: 10px;
}
.hCPlanItem h1 {
  text-align: center;
}
.hCPlanItem-top {
  display: flex;
  justify-content: space-between;
}
.hCPlanItem-top > div > div {
  margin-top: 20px;
}
.hCPlanItem-top > div > div .title-name {
  width: 10%;
  /* margin-right: 40px; */
}
.hCPlanItem-top div input {
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  padding: 0 24px;
  height: 40px;
  line-height: 40px;
}
.hCPlanItem-top > div > div .title-name {
  width: 140px;
  display: inline-block;
}
</style>
